import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'

export interface LaunchProps {
  id: string
  launch_date_local: string
  launch_site: {
    site_name_long
  }
  launch_success: boolean
  links: {
    flickr_images: Array<string>
    article_link: string
    video_link
  }
  mission_name: string
  rocket: {
    rocket_name: string
  }
}

const LaunchCard: React.FC<LaunchProps> = ({
  id,
  launch_date_local,
  launch_site,
  launch_success,
  links,
  mission_name,
  rocket,
}) => {
  return (
    <Container>
      <Image
        src={links.flickr_images[0] || '/no-content.jpg'}
        alt="Launch image"
        layout="intrinsic"
        width="300"
        height="300"
      />
      <DetailsContainer>
        <InfoLine text="Mission Name :" value={mission_name} />
        <InfoLine text="Rocket :" value={rocket.rocket_name} />
        <InfoLine text="Launched from :" value={launch_site.site_name_long} />
        <InfoLine text="Date :" value={launch_date_local} />
        <InfoLine
          text="Outcome :"
          value={launch_success ? 'Success' : 'Failure'}
          success={launch_success}
        />
        <LinkLine
          text=""
          value={'Read the article'}
          link={links.article_link}
        />
        <LinkLine text="" value={'Watch on Youtube'} link={links.video_link} />
      </DetailsContainer>
    </Container>
  )
}

export default LaunchCard

const InfoLine: React.FC<{
  text: string
  value: string
  success?: boolean
}> = ({ text, value, success }) => {
  return (
    <InfoContainer>
      <Label>{text}</Label>
      <Value success={success}>{value}</Value>
    </InfoContainer>
  )
}
const LinkLine = ({ text, value, link }) => {
  return (
    <InfoContainer>
      <Label>{text}</Label>
      <Link href={link || ''} passHref>
        <StyledLink link={link} target="_blank" rel="noreferrer noopener">
          {value}
        </StyledLink>
      </Link>
    </InfoContainer>
  )
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-gap: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
`
const DetailsContainer = styled.div`
  display: grid;
  padding: 8px;
`
const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 0 8px;
`
const Label = styled.label`
  opacity: var(--high-emphasis);
`
const Value = styled.label<{ success: boolean }>`
  color: ${({ success }) => (success ? 'green' : 'var(--primary-red)')};
  opacity: var(--high-emphasis);
`

const StyledLink = styled.a<{ link: string | undefined }>`
  opacity: ${({ link }) => (link ? 'var(--high-emphasis)' : 'var(--disabled)')};
  text-decoration: ${({ link }) => (link ? 'unset' : 'line-through')};
  cursor: ${({ link }) => (link ? 'pointer' : 'default')};
  color: white;
  width: max-content;
`
