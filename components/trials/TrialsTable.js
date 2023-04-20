import EnhancedTable from "../UI/Table/EnhancedTable"
import TrialRow from "./TrialRow";
import TrialTableHead from "./TrialTableHead.json";

const TrialsTable = (props) => {
    const trials = props.data;
    return (
        <EnhancedTable columnHeaderData={TrialTableHead} enableCheckBox={false}>
            {trials.map((trial, index) => <TrialRow key={trial.id} row={trial} enableCheckBox={false} />)}
        </EnhancedTable>
    );
};

export default TrialsTable;
