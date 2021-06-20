import { BaseSchema } from "./BaseSchema";
import { LengthType } from "./types";
export interface IWidthProperty extends BaseSchema {
    key: "width";
    value?: LengthType;
    defaultValue?: LengthType;
}
