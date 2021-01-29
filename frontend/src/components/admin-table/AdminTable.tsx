import React, {useState} from "react";
import "./AdminTable.scss"
import {TableRow} from "./TableRow/TableRow";
import {AdminData, AdminStatusType} from "../../store/admin/types";
import selectors from "../../store/admin/selectors/selectors"
import {useSelector} from "react-redux";

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

    return (
        <div className={"admin-table-container"}>
            <span>List of employees:</span>
            <div className="search-filter-section">
                <input className="search-bar" onChange={onSearchChanged} type="text" placeholder="Search by name..."/>
                <select onChange={onDropDownChange}>
                    <option value={""}>Filter By Status...</option>
                    {Object.entries(AdminStatusType)
                        .map((entry) => (<option value={entry[0]}>{entry[1]}</option>))}
                </select>
            </div>
            <div className="rows-container">
                {props.admins
                    .filter((admin) => admin.name.toLowerCase().includes(search.toLowerCase()))
                    .filter((admin) => admin.status.toLowerCase().includes(filter.toLowerCase()))
                    .map((admin, index) =>
                        <TableRow name={admin.name} status={admin.status} key={index}></TableRow>)}
            </div>
        </div>
    );
}
