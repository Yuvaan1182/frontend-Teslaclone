import React from 'react'
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {

    console.log(backgroundImg)
    return (
        <Container bgImg = { backgroundImg }>
        <Fade bottom>
            <Text>
                <HeaderText>{ title }</HeaderText>
                <SubHeaderText>{ description }</SubHeaderText>
            </Text>
        </Fade>
            
            <Clickables>
                <Fade bottom>
                    <ButtonContainer>
                        <ButtonLeft>{ leftBtnText }</ButtonLeft>
                        { rightBtnText && <ButtonRight>{ rightBtnText }</ButtonRight> }
                    </ButtonContainer>
                </Fade>
                
                <DownArrow src="/images/images/down-arrow.svg"/>
            </Clickables>
        </Container>
    )
}

export default Section



const Container = styled.div `
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/images/model-x.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${ props => `url("/images/images/${ props.bgImg }")` }
`

const Text = styled.div `
    padding-top: 15vh;
    text-align: center;
`

const HeaderText = styled.h1 `
`

const SubHeaderText = styled.h4 `
`

const ButtonContainer = styled.div `
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const ButtonLeft = styled.div `
    background: rgba(23, 26, 32, 0.8);
    color: white;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    opacity: 0.85;
    font-size: 12px;
    cursor: pointer;
    height: 40px; 
    width: 256px;
    margin: 8px;
    font-weight: bold;
`

// writing styled(ButtonLeft) will inherit
// all the properties of button left to button right

const ButtonRight = styled(ButtonLeft) `
    color: black;
    background: white;
    opacity: 0.65;
`

const DownArrow = styled.img `
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Clickables = styled.div ``