import express from "express";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers, cors: true });

server.applyMiddleware({ app });

app.listen(PORT, () =>
	console.log(
		`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
	)
);
