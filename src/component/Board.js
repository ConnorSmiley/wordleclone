import React, {useContext, useState} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {boardDefault} from "./WordMatrix";
import Letter from "./Letter";
import {AppContext} from "../App";

const BoardContainer = styled.div`
  ${tw`
  flex
  items-center
  justify-center
  bg-black
    `}
`

const BoardStyle = styled.div`
  ${tw`
    w-full
    max-w-2xl
    bg-black
    grid
    gap-4
    flex
    flex-col
    
    `}
`

const Row = styled.div`
  ${tw`
  bg-gray-500
  flex
  h-16
  flex-row
  grid
  grid-cols-5
  text-center
  items-center
  
    `}
`

const Letters = styled(Letter)`
  ${tw`
    
    `}
`
const Letters2 = styled.div`
  ${tw`
    font-bold

    
    `}
`


export default function Board() {
    const {board, setBoard} = useContext (AppContext)
    return (
        <>
            <BoardContainer>
                <BoardStyle>
                    <Row>
                        {board.slice(0,1).map((x, attemptVal, letterPos)=> {
                            return (
                                <Letters2
                                    attemptVal={attemptVal}
                                    letterPos={letterPos}
                                    id={x}
                                >{x}</Letters2>)})}
                    </Row>
                    <Row>
                        <Letter attemptVal={0} letterPos={0} />
                        <Letter attemptVal={0} letterPos={1} />
                        <Letter attemptVal={0} letterPos={2} />
                        <Letter attemptVal={0} letterPos={3} />
                        <Letter attemptVal={0} letterPos={4} />
                    </Row>
                    <Row>
                        <Letters attemptVal={1} letterPos={0} />
                        <Letters attemptVal={1} letterPos={1} />
                        <Letters attemptVal={1} letterPos={2} />
                        <Letters attemptVal={1} letterPos={3} />
                        <Letters attemptVal={1} letterPos={4} />
                    </Row>
                    <Row>
                        <Letters attemptVal={2} letterPos={0} />
                        <Letters attemptVal={2} letterPos={1} />
                        <Letters attemptVal={2} letterPos={2} />
                        <Letters attemptVal={2} letterPos={3} />
                        <Letters attemptVal={2} letterPos={4} />
                    </Row>
                    <Row>
                        <Letters attemptVal={3} letterPos={0} />
                        <Letters attemptVal={3} letterPos={1} />
                        <Letters attemptVal={3} letterPos={2} />
                        <Letters attemptVal={3} letterPos={3} />
                        <Letters attemptVal={3} letterPos={4} />
                    </Row>
                    <Row>
                        <Letters attemptVal={4} letterPos={0} />
                        <Letters attemptVal={4} letterPos={1} />
                        <Letters attemptVal={4} letterPos={2} />
                        <Letters attemptVal={4} letterPos={3} />
                        <Letters attemptVal={4} letterPos={4} />
                    </Row>
                    <Row>
                        <Letters attemptVal={5} letterPos={0} />
                        <Letters attemptVal={5} letterPos={1} />
                        <Letters attemptVal={5} letterPos={2} />
                        <Letters attemptVal={5} letterPos={3} />
                        <Letters attemptVal={5} letterPos={4} />
                    </Row>
                </BoardStyle>
            </BoardContainer>
        </>
    )
}
