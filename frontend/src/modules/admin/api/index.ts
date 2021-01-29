import {AxiosRequestConfig} from "axios";
import backendClient from "../../../api";
import {AdminDataDto} from "./dtos/AdminDataDto";
import {AdminData, AdminStatusType} from "../../../store/admin/types";

const parseAdminDataDTO = (dto: AdminDataDto): AdminData => {
    return {
        name: dto.name,
        status: dto.status as keyof typeof AdminStatusType
    }
}

const fetchAllAdmins = () => //NOTE: tal said to not implement like this
    new Promise<AdminDataDto[]>(async (resolve, reject) => {
        try {
            const url = `admins`;  // NOTE: change this to correct URL
            const res = await backendClient.get<AdminDataDto[]>(url);
            const admins: AdminData[] = res.data.map((adminDataDto) => parseAdminDataDTO(adminDataDto))
            resolve(admins);
        } catch (e) {
            reject();
            // NOTE: display error here if needed
        }
    });

const setStatus = (newStatus: keyof typeof AdminStatusType, name: string) =>
    new Promise<void>(async (resolve, reject) => {
        try {
            const url = `admins/${name}/status`;
            const params = {
                status: newStatus
            }
            await backendClient.put(url, params);
            resolve();
        }
        catch(e) {
            reject()
        }
    })

export default {
    fetchAllAdmins,
    setStatus
};
