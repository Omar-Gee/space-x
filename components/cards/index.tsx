import React from 'react'
import LaunchCard, { LaunchProps } from './launchCard'
import styled from 'styled-components'

const LaunchList: React.FC<{ launches: LaunchProps[] }> = ({ launches }) => {
  return (
    <Container>
      {launches.map((launch) => (
        <LaunchCard key={launch.id} {...launch} />
      ))}
    </Container>
  )
}

export default LaunchList

const Container = styled.div`
  display: grid;
  grid-gap: 24px 0;
  padding: 32px 0;
`
