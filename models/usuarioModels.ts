import {Router, Request, Response} from 'express'
import Mysql from '../global/mysql';
import usuariosEntt from "../entt/usuarioEntt";


export class Usuarios{
   
    static listar(callback: Function){
        const query = ` SELECT * FROM usuarios `;

        Mysql.ejecutarQuery(query, (err:any, usuarios:usuariosEntt[] )=>
        {
            if(err){
                console.log(err);
                return  callback(err);
            }
            callback(null, usuarios);
         });
    }


    static consultar_usuarios(id:string, callback: Function){
        const query = ` SELECT * FROM usuarios where identidad = ${id} `;

        Mysql.ejecutarQuery(query, (err:any, usuarios:usuariosEntt[] )=>
        {
            if(err){
                console.log(err);
                return  callback(err);
            }
            callback(null, usuarios);
         });
    }
}

