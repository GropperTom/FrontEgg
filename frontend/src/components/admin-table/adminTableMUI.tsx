import {AdminData, AdminStatusType} from "../../store/admin/types";
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import "./AdminTable.scss"
import Paper from '@material-ui/core/Paper';
import {Card, makeStyles} from "@material-ui/core";

// const useStyles = makeStyles({
//     adminTableContainer: {
//         margin-top: 20px;
//             overflow-y: scroll;
//             height: 300px;
//         },
//     });

export interface AdminTableProps {
    admins: AdminData[]
}

export const AdminTableMUI: React.FC<AdminTableProps> = (props) => {
    return (
        <Card className={"admin-table-container"} variant={"outlined"}>
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow className={"secondary-color"}>
                            {/*<TableCell>Dessert (100g serving)</TableCell>*/}
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.admins.map((admin) => (
                            <TableRow className={"secondary-color"} key={admin.name}>
                                {/*<TableCell component="th" scope="row">*/}
                                {/*    {admin.name}*/}
                                {/*</TableCell>*/}
                                <TableCell align="left">{admin.name}</TableCell>
                                <TableCell align="right">{AdminStatusType[admin.status]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>

    );
}
