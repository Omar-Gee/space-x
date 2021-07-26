import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import getGraphQLClient from '../graphql/getClient'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={getGraphQLClient()}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
