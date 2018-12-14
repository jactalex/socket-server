import Server from './entt/server';
import router from './controllers/router';
import router_usuario from './controllers/usuarioController';

import bodyParse from 'body-parser';
import cors from 'cors';
import Mysql from './global/mysql';
const server = new Server();

//configuracion del body-parse 
//-- Para transformar la data que se manda desde una peticion 
server.app.use(bodyParse.urlencoded({extended:true}));
server.app.use(bodyParse.json());

//Cors
server.app.use(cors({origin: true, credentials:true}));

//rutas
server.app.use('/', router, router_usuario )


server.start ( ()=>{
    console.log(`la aplicacion esta corriendo en ${server.port}`) 
});
