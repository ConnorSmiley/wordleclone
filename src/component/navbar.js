import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Nav = styled.div`
  ${tw`
    text-white
    uppercase
    items-center
    justify-center
    flex
    text-5xl
    font-bold
    pt-2
    w-screen
    h-auto
    border-b-4 
    border-white
    
    `}
`


export default function Navbar() {

    return (
        <>
            <Nav>Wordle</Nav>
        </>
    )
}
