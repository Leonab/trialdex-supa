import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

const EnhancedTableHead = (props) => {
    const { columns, enableCheckbox } = props;
    return (
        <TableHead>
            <TableRow>
                {enableCheckbox && <TableCell padding="checkbox">
                    <Checkbox 
                        color="primary"
                        inputProps={{
                            'aria-label': 'select all',
                        }}
                    />
                </TableCell>}
                {columns.map((column) => (
                    <TableCell
                        key={column.id}
                        padding="normal"
                    >
                        <TableSortLabel>
                            {column.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default EnhancedTableHead;