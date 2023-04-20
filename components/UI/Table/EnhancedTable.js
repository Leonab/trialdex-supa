import { Box, Paper, Table, TableBody, TableContainer, TableFooter } from "@mui/material";
import EnhancedTableHead from "./EnhancedTableHead";

const EnhancedTable = (props) => {
    const { columnHeaderData, enableCheckBox } = props;


    return (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
            <Paper sx={{ width: '100%' }}>
                <TableContainer sx={{ maxHeight: 550 }}>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="table-enhanced"
                        size="medium"
                        stickyHeader
                    >
                        <EnhancedTableHead columns={columnHeaderData} enableCheckBox={enableCheckBox} />
                        <TableBody>
                            {props.children}
                        </TableBody>
                        <TableFooter>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Paper>

        </Box>
    );
};

export default EnhancedTable;