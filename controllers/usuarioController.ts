import {Router, Request, Response} from 'express';
import usuariosEntt  from '../entt/usuarioEntt';
import { Usuarios } from "../models/usuarioModels";
import { CADUCIDA_TOKEN, SECRET } from '../global/environment';
export const router_usuario =Router();
import  jwt = require('jsonwebtoken');



 
router_usuario.get('/listarUsuario',(req: Request, res: Response)=>{
    Usuarios.listar((err:any, usuarios:usuariosEntt[] )=>
    {
        if(err)
        {
            return {err};
        }
        else{
            res.json({
                usuarios
            });   
        }
     });
});


router_usuario.post('/login',(req: Request, res: Response)=>{

    const id = req.body.user;
    Usuarios.consultar_usuarios(id, (err:any, login:usuariosEntt[] )=>
    {
        if(err)
        {
            return {err};
        }
        else{
            let token= jwt.sign({
                usuario: id
            },SECRET, {expiresIn: CADUCIDA_TOKEN});

            res.json({
                login,
                token: token
            });   
        }
     });
});

export default router_usuario;