export enum AdminStatusType {
    WORKING = 'Working',
    ON_VACATION = 'Vacation',
    LUNCH_TIME = 'Lunch time',
    BUSINESS_TRIP = 'Business trip'
}

export type AdminData = {
    email: string;
    name: string;
    status: keyof typeof AdminStatusType;
}

export interface AdminState {
    user: AdminData,
    admins: AdminData[]
}
