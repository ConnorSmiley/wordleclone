import './App.css';
import Navbar from "./component/navbar";
import Keyboard from "./component/Keyboard";
import Board from "./component/Board";
import tw from "twin.macro";
import styled from "styled-components";
import {useState} from "react";
import {boardDefault} from "./component/WordMatrix";
import {createContext} from "react";


const AppStyles = styled.div`
  ${tw`
    bg-black
    w-screen
    h-screen
    
    `}
`

export const AppContext = createContext({})

function App() {
    const [board, setBoard] = useState(boardDefault)
    const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0})

    const onSelectLetter = (keyVal) => {
        if (currAttempt.letterPos > 4) return
        const newBoard = [...board]
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal
        setBoard(newBoard)
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1})
    };

    const onDelete = (keyVal) => {
        if (currAttempt.letterPos === 0) return
        const newBoard = [...board]
        newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = ""
        setBoard(newBoard)
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1} )
    };

    const onEnter = (keyVal) => {
        if (currAttempt.letterPos !== 5) return;
        setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0} )
    };



    return (
        <>
            <AppStyles>
                <Navbar />
                <AppContext.Provider value={{board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, onDelete, onEnter}}>
                    <Board />
                    <Keyboard />
                </AppContext.Provider>
            </AppStyles>
        </>
    );
}

export default App;
