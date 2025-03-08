import  { z } from 'zod';

type Prettifier<T> = {
    [K in keyof T]: T[K];
} & {}

export type EventsConfigToDiscriminatedUnion<T extends Record<string, z.ZodRawShape>> = {
    [K in keyof T]: Prettifier<{
        type: K;
    } & z.infer<z.ZodObject<T[K]>>>
}[keyof T]