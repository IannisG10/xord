import React from "react"
import SideBar from "../../components/SideBar/SideBar"
import TopBar from "../../components/TopBar/TopBar"
import DashBoard from "../../components/DashBoard/DashBoard"

const Acceuil: React.FC = ()=> {
    return(
        <div className="h-full flex">
            <SideBar/>
            <div>
                <TopBar/>
                <DashBoard/>
            </div>
        </div>
    )
}

export default Acceuil