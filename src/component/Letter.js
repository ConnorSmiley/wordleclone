import React from "react";
import {useContext} from "react";
import {AppContext} from "../App";

export default function Letter({letterPos, attemptVal}) {
    const {board, setBoard} = useContext (AppContext)
    const letter = board[attemptVal][letterPos]

    return(
       <>
           <div>{letter}</div>
       </>
    )
}
