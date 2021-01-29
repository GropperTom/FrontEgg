import React from "react";
import "./AppHeader.scss"
import {Toolbar} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";


export interface AppHeaderProps {

}

export const AppHeader: React.FC<AppHeaderProps> = (props) => {
    return (
        <AppBar position={"static"}>
            <Toolbar className={"app-header"}>
                <h3 className={"header-item"}>
                    MyWorkStatus
                </h3>
            </Toolbar>
        </AppBar>

        // <div className={"app-header"}>
        //     <div className={"header-item"}>
        //         MyWorkStatus
        //     </div>
        //     <div className={"header-item header-buttons"}>
        //         <div className={"header-button"}>
        //             login
        //         </div>
        //         <div className={"header-button"}>
        //             register
        //         </div>
        //     </div>
        // </div>
    );
    // return (
    //     <div className={"app-header"}>
    //         <div className={"header-item"}>
    //             MyWorkStatus
    //         </div>
    //         <div className={"header-item header-buttons"}>
    //             <div className={"header-button"}>
    //                 login
    //             </div>
    //             <div className={"header-button"}>
    //                 register
    //             </div>
    //         </div>
    //     </div>
    // );
}
