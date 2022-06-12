import React, {useEffect, useCallback, useContext} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Key from "./Key";
import {AppContext} from "../App";

const KeyboardStyles = styled.div`
  ${tw`
  flex
  items-center
  flex-col
  absolute
  bottom-0
  inset-x-0
    `}
`

const KeyboardStyles1 = styled.div`
    ${tw`
    absolute
  bottom-0
  items-center
  justify-center
  flex
  flex-col
  inset-x-0
    
    `}
`

//if change to button, changes keyboard layout
const KeyButton = styled.button`
  ${tw`
  bg-white
  uppercase
  text-xl
    
    `}
`

const Key1 = styled.div`
  ${tw`
    flex
    flex-row
    uppercase
    
    `}
`
const Key2 = styled.div`
  ${tw`
    flex
    flex-row
    uppercase
    
    `}
`
const Key3 = styled.div`
  ${tw`
    flex
    flex-row
    uppercase
    
    `}
`

export default function Keyboard() {
    const {board, setBoard, onEnter, onDelete, onSelectLetter} = useContext (AppContext)
    const keyBoardKeys = [["Q", "W", 'E', "r", "t", "y", "u", "i", "o", "p",],
        ["A", "s", "d", "f", "g", "h", "j", "k", "l"],
        ["enter", "z", "x", "c", "v", "b", "n", "m", "delete"]]

    const key1 = ["Q", "W", 'E', "r", "t", "y", "u", "i", "o", "p",]
    const key2 = ["A", "s", "d", "f", "g", "h", "j", "k", "l"]
    const key3 = ["z", "x", "c", "v", "b", "n", "m"]
    const handleKeyboard = useCallback(
        (e) => {
           if (e.key === "Enter") {
               onEnter()
           } else if (e.key === "Backspace") {
               onDelete()
           } else {
               key1.forEach((key) => {
                   if (e.key.toLowerCase() === key.toLowerCase()) {
                       onSelectLetter(key)
                   }})
               key2.forEach((key) => {
                   if (e.key.toLowerCase() === key.toLowerCase()) {
                       onSelectLetter(key)
                   }})
               key3.forEach((key) => {
                   if (e.key.toLowerCase() === key.toLowerCase()) {
                       onSelectLetter(key)
                   }})
           }
        },

    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard)
        return () => {
            document.removeEventListener("keydown", handleKeyboard)
        }
    }, [handleKeyboard])


    return (
        <>
            <KeyboardStyles>
                <Key1>
                    {key1.map(key => {
                        return <Key keyVal={key} id={key}/>
                    })}
                </Key1>
                <Key2>
                    {key2.map(key => {
                        return <Key keyVal={key} id={key}/>
                    })}
                </Key2>
                <Key3>
                    <Key keyVal={"ENTER"} />
                    {key3.map(key => {
                        return <Key keyVal={key} id={key}/>
                    })}
                    <Key keyVal={"Delete"} />
                </Key3>
            </KeyboardStyles>
        </>
    )
}

/*
<KeyboardStyles1>
                {keyBoardKeys.map(keyboardRow => {
                    return <div>
                        {keyboardRow.map(keyboardKey => {
                            return (
                                <KeyButton>{keyboardKey}</KeyButton>
                            )
                        })}
                    </div>
                })}
            </KeyboardStyles1>


*/

