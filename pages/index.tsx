import React, { useEffect, useRef, useState } from 'react'
import { GetStaticProps } from 'next'

import getGraphQLClient from '../graphql/getClient'
import pastLaunches, { loadMoreLaunches } from '../graphql/queries/pastLaunches'

import getLatestCommit from '../utils/getLatestCommit'

import Layout from '../components/layout'
import LaunchList from '../components/cards'
import { useLazyQuery } from '@apollo/client'
import Disclaimer from '../components/disclaimer'
import useOnScreen from '../hooks/useOnScreen'

const logLatestCommit = (lastCommit: string): void => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log(lastCommit)
  }
}

interface HomeProps {
  lastCommit: string
  data: Array<any>
}
const Home: React.FC<HomeProps> = ({ lastCommit, data }) => {
  const [launches, setLaunches] = useState(data)
  const [offset, setOffset] = useState(5)
  const [getMore, { loading, data: moreData }] = useLazyQuery(loadMoreLaunches)

  useEffect(() => {
    if (!loading && moreData)
      setLaunches([...launches, ...moreData.launchesPast])
  }, [loading])

  const handleMoreLaunches = async () => {
    await getMore({ variables: { offset } })
    setOffset(offset + 5)
  }

  const ref = useRef()
  const isVisible = useOnScreen(ref)
  useEffect(() => {
    if (isVisible) {
      handleMoreLaunches()
    }
  }, [isVisible])

  logLatestCommit(lastCommit)
  return (
    <Layout title="Space X Launches">
      <LaunchList launches={launches} />
      <Disclaimer ref={ref} />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const client = getGraphQLClient()

  const { data } = await client.query(pastLaunches)

  return {
    props: { lastCommit: await getLatestCommit(), data: data.launchesPast },
  }
}
