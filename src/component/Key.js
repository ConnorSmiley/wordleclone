import React, {useContext} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {AppContext} from "../App";

const KeyStyle = styled.div`
  ${tw`
  bg-gray-700
  w-4
  h-10
  flex
  text-center
  items-center
  justify-center
  m-1
  py-4
  px-5
  rounded
  text-xl
  font-extrabold
  text-white
    `}
`
const BigKey = styled.div`
  ${tw`
    
    `}
`

export default function Key({keyVal}) {
    const {board, setBoard, currAttempt, setCurrAttempt, onDelete, onSelectLetter, onEnter} = useContext(AppContext)

    //Logic for clicking letter => tile
    const ClickLetter = () => {

        if (keyVal === "ENTER") {
            onEnter()
        } else if (keyVal === "Delete") {
            onDelete()
        } else {
            onSelectLetter(keyVal)
        }
    }

    return (
        <>
            <KeyStyle onClick={ClickLetter}>
                {keyVal}
            </KeyStyle>

        </>
    )
}
