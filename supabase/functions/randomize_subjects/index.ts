// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import * as postgres from 'https://deno.land/x/postgres@v0.14.2/mod.ts'
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// Get the connection string from the environment variable "SUPABASE_DB_URL"
const databaseUrl = Deno.env.get('SUPABASE_DB_URL')!

// Create a database pool with three connections that are lazily established
const pool = new postgres.Pool(databaseUrl, 3, true)

serve(async (_req) => {
	try {
		const { trial_id, max_count } = await _req.json();
		console.log(trial_id);
		// Grab a connection from the pool
		const connection = await pool.connect()

		try {
			// Run a query
			const result = await connection.queryObject`SELECT * FROM subjects WHERE trial_id=${trial_id}`
			const subjects = result.rows;

			shuffleArray(subjects);

			let index = 0;
			let newSubjects = [];
			let oldSubjects = [];
			const freqMap: { [key: string]: number } = {};

			for (const elem of subjects) {
				if (elem.group_id == null || elem.group_id === undefined) {
					newSubjects.push(elem);
				} else {
					const key = elem.group_id.toString();
					freqMap[key] = freqMap[key] ? freqMap[key] + 1 : 1;
					oldSubjects.push(elem);
				}
			}

			console.log(newSubjects);
			let finalSubjects = [];
			for (let i = 0; i < newSubjects.length; i++) {
				if (freqMap[index.toString()] == max_count) {
					index = (index + 1) % max_count;
				}
				finalSubjects.push({ ...newSubjects[i], 'group_id': index });
				index = (index + 1) % max_count;
			}

			finalSubjects = [...finalSubjects, ...oldSubjects];
			console.log(finalSubjects);

			let updateQuery = `UPDATE subjects SET group_id = CASE id`;
			for (let i = 0; i < finalSubjects.length; i++) {
				const ns = finalSubjects[i];
				updateQuery += ` WHEN ${ns?.id} THEN ${ns.group_id}`;
			}
			updateQuery += ` END WHERE trial_id=${trial_id}`;

			const res = await connection.queryObject(updateQuery);
			console.log(res);
			// Encode the result as pretty printed JSON
			const body = JSON.stringify(
				finalSubjects,
				(key, value) => (typeof value === 'bigint' ? value.toString() : value),
				2
			)

			// Return the response with the correct content type header
			return new Response(body, {
				status: 200,
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
				},
			})
		} finally {
			// Release the connection back into the pool
			connection.release()
		}
	} catch (err) {
		console.error(err)
		return new Response(String(err?.message ?? err), { status: 500 })
	}
});


function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
