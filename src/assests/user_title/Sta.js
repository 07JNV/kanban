import React, { useState, useEffect } from "react";
import done from "../icons/Done.svg";
import todo from "../icons/To-do.svg";
import inprogress from "../icons/in-progress.svg";
import cancelled from "../icons/Cancelled.svg";
import backlog from "../icons/Backlog.svg";

const Sta = ({ val }) => {
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        switch (val) {
            case "In progress":
                setIcon(inprogress);
                break;
            case "Todo":
                setIcon(todo);
                break;
            case "Backlog":
                setIcon(backlog);
                break;
            case "Done":
                setIcon(done);
                break;
            default:
                setIcon(null); 
        }
    }, [val]); 
    console.log(val)

    return (
        <>
            {icon && <img style={{width:"100%",height:"auto"}} src={icon} alt={val} />}
        </>
    );
};

export default Sta;
