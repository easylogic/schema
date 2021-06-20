import { BaseSchema } from "./BaseSchema";
import { ColorType } from "./types";
export declare type IColorKey = "color";
export interface IColorProperty extends BaseSchema {
    key: IColorKey;
    value?: ColorType;
    defaultValue?: ColorType;
}
