import {makeAutoObservable} from "mobx";
import {IClubDataList, IMemberDataList} from "../types";
import moment from "moment";

class MemberObject {
    memberLists:Array<IMemberDataList> = [{
        email: "test@mail.com",
        name: "test",
        nickName: "testing",
        phoneNumber: "99999999",
        birthDay: "2001.01.02",
        addresses: [],
        membershipList: []
    }]

    constructor () {
        makeAutoObservable(this)
    }

    addDataToList(data: IMemberDataList) {
        this.memberLists.push({...data, membershipList: [], addresses: []});
        console.log(this.memberLists)
    }

    changeList (data: IMemberDataList) {
        let memberData = this.memberLists.find(item => item.email === data.previusEmail);
        console.log(memberData)
        console.log(data)
        if(memberData){
            memberData.email = data.email
            memberData.name = data.name
            memberData.phoneNumber = data.phoneNumber
            memberData.nickName = data.nickName
            memberData.birthDay = data.birthDay
        }

        console.log(this.memberLists)
    }

    deleteNote (email:string) {
        this.memberLists = this.memberLists.filter(item => item.email !== email);
        console.log(this.memberLists)
    }
}


export default new MemberObject;