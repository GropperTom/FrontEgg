import React, {useEffect} from "react";
import "./AdminViewScreen.scss"
import {AdminTable} from "../../components/admin-table/AdminTable";
import {AdminData, AdminStatusType} from "../../store/admin/types";
import {useDispatch, useSelector} from "react-redux";
import actions from "../../store/admin/actions/actions"
import selectors from "../../store/admin/selectors/selectors"

export interface AdminViewScreenProps {

}

export const AdminViewScreen: React.FC<AdminViewScreenProps> = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchAllAdmins());
    },[]);

    const user: AdminData = useSelector(selectors.getUser);
    const admins: AdminData[] = useSelector(selectors.getAdmins).filter((admin) => admin.name !== user.name);

    const onDropDownChange = (e: any) => {
        dispatch(actions.setStatus(e.target.value, user.name))
    };

    return (
        <div className="admin-view-screen-container">
            <div className="content-container">
                <span className="greeting-row">Hello {user.name}, you are {AdminStatusType[user.status]}</span>
                <span className="current-status">Update My Current Status:</span>
                <select onChange={onDropDownChange} className="dropdown">
                    {Object.entries(AdminStatusType).map((statusTypeEntry) => (<option value={statusTypeEntry[0]}>{statusTypeEntry[1]}</option>))}
                </select>
                <AdminTable admins={admins}/>
            </div>
        </div>
    );
}
