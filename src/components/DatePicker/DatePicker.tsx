import React, { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";


const DatePicker: React.FC = ()=>{
    const [showCalendar,setShowCalendar] = useState<boolean>(false)

    const handleShow = () => {
        setShowCalendar(!showCalendar)
    }
    return(
        <>
        <button className="border border-gray-200 flex items-center p-1 gap-2 
            hover:bg-gray-200 rounded w-full"
            onClick={handleShow} type="button"
            >
            <CalendarIcon size={19}/> <span className="font-monsterat font-semibold">Chosiir une date</span>
        </button>
        {showCalendar && <Calendar className="absolute bg-gray-300 rounded top-14 opacity-95 z-30" />}
        
        </>
    )
}

export default DatePicker