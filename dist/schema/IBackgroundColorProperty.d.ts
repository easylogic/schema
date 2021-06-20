import { BaseSchema } from "./BaseSchema";
import { ColorType } from "./types";
export declare type IBackgroundColorKey = "background-color" | "backgroundColor";
export interface IBackgroundColorProperty extends BaseSchema {
    key: IBackgroundColorKey;
    value?: ColorType;
    defaultValue?: ColorType;
}
