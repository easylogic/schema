import { BaseSchema, ColorType } from "./BaseSchema";

export type IBackgroundColorKey = "background-color" | "backgroundColor"

export interface IBackgroundColor extends BaseSchema {
    key: IBackgroundColorKey;
    value?: ColorType;
    defaultValue?: ColorType;
}