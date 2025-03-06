import  { z } from 'zod';

const createMessageBus =<T extends Record<string, z.ZodRawShape>, TExample=Pretifier<Example<T>>> (opts: {
    events: T
}) =>{}

type Pretifier<T> = {
    [K in keyof T]: T[K];
} & {}

type Example<T extends Record<string, z.ZodRawShape>> = {
    [K in keyof T]: {
        type: K;
    } & z.infer<z.ZodObject<T[K]>>
}[keyof T]

const chromeExtension = createMessageBus({
    events:{
        LOG_IN: {
            username: z.string(),
            password: z.string()
        },
        LOG_OUT: {}
    }
})