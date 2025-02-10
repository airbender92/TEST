let num = 10;
const str = 'hello'
var bool = true;

// 类型转换
let numStr = String(num)
let strnum = Number('20')

// 深拷贝与浅拷贝
let originalObj = { a: 1, b: {c: 2}}

// 浅拷贝
let shallowCopy = { ...originalObj };

// 深拷贝
let deepCopy = JSON.parse(JSON.stringify(originalObj))

// 函数声明
function add(a, b) {
    return a + b;
}

// 函数表达式
const subtract = function (a, b) {
    return a - b;
};

// 箭头函数
const multiply = (a, b) => a * b;

// 函数柯里化
const curriedAdd = a => b => a + b;
const addFive = curriedAdd(5);
console.log(addFive(3));

// 闭包
function outerFunction(){
    let count = 0;
    return function innerFunction(){
        return ++count;
    }
}

const counter = outerFunction();
console.log(counter())

// 面向对象编程
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age}`)
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        // super关键字，子类构造函数必须先调用super()才能使用this
        super(name, age)
        this.grade = grade;
    }

    study(){
        console.log(`${this.name} is studying in grade ${this.grade}`)
    }
}

const student = new Student('Jane', 20, 20)
student.sayHello();
student.study();

// 异步编程
function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully')
        }, 2000)
    })
}

async function getData(params) {
    try{
        const data = await fetchData();
    }catch(error) {
        console.log(error)
    }
    
}

getData();

// ES6+新特性
// 解构赋值
const [first, second] = [1, 2]
const {name, age} = {name: 'John', age: 30}

// 扩展运算符
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combinedArr = [...arr1, ...arr2];

// Symbol
const uniqueKey = Symbol('key')
const obj = {
    [uniqueKey]: 'value'
}

// Set
const set = new Set([1, 2, 3, 2])
console.log(set.size)

// Map
const map = new Map();
map.set('key', 'value')
console.log(map.get('key'))

// proxy
const target = {name: 'John'}
const handler = {
    get(target, property) {
        console.log(`Getting property ${property}`)
        return target[property]
    }
}

const proxy = new Proxy(target, handler)
console.log(proxy.name);

// Reflect
const obj2 = {name: 'Jane'}
console.log(Reflect.get(obj2, 'name'))

// 自定义错误类型
class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name = 'CustomError'
    }
}

try{
    throw new CustomError('this is a custom error')
} catch(error) {
    console.log(error.name, error.message)
}

// 表单验证
const form = document.getElementById('myForm')
form.addEventListener('submit', function(e) {
    const emailInput = document.getElementById('email')
    if(!emailInput.validity.valid) {
        // 自定义错误消息
        emailInput.setCustomValidity('please enter a valid email address')
    } else {
        emailInput.setCustomValidity('')
    }

    if(!form.checkValidity()) {
        e.preventDefault();
    }
});

// 多媒体元素控制
const video = document.getElementById('myVideo')
const playButton = document.createElement('button')
playButton.textContent = 'Play'
playButton.addEventListener('click', function(){
    video.play();
});

document.body.appendChild(playButton)

// iframe通信
const iframe = document.getElementById('myIframe')
// 父页面向子页面发送消息
iframe.contentWindow.postMessage('hello from parent', 'https://www.example.com')

// 父页面接收子页面消息
window.addEventListener('message', (event) => {
    if(event.origin === 'https://www/example.com') {
        console.log('Received message from iframe:', event.data)
    }
});

// 事件委托
const ul = document.querySelector('nav ul')
ul.addEventListener('click', function(e) {
    if(e.target.tagName === 'A') {
        console.log('Clicked on a navigation link:', e.target.textContent)
    }
})