import {AdminStatusType} from "../../../../store/admin/types";

export type AdminDataDto = {
    email: string,
    name: string,
    status: keyof typeof AdminStatusType
}
