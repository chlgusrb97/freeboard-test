import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles/globalStyles'
import Layout from '@/src/commons/layout'

export default function MyApp({ Component, pageProps }){
	const client = new ApolloClient({
		uri: "http://backend-practice.codebootcamp.co.kr/graphql",
		cache: new InMemoryCache()
	})

	return (
		<ApolloProvider client={client}>
			<>
				<Global styles={globalStyles} />
			<Layout>
				<Component />
			</Layout>
			</>
		</ApolloProvider>
	)
}