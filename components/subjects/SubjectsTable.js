import EnhancedTable from "../UI/Table/EnhancedTable";
import SubjectRow from "./SubjectRow";
import columnHeaderData from "./SubjectTableHead.json";

const SubjectsTable = (props) => {
	const subjects = props.data;
	return (
		<EnhancedTable columnHeaderData={columnHeaderData}>
			{subjects.map((sub, index) => (
				<SubjectRow key={sub.id} data={sub} index={index} />
			))}
		</EnhancedTable>
	);
};

export default SubjectsTable;
