
// 接口定义
export interface User {
    name: string;
    age: number;
    email?: string;
}

// 类的类型定义
export class UserClass {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}