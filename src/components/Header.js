import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <a>
                <img src="/images/CICT.png" alt="" />
            </a>
            <PageName>
                Bulacan State University
            </PageName>

        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    background-color: #763435;
    padding: 8px;

    img{
        height: 75px;
        width: 75px;
    }

`

const PageName = styled.div`
    display: flex;
    color: white;
    font-size: 50px;
    text-transform: uppercase;

`