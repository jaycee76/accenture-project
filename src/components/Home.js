import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'


function Home() {
  return (
    <Container>
        <ImageSlider />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: calc(100vh - 60px);
    width: 50%;
`

const TitleComp = styled.div`

`