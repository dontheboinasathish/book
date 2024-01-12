import React, { useState } from "react";
import "../Tic_Tok_Toe/Boxss.css";


const Boxss = ({ value, onClick }) => {

    const style = value === "X" ? "boxsize X" : "boxsize O"

    const Bords = ["W", "W", "W", "W", "W", "W", "W", "W", "W",]

    const [xmark, setXmark] = useState(false)

    const handleClick = (idx) => {
        console.log(idx, "id value")
        {
            xmark == idx ? setXmark("w") : setXmark("O")
        }
    }
    return (
        <div className="box_main">
            {
                Bords.map((value, idx) => {
                    return <button className={style} onClick={() => handleClick(idx)}>{xmark}</button>
                })
            }
        </div>
    )
}
export default Boxss;