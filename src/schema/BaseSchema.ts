export interface IColor {
    r: number;
    g: number;
    b: number;
    a?: number;
}

export type ColorType = IColor | string;

export type SchemaType = ColorType | number | string | boolean | object;


export interface BaseSchema {
    key: string;
    type: SchemaType;
    value?: unknown;
    defaultValue?: unknown;
}