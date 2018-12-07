import {Router, Request, Response} from 'express'

export const router =Router();

router.get('/mensajes',(req: Request, res: Response)=>{
    res.json({
        ok: true,
        mesaje: 'Todo esta bien'
    });
});

router.post('/mensajes',(req: Request, res: Response)=>{
    const user = req.body.user;
    const pass = req.body.pass;
    
    res.json({
        ok: true,
        user,
        pass
    });
});


export default router;