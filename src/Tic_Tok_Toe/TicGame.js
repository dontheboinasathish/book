import React, { useState } from 'react'
import '../Tic_Tok_Toe/Tic_Tok.css';



function TicGame() {
    const [turn, setTurn] = useState("X")

    
    const handleclick = () => {
        console.log("click")
        setTurn("O")
    }
    return (
        <div >

            <h1 className='Onediv'>TIC TOK GAME</h1>
            <table style={{ border: '2px solid red', borderCollapse: "collapse" }}>
                <tbody>
                    <tr>
                        <td onClick={() => handleclick(0)}>
                            {
                                turn === "X" ? null : "O"
                            }
                        </td>
                        <td onClick={() => handleclick(1)}>
                            {
                                turn === "O" ? "X" : null
                            }
                        </td>
                        <td onClick={() => handleclick(2)}></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>


            <div>
                <button>Change</button>
            </div>
        </div>
    )
}

export default TicGame;
