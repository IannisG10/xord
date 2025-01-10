import React from "react"
import SideBar from "../../components/SideBar/SideBar"
//import TopBar from "../../components/TopBar/TopBar"
//import DashBoard from "../../components/DashBoard/DashBoard"
import Board from "../../components/Board/Board"

const Acceuil: React.FC = ()=> {
    return(
        <div className=" flex">
            <SideBar/>
            {/* <div>
                <TopBar/>
                <DashBoard/>
            </div> */}
            <Board/>
        </div>
    )
}

export default Acceuil