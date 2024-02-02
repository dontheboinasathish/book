import React, { useEffect, useLayoutEffect, useState } from 'react'
function UseLayoutHook() {
    const [value, setValue] = useState("GFG")

    useLayoutEffect(() => {
        console.log(
            "UseLayout is called with the value of ",
            value
        );
    }, [value]);
    
    setTimeout(() => {
        setValue("SATHISH YADAV")
    }, [5000])

    return (
        <div
            style={{
                textAlign: "center",
                margin: "auto", 
            }}
        >
            <h1>{value}</h1> is
            the greatest portal for geeks!
        </div>
    )
}
export default UseLayoutHook;
