import {makeAutoObservable} from "mobx";
import {IClubDataList} from "../types";
import moment from "moment";

class ClubObject {
    clubLists:Array<IClubDataList> = [{
        name: "some",
        membershipList: [],
        foundationDay: "2022-08-14",
        usid: "1",
        intro: "asdasdqwewqezxczxcasda"
    }]

    constructor () {
        makeAutoObservable(this)
    }

    addDataToList(data: IClubDataList) {
        const usid = this.clubLists.length > 0 ? this.clubLists[this.clubLists.length - 1].usid : "1";
        const foundationDay = moment(Date()).format("YYYY-MM-DD");
        this.clubLists.push({...data, usid, foundationDay, membershipList: []});
        console.log(this.clubLists)
    }

    changeList (data: IClubDataList) {
        let clubData = this.clubLists.find(item => item.usid === data.usid);
        if(clubData){
            clubData.name = data.name;
            clubData.intro = data.intro;
        }
    }

    deleteNote (id:string) {
        this.clubLists = this.clubLists.filter(item => item.usid !== id);
    }
}


export default new ClubObject;