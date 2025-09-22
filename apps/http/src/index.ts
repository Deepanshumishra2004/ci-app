import prisma from "@repo/db/client";

import Express from "express";

const app = Express();
app.use(Express.json())

app.get('/',(req,res)=>{
    res.json({
        message : "welcome jojo"
    })
})

app.post('/signup',async(req,res)=>{
    const usename = req.body.username;
    const password = req.body.password;
    const response = await prisma.user.create({
        data : {
            username:usename,
            password:password
        }
    })

    return res.json({
        data : {
            response,
            message : "signup successful"
        }
    })
})

app.listen(3002)