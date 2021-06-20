export interface IColor {
    r: number;
    g: number;
    b: number;
    a?: number;
}

export type ColorType = IColor | string;

export interface Unit {
    unit: string;
    value: string;
}

export interface PxLengthType {
    unit: "px",
    value: number;
}

export interface DegreeLengthType {
    unit: "deg";
    value: number;
}

export type LengthType = PxLengthType | number | DegreeLengthType;

export type SchemaType = ColorType | number | string | boolean | object;