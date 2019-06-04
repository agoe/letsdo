import { Letsdo } from './letsdo';


export interface LetsdoEvent {
    label: EventEnum;
    object: Letsdo;
}

export enum EventEnum {
    CHECK = "check",
    UPDATE ="udate",
    DELETE = "delete",
    CREATE = "create"
}

