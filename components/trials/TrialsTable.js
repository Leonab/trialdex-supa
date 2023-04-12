import EnhancedTable from "../UI/Table/EnhancedTable"
import TrialRow from "./TrialRow";
import TrialTableHead from "./TrialTableHead.json";

const TrialsTable = (props) => {
    const trials = props.data;
    return (
        <EnhancedTable columnHeaderData={TrialTableHead}>
            {trials.map((trial, index) => <TrialRow key={trial.id} data={trial} />)}
        </EnhancedTable>
    );
};

export default TrialsTable;
