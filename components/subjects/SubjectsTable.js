import EnhancedTable from "../UI/Table/EnhancedTable";
import SubjectRow from "./SubjectRow";
import columnHeaderData from "./SubjectTableHead.json";

const SubjectsTable = (props) => {
	const subjects = props.data;
	const trial = props.trial;
	return (
		<EnhancedTable columnHeaderData={columnHeaderData} enableCheckBox={false}>
			{subjects.map((sub, index) => (
				<SubjectRow key={sub.id} row={sub} index={index} trial={trial} enableCheckBox={false} />
			))}
		</EnhancedTable>
	);
};

export default SubjectsTable;
