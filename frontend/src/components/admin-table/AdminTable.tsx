import {AdminData, AdminStatusType} from "../../store/admin/types";
import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import "./AdminTable.scss"
import {TableHead} from "@material-ui/core";
import WorkIcon from '@material-ui/icons/Work';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

export interface AdminTableProps {
    admins: AdminData[]
}

export const AdminTable: React.FC<AdminTableProps> = (props) => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<keyof typeof AdminStatusType | "">("");

    const onSearchChanged = (e: any) => {
        setSearch(e.target.value);
    }

    const onDropDownChange = (e: any) => {
        setFilter(e.target.value);
    };

    const getStatusCell = (status: keyof typeof AdminStatusType) => {
        let icon;
        switch(status) {
            case "ON_VACATION":
                icon = <BeachAccessIcon fontSize="large" style={{color: "red"}}/>;
                break;
            case "LUNCH_TIME":
                icon = <RestaurantIcon fontSize="large" style={{color: "orange"}}/>;
                break;
            case "WORKING":
                icon = <WorkIcon fontSize="large" style={{color: "green"}}/>;
                break;
            case "BUSINESS_TRIP":
                icon = <FlightTakeoffIcon fontSize="large" style={{color: "purple"}}/>;
                break;
        }
        return <TableCell align="left"><div className={"status-column"}>{icon}<pre>  </pre>({AdminStatusType[status]})</div></TableCell>
    }

    return (
        <div>
            <div className="search-filter-section">
                <input className={"search-bar"} onChange={onSearchChanged} type="text" placeholder="Search by name..."/>
                <select className={"dropdown"} onChange={onDropDownChange}>
                    <option value={""}>Filter by status...</option>
                    {Object.entries(AdminStatusType)
                        .map((entry) => (<option value={entry[0]}>{entry[1]}</option>))}
                </select>
            </div>
            <div className={"table-header-container"}>
                <TableContainer>
                    <Table style={{ tableLayout: 'fixed' }}>
                        <TableHead>
                            <TableRow className={"table-header"}>
                                <TableCell className={"table-header-cell"} align="left">Name</TableCell>
                                <TableCell className={"table-header-cell"} align="left">Email</TableCell>
                                <TableCell className={"table-header-cell"} align="left">Status</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                <div className={"table-header-filler"}/>
            </div>
            <div className={"admin-table-container"}>
                <TableContainer>
                    <Table style={{ tableLayout: 'fixed' }}>
                        <TableBody>
                            {props.admins
                                .filter((admin) => admin.name.toLowerCase().includes(search.toLowerCase()))
                                .filter((admin) => admin.status.toLowerCase().includes(filter.toLowerCase()))
                                .map((admin) => (
                                <TableRow hover key={admin.name}>
                                    <TableCell align="left">{admin.name}</TableCell>
                                    <TableCell align="left">{admin.email}</TableCell>
                                    {getStatusCell(admin.status)}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
