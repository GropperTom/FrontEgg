import React from "react";
import "./TableRow.scss"
import {AdminStatusType} from "../../../store/admin/types";

export interface TableRowProps {
    name: string;
    status: keyof typeof AdminStatusType;
}

export const TableRow: React.FC<TableRowProps> = (props) => {


    return (
        <div className="admin-table-row-container">
            <span>{props.name} ({AdminStatusType[props.status]})</span>
        </div>
    )
}
