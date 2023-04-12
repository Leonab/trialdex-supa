import { Box, Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow } from "@mui/material";
import EnhancedTableHead from "./EnhancedTableHead";

const EnhancedTable = (props) => {
    const columnHeaderData = props.columnHeaderData;
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
                        <EnhancedTableHead columns={columnHeaderData} />
                        <TableBody>
                            {props.children}
                        </TableBody>
                        <TableFooter>
                            {/* <TableRow>
                                <TablePagination rowsPerPageOptions={[10, 50]} />
                            </TableRow> */}
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Paper>

        </Box>
    );
};

export default EnhancedTable;