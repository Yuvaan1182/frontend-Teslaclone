import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function Header() {

    const [ burgerNavState, setBurgerNavStatus ] = useState(true);


    return (
        <Container>
            <a>
                <img src="/images/images/logo.svg" />
            </a>

            <Menu>
                <a href="#">MODEL S</a>
                <a href="#">MODEL 3</a>
                <a href="#">MODEL X</a>
                <a href="#">MODEL Y</a>
                <a href="#">SOLAR PANELS</a>
            </Menu>

            <RightMenu>
                <a href="#">Shop Now</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=> setBurgerNavStatus(false)}/>
            </RightMenu>

            <BurgerNav state={burgerNavState}>
                <CCWrap>
                    <CustomCloseBtn onClick={()=> setBurgerNavStatus(true)}/>
                </CCWrap>
                <li><a href="#">MODEL S</a></li>
                <li><a href="#">MODEL 3</a></li>
                <li><a href="#">MODEL X</a></li>
                <li><a href="#">MODEL Y</a></li>
                <li><a href="#">SOLAR PANELS</a></li>
                <li><a href="#">EXISTING INVENTORY</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header



const Container = styled.div `
    min-height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div `
    display: flex;
    align-items: center;

    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: nowrap;
    }
`

const CustomMenu = styled(MenuIcon) `
    cursor: pointer;
`

const BurgerNav = styled.div `
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.state ? 'translateX(100%)' : 'tanslateX(100%)' };
    transition: transform 0.5s;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        {
            font-weight: 600;
        }
    }
`

const CCWrap = styled.div `
    display: flex;
    justify-content: flex-end;
`

const CustomCloseBtn = styled(CloseIcon) `
    cursor: pointer;
`