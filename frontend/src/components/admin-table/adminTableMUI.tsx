import {AdminData, AdminStatusType} from "../../store/admin/types";
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import "./AdminTable.scss"
import {Card} from "@material-ui/core";

export interface AdminTableProps {
    admins: AdminData[]
}

export const AdminTableMUI: React.FC<AdminTableProps> = (props) => {
    return (
        <div className={"admin-table-container"}>
            <TableContainer>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow className={"secondary-color"}>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <div>
                        <TableBody className={"scrollable"}>
                            {props.admins.map((admin) => (
                                <TableRow hover key={admin.name}>
                                    <TableCell align="left">{admin.name}</TableCell>
                                    <TableCell align="right">{AdminStatusType[admin.status]}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </div>
                </Table>
            </TableContainer>
        </div>
    );
}
