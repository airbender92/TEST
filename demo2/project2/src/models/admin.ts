
import { User } from './user'

// 接口继承
export interface Admin extends User {
    role: string;
}

// 抽象类
export abstract class BaseRole {
    abstract getRole(): string;
}

// 泛型类
export class GenericRole<T> {
    role: T;

    constructor(role: T) {
        this.role = role;
    }
}