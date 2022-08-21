export interface IRotesList {
    name?: string;
    elem?: any;
    path: string;
}

export interface ISubHeaderList {
    [key: string]: Array<string>;
}

export interface IClubDataList {
    usid?: string;
    name: string;
    intro: string;
    foundationDay?: string;
    membershipList?: Array<string>
}

export interface IMemberDataList {
    email: string;
    name: string;
    nickName: string;
    phoneNumber: string;
    birthDay: string;
    addresses?: Array<string>;
    membershipList?: Array<string>;
    search?: string;
    previusEmail?: string;
}