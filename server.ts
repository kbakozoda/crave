import "reflect-metadata";
import express, { Express } from 'express';
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from 'type-graphql';
import { StageResolver } from './src/resolvers/stage';
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const main = async () => {
    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [StageResolver],
            validate: false
        }),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    const PORT = 4001;
    app.listen(PORT, () => { console.log("Server is listening to PORT ", PORT); });
}

main();