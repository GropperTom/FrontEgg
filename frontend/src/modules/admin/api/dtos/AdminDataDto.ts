import {AdminStatusType} from "../../../../store/admin/types";

export type AdminDataDto = {
    name: string,
    status: keyof typeof AdminStatusType
}
