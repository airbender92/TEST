
// 泛型函数
export function identity<T>(arg: T): T{
    return arg;
}

// 函数类型接口声明
interface AddFunction{
    (a: number, b: number): number;
}

const add: AddFunction = (a, b) => a + b;

export {
    add
}