import {makeAutoObservable} from "mobx";

class SubHeaderActive {
    activeIndex:number = 0;

    constructor () {
        makeAutoObservable(this)
    }

    changeActive(index: number) {
        this.activeIndex = index;
    }
}


export default new SubHeaderActive;