import  { z } from 'zod';
import { createMessageProtocol } from "./createMessageProtocol"

const messageBus = createMessageProtocol({
    events:{
        LOG_IN: {
            username: z.string(),
            password: z.string()
        },
        LOG_OUT: {}
    }
})

const send = messageBus.createSender(window.postMessage)

send({type:"LOG_IN", username: "p", password: "bar"})

const handler = messageBus.createSender((e)=>{})