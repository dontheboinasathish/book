import React, { useState } from 'react'


function Tik() {




    return (
        <div>
            <button className="square" >
                {value}
            </button>

            <div>
                <section className="game-section">
                    <section className="game-board">
                        <section className="board-row">
                            {renderSquare(0)}
                            {renderSquare(1)}
                            {renderSquare(2)}
                        </section>
                        <section className="board-row">
                            {renderSquare(3)}
                            {renderSquare(4)}
                            {renderSquare(5)}
                        </section>
                        <section className="board-row">
                            {renderSquare(6)}
                            {renderSquare(7)}
                            {renderSquare(8)}
                        </section>
                        </section>
                        </section>
                    </div>
            </div>

            )
    }
            export default Tik;
