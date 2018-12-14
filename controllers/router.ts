import {Router, Request, Response} from 'express'

export const router =Router();

router.get('/mensajes',(req: Request, res: Response)=>{
    res.json({
        ok: true,
        mesaje: 'Todo esta bien'
    });
});

router.post('/mensapos',(req: Request, res: Response)=>{
    const user = req.body.user;
    const pass = req.body.pass;
    const json_ = req.body;
    
    if (json_.user === undefined)
    {
        res.status(400).json({
            ok: false,
            mensaje: "user vacio"
        })
    }

    res.json({
        ok: true,
        user,
        pass
    });
    
    /*res.json({
        json_
    });*/
});


export default router;