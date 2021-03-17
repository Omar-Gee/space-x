import { ApolloClient, InMemoryCache } from '@apollo/client'

const spaceXUri = `https://api.spacex.land/graphql/`

export default function getGraphQLClient(): ApolloClient<any> {
  return new ApolloClient({
    uri: spaceXUri,
    cache: new InMemoryCache(),
  })
}
