import {makeAutoObservable} from 'mobx';

class Global {
    constructor() {
        // makeAutoObservable: 自动将所有属性和方法转换为可观察对象。
        makeAutoObservable(this);
    }

    count = 55;
    name = 'react';
    addCount = () => {
        this.count++;
    };
}

const globalStore = new Global();
export {globalStore};