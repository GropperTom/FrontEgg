export enum AdminStatusType {
    WORKING = 'working',
    ON_VACATION = 'vacation',
    LUNCH_TIME = 'lunch time',
    BUSINESS_TRIP = 'business trip'
}

export type AdminData = {
    name: string;
    status: keyof typeof AdminStatusType;
}

export interface AdminState {
    user: AdminData,
    admins: AdminData[]
}
