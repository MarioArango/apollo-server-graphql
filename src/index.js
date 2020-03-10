import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
dotenv.config();
import typeDefs from './schema';
import resolvers from './resolvers';
import conexion from './database';

const server = new ApolloServer({typeDefs, resolvers});

const init = async () => {
    try {
        const {url} = await server.listen(process.env.PORT || 5000);
        console.log(`🚀 Server on port ${url}`);
        await conexion();
    } catch (error) {
        console.log(`No se puedo conectar al servidor`);
        console.log(`Error: ${error}`);
    }
}

init();