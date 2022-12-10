import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
   
    uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
    
    cache: new InMemoryCache(),
     
});

export default client;