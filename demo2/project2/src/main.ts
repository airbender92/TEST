import { identity, add } from '@src/utils/mathUtils'
import { getStatus } from './utils/stringUtils'
import { User, UserClass } from './models/user'
import { Admin, BaseRole, GenericRole } from './models/admin'

// 类型断言
const someValue: any = 10;
const numValue: number = someValue as number;

// 联合类型
let value: string | number;
value = 'Hello';
value = 10;

// 交叉类型
let person: { name: string} & { age: number};
person = {
    name: 'John',
    age: 30
}

// 使用接口
const user: User = {
    name: 'jane',
    age: 12
}

// 使用类
const userObj = new UserClass('Bob', 35);

// 使用抽象类和泛型类
class AdminRole extends BaseRole {
    getRole(): string {
        return 'admin'
    }
}

const genericRole = new GenericRole('admin')

console.log(identity('TS'))
console.log(add(5, 3))
console.log(getStatus('active'))
console.log(numValue)
console.log(user)
console.log(userObj)
console.log(new AdminRole().getRole())
console.log(genericRole.role)