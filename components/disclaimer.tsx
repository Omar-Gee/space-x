import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Disclaimer = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Container ref={ref}>
      <Text>@og_fresh_pots</Text>
    </Container>
  )
})

export default Disclaimer

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Text = styled.p`
  color: white;
`
