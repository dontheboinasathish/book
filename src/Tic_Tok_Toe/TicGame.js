import React, { useState } from 'react'
import '../Tic_Tok_Toe/Tic_Tok.css';
import Boxss from './Boxss';



function TicGame({ onClick }) {

    return (
        <div>
            <h1 className='Onediv'>TIC TOK GAME</h1>
            <Boxss onClick={null} />
            
            <div>
                <button>Change</button>
            </div>
        </div>
    )
}
export default TicGame;
