import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <PageName>
                <a>
                    <img src="/images/CICT.png" alt="" />
                    <span>Bulacan State University</span>
                </a>
            </PageName>

            <NavMenu>
                <a> Login </a>
                <a> Register </a>
            </NavMenu>


        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    height: 60px;
    background-color: #763435;
    padding: 8px;
    align-items: center;
`

const PageName = styled.div`
    a{
        color: white;
        font-size: 35px;
        text-transform: uppercase;
        padding-left: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

        
    img{
        height: 55px;
        width: 55px;
        cursor: pointer;
        padding-right: 15px;
    }

`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    color: white;
    font-size: 20px;
    justify-content: right;
    
     a{
        margin-right: 25px;
        cursor: pointer;
    }
    

`