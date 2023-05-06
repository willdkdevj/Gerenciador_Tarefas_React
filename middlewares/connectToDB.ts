import type {NextApiRequest, NextApiResponse, NextApiHandler} from 'next';
import mongoose from 'mongoose';
import { DefaultMessageResponse } from '../types/DefaultMessageResponse';

// import { MongoClient } from "mongodb";

export const connectToDB = (handler: NextApiHandler) => 
    async (req: NextApiRequest, res: NextApiResponse<DefaultMessageResponse>) => {
    
    console.log('Mongo está conectado:', mongoose.connections[0].readyState === 1 ? 'Sim' : 'Não');
    if(mongoose.connections[0].readyState){
        return handler(req, res);
    }

    const {DB_CONNECTION_STRING} = process.env;
    if(!DB_CONNECTION_STRING){
        return res.status(500).json({error : 'Env DB_CONNECTION_STRING não informada'});
    }

    mongoose.connection.on('connected', () => console.log('Conectado ao banco de dados'));
    mongoose.connection.on('error', error => console.log('Erro ao conectar no banco de dados:', error));
    await mongoose.connect(DB_CONNECTION_STRING);

    return handler(req,res);
}

// let singleton: any;
 
// async function connect() {
//     if (singleton) return singleton;
 
    
//     const client = new MongoClient(process.env.MONGO_HOST);
//     await client.connect();
 
//     singleton = client.db(process.env.MONGO_DATABASE);
//     return singleton;
// }