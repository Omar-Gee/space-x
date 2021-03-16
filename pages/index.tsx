import React from 'react'
import { GetStaticProps } from 'next'
import getLatestCommit from '../utils/getLatestCommit'

interface HomeProps {
  lastCommit: string
}
const Home: React.FC<HomeProps> = ({ lastCommit }) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.log(lastCommit)
  }

  return (
    <div className="h-screen flex flex-col h-screen items-center">
      <h1 className="text-4xl text-red-500 text-center mt-8 mb-8 max-w-max">
        Title
      </h1>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { lastCommit: await getLatestCommit() },
  }
}
