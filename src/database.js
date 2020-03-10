import { connect } from 'mongoose';

const conexion = async () => {
    try {
        const conexionDB = await connect(process.env.URI_DB, { useNewUrlParser: true,useUnifiedTopology: true });
        console.log(`Connected database`);    
        return conexionDB;
    } catch (error) {
        console.log(`Connection error: ${error}`);
    }
}

export default conexion;