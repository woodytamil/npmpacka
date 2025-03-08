import  { z } from 'zod';
import { EventsConfigToDiscriminatedUnion } from './types';
 
export const createMessageProtocol =<T extends Record<string, z.ZodRawShape>, EventsAsDiscoUnion=EventsConfigToDiscriminatedUnion<T>> (opts: {
    events: T
}) =>{
    return {
        createSender:(func: (event:EventsAsDiscoUnion)=> void)=>{
            return func 
        },
        createHandler:(func: (event:EventsAsDiscoUnion)=> void)=>{
            return func 
        }  
    }
}