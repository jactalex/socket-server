import {Router, Request, Response} from 'express';
import usuariosEntt  from '../entt/usuarioEntt';
import { Usuarios } from "../models/usuarioModels";
export const router_usuario =Router();
 
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


router_usuario.get('/ConsultarUser',(req: Request, res: Response)=>{

    const id = '1234';
    Usuarios.consultar_usuarios(id, (err:any, usuarios:usuariosEntt[] )=>
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

export default router_usuario;