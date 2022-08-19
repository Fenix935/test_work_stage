import {makeAutoObservable} from "mobx";

class Navigation {
    activePath:string = ""

    constructor () {
        makeAutoObservable(this)
    }

    changePath(pathStr: string) {
        this.activePath = pathStr;
    }
}


export  default  new Navigation;