import { WebSocketServer } from "ws";
import prisma from "@repo/db/client";
const wss = new WebSocketServer({port : 8080});

wss.on('connection',async(socket)=>{
    console.log("connected")
    const res = await prisma.user.create({
        data : {
            username : Math.random().toString(),
            password : Math.random().toString()
        }
    })
    socket.send("connected to server")
    socket.send(JSON.stringify(res))
})