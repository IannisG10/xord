import React from "react"
//import TopBar from "../TopBar/TopBar"
import TopBar from "../TopBar/TopBar"
import DashBoard from "../DashBoard/DashBoard"

const Board: React.FC = () => {
    return(
        <div className="flex flex-col flex-1">
            <TopBar/>
            <DashBoard/>
        </div>
    )
}

export default Board