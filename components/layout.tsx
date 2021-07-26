import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const Layout: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FEYDXWWX5Z"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `<!-- Global site tag (gtag.js) - Google Analytics -->
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-FEYDXWWX5Z');
            `,
          }}
        />
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Title>{title}</Title>
        {children}
        <footer>@omargee {new Date().getFullYear()}</footer>
      </Container>
    </>
  )
}

export default Layout

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
`

const Title = styled.h1`
  text-align: center;
  font-size: var(--font-large);
`
