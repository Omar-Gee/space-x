import React from 'react'
import { GetStaticProps } from 'next'
import getLatestCommit from '../utils/getLatestCommit'
import getGraphQLClient from '../graphql/getClient'
import pastLaunches from '../graphql/queries/pastLaunches'
import Layout from '../components/layout'
import LaunchList from '../components/cards'

interface HomeProps {
  lastCommit: string
  launches: Array<any>
}
const Home: React.FC<HomeProps> = ({ lastCommit, launches }) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log(lastCommit)
  }

  return (
    <Layout title="Space X Launches">
      <LaunchList launches={launches} />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const client = getGraphQLClient()

  const { data } = await client.query(pastLaunches)

  return {
    props: { lastCommit: await getLatestCommit(), launches: data.launchesPast },
  }
}
