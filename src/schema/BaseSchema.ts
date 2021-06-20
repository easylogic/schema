import { SchemaType } from "./types";

export interface BaseSchema { 
    key: string;
    type: SchemaType;
    value?: unknown;
    defaultValue?: unknown;
}