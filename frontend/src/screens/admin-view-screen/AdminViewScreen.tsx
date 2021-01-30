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
    useEffect(() => {
        dispatch(actions.fetchMe());
        dispatch(actions.fetchAllAdmins());
    },[]);

    const dispatch = useDispatch();
    const user: AdminData = useSelector(selectors.getUser);
    const admins: AdminData[] = useSelector(selectors.getAdmins).filter((admin) => admin.email !== user.email);

    const onDropDownChange = (e: any) => {
        dispatch(actions.setStatus(e.target.value, user.name))
    };

    const parseStatus = (status: keyof typeof AdminStatusType) => {
        switch(status) {
            case "WORKING":
                return "working";
            case "BUSINESS_TRIP":
                return "on a business trip";
            case "LUNCH_TIME":
                return "having lunch";
            case "ON_VACATION":
                return "on vacation";
        }
    }

    return (
        <div className="admin-view-screen-container">
            <div className="content-container">
                <h1 className="greeting-row">Hello {user.name}, you are {parseStatus(user.status)}!</h1>
                <div className={"update-status-row"}>
                    <h2 className="current-status">Update My Current Status:</h2>
                    <select onChange={onDropDownChange} className="dropdown">
                        <option selected disabled value={""}>Pick a status...</option>
                        {Object.entries(AdminStatusType).map((statusTypeEntry) => (<option value={statusTypeEntry[0]}>{statusTypeEntry[1]}</option>))}
                    </select>
                </div>
                <AdminTable admins={admins}/>
            </div>
        </div>
    );
}
