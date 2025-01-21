## 前端开发工程师【初级】
### 一、能力要求
- 熟练运用 HTML 构建语义化、结构化的网页基础架构，能根据设计稿合理组织页面元素布局，确保页面兼容性与可访问性。
- 深入掌握 CSS 及 CSS3 特性，灵活运用各种选择器、样式属性进行页面美化，精通常见布局模式（如 Flexbox、Grid），能够实现复杂的页面样式设计，包括响应式设计以适配不同终端设备。
- 扎实的 JavaScript 基础，理解 ES6 新特性并熟练运用，具备使用原生 JavaScript 解决实际问题的能力，如表单验证、DOM 操作、事件处理、数据处理等，能够编写可维护、高效的代码。
- 了解 TypeScript 基本语法，知晓其与 JavaScript 的区别与联系，初步具备在项目中使用 TypeScript 进行类型约束、增强代码健壮性的能力。
- 掌握 Vue2 和 Vue3 框架核心知识，包括组件化开发、指令使用、数据绑定、生命周期钩子等，能够运用 Vuex 进行状态管理，Vue Router 搭建单页面应用路由，独立完成简单 Vue 项目的开发与调试。
- 熟悉前端网络请求原理，熟练掌握 Ajax 和 Axios 的使用，能正确处理请求与响应数据，实现前后端数据交互，保障交互过程的稳定性与高效性。
- 具备使用 Less 或 Sass 预处理器提升 CSS 开发效率的能力，理解其变量、嵌套、混合等特性，能根据项目需求进行样式文件组织与优化。
- 掌握前端开发工具（如 VS Code）的高效使用方法，熟练运用浏览器开发者工具进行代码调试、性能分析，能够快速定位并解决前端开发中出现的问题。

### 二、考点范围

#### （一）HTML
- HTML 文档结构：DOCTYPE 声明、html 标签、head 和 body 内的关键元素（title、meta、link、script 等）及其作用。
- 标签语义：header、footer、nav、article、section、aside 等语义化标签的应用场景，表单元素（input 类型、textarea、select、button）及属性（如 required、placeholder 等）。
- 多媒体元素：img、video、audio 标签的使用，包括属性设置（src、alt、controls 等）。
- 链接与导航：a 标签的 href、target 属性，锚点链接的设置。

<details>
    <summary>demo</summary>

#### 1. HTML 文档结构
HTML 文档结构的基本组成包括以下几个部分：

- **DOCTYPE 声明**：用于指定文档的类型及版本。常见的 HTML5 声明方式为：
  ```html
  <!DOCTYPE html>
  ```

- **html 标签**：HTML 文档的根元素，包含 `head` 和 `body` 部分。
  ```html
  <html lang="zh">
  </html>
  ```

- **head 标签**：包含文档的元数据，如字符集、文档标题、外部链接、脚本等。
  ```html
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML 文档标题</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
  </head>
  ```

- **body 标签**：包含文档的主体内容，是用户实际看到的内容。
  ```html
  <body>
    <h1>欢迎来到 HTML 文档</h1>
    <p>这里是一些段落。</p>
  </body>
  ```

#### 2. 标签语义
HTML 5 引入了一些语义化标签，用于提高代码的可读性和 SEO（搜索引擎优化）效果。

- **header**：文档或部分文档的页眉，用于放置导航、标题等信息。
  ```html
  <header>
    <h1>网站标题</h1>
    <nav>
      <a href="#">首页</a>
      <a href="#">关于我们</a>
    </nav>
  </header>
  ```

- **footer**：文档或部分文档的页脚，用于放置版权、联系方式等信息。
  ```html
  <footer>
    <p>&copy; 2025 所有权利保留</p>
  </footer>
  ```

- **nav**：用于定义导航链接的区域。
  ```html
  <nav>
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">博客</a></li>
    </ul>
  </nav>
  ```

- **article**：表示一个独立的内容块，可包含标题、段落等，通常用于博客文章或新闻项。
  ```html
  <article>
    <h2>文章标题</h2>
    <p>文章内容...</p>
  </article>
  ```

- **section**：表示文档中的一个部分，通常用于页面的功能模块。
  ```html
  <section>
    <h2>介绍</h2>
    <p>一些介绍内容...</p>
  </section>
  ```

- **aside**：表示与主内容相关但不直接影响页面内容的部分，通常用于侧边栏、广告等。
  ```html
  <aside>
    <h3>广告</h3>
    <p>这里是广告内容...</p>
  </aside>
  ```

#### 3. 表单元素

表单用于收集用户输入的信息。常用的表单元素包括：

- **input**：用于单行文本输入，如密码框、文本框、单选框等。
  ```html
  <input type="text" placeholder="请输入用户名" required>
  <input type="password" placeholder="请输入密码" required>
  ```

- **textarea**：用于多行文本输入。
  ```html
  <textarea placeholder="请输入评论" rows="4" cols="50"></textarea>
  ```

- **select 和 option**：用于创建下拉菜单。
  ```html
  <select required>
    <option value="option1">选项 1</option>
    <option value="option2">选项 2</option>
  </select>
  ```

- **button**：用于提交表单或触发某个操作的按钮。
  ```html
  <button type="submit">提交</button>
  ```

#### 4. 多媒体元素

HTML5 支持多媒体元素，如图片、视频、音频等。

- **img**：用于显示图像。
  ```html
  <img src="image.jpg" alt="描述文字" width="300" height="200">
  ```

- **video**：用于嵌入视频内容，支持多种属性，如控制播放、自动播放等。
  ```html
  <video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <p>您的浏览器不支持视频标签。</p>
  </video>
  ```

- **audio**：用于嵌入音频内容，支持控制音量、播放等。
  ```html
  <audio controls>
    <source src="audio.mp3" type="audio/mp3">
    <p>您的浏览器不支持音频标签。</p>
  </audio>
  ```

#### 5. 链接与导航

- **a 标签**：用于定义链接，具有 `href` 属性指定目标 URL，`target` 属性指定打开方式（如 `_blank` 新窗口）。
  ```html
  <a href="https://www.example.com" target="_blank">访问示例网站</a>
  ```

- **锚点链接**：通过 `#` 号定位到页面内的特定位置。
  ```html
  <a href="#section1">跳转到第一部分</a>

  <div id="section1">
    <h2>第一部分</h2>
    <p>这里是第一部分内容。</p>
  </div>
  ```

### Demo 示例

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML基础示例</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header>
    <h1>欢迎来到 HTML 示例页面</h1>
    <nav>
      <a href="#">首页</a>
      <a href="#">关于我们</a>
      <a href="#section1">第一部分</a>
    </nav>
  </header>

  <section id="section1">
    <h2>第一部分</h2>
    <p>这里是页面的第一部分内容。</p>
  </section>

  <article>
    <h2>文章标题</h2>
    <p>这里是文章内容...</p>
  </article>

  <aside>
    <h3>广告</h3>
    <p>这里是广告内容...</p>
  </aside>

  <footer>
    <p>&copy; 2025 所有权利保留</p>
  </footer>

  <video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <p>您的浏览器不支持视频标签。</p>
  </video>

</body>
</html>
```

这个示例展示了如何在 HTML 中使用常见的结构元素、表单元素、多媒体元素和链接。
</details>

#### （二）CSS & CSS3
- 基础语法：选择器（标签、类、ID、属性、伪类、伪元素等）优先级计算，样式继承与覆盖，单位（px、em、rem、vw、vh 等）。
- 布局：浮动布局（float、clear）原理与应用，Flexbox 弹性布局（display:flex、flex-direction、justify-content、align-items 等核心属性），Grid 网格布局（display:grid、grid-template-columns、grid-row-gap 等）。
- 样式属性：字体（font-family、font-size、font-weight、font-style），文本（text-align、text-decoration、line-height、word-spacing），背景（background-color、background-image、background-repeat、background-size、background-position），边框（border-style、border-width、border-color、border-radius），盒模型（content、padding、border、margin，标准与怪异盒模型差异）。
- 动画与过渡：transition 实现元素过渡效果（属性、时长、延迟、曲线），animation 定义动画序列（keyframes、动画名称、持续时间、播放次数、方向等）。

<details>
    <summary>demo</summary>
    好的，下面是你学习的 CSS 基础知识，包含了选择器、布局、样式属性以及动画和过渡的示例。

### 1. **CSS 选择器与优先级**
   - **选择器**:
     - 标签选择器（如 `div`, `p`, `span`）
     - 类选择器（如 `.class-name`）
     - ID 选择器（如 `#id-name`）
     - 属性选择器（如 `[type="text"]`）
     - 伪类选择器（如 `:hover`, `:nth-child()`）
     - 伪元素选择器（如 `::before`, `::after`）
   
   - **优先级计算**：
     CSS 样式的优先级顺序（从高到低）如下：
     1. 内联样式（`style="..."`）
     2. ID 选择器（`#id-name`）
     3. 类选择器（`.class-name`）、属性选择器（`[type="text"]`）、伪类选择器（`:hover`）
     4. 标签选择器（如 `div`）、伪元素选择器（`::before`）

   - **示例**：
     ```css
     #my-id { color: red; }
     .my-class { color: blue; }
     div { color: green; }
     ```

     这里 ID 选择器会覆盖类选择器，类选择器会覆盖标签选择器。

### 2. **CSS 布局**
   - **浮动布局**：用来创建多列布局，但需要清除浮动元素的影响。
     ```css
     .left { float: left; width: 50%; }
     .right { float: right; width: 50%; }
     ```

     使用 `clear: both;` 可以清除浮动，防止后面的元素被浮动影响。

   - **Flexbox 布局**：
     - `display: flex;` 启用 flex 布局。
     - `flex-direction: row;` 设置主轴方向。
     - `justify-content` 控制主轴上的对齐。
     - `align-items` 控制交叉轴上的对齐。

     示例：
     ```css
     .container {
       display: flex;
       justify-content: space-between;
       align-items: center;
     }
     .item { flex: 1; }
     ```

   - **Grid 网格布局**：
     - `display: grid;` 启用网格布局。
     - `grid-template-columns` 定义列。
     - `grid-gap` 设置行和列之间的间距。

     示例：
     ```css
     .container {
       display: grid;
       grid-template-columns: 1fr 1fr 1fr;
       grid-gap: 10px;
     }
     ```

### 3. **CSS 样式属性**
   - **字体**：
     ```css
     .text {
       font-family: 'Arial', sans-serif;
       font-size: 16px;
       font-weight: bold;
       font-style: italic;
     }
     ```

   - **文本**：
     ```css
     .text {
       text-align: center;
       text-decoration: underline;
       line-height: 1.5;
       word-spacing: 4px;
     }
     ```

   - **背景**：
     ```css
     .bg {
       background-color: lightblue;
       background-image: url('image.jpg');
       background-repeat: no-repeat;
       background-size: cover;
       background-position: center;
     }
     ```

   - **边框**：
     ```css
     .box {
       border-style: solid;
       border-width: 2px;
       border-color: #333;
       border-radius: 10px;
     }
     ```

   - **盒模型**：
     - 盒模型包含 `content`、`padding`、`border` 和 `margin`。标准盒模型（`box-sizing: content-box;`）不包括内边距和边框的宽度，而怪异盒模型（`box-sizing: border-box;`）则包括它们。
     ```css
     .box {
       box-sizing: border-box;
       padding: 20px;
       border: 2px solid #333;
       margin: 10px;
     }
     ```

### 4. **CSS 动画与过渡**
   - **过渡**：
     - 用于实现元素状态变化的动画效果。
     ```css
     .box {
       transition: all 0.3s ease;
     }
     .box:hover {
       background-color: yellow;
     }
     ```

   - **动画**：
     - 定义一系列的关键帧。
     ```css
     @keyframes move {
       0% { transform: translateX(0); }
       100% { transform: translateX(200px); }
     }

     .box {
       animation: move 2s infinite alternate;
     }
     ```

### Demo：

```html
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS 示例</title>
  <style>
    /* 选择器与优先级 */
    #main { color: red; }
    .header { color: blue; }
    div { color: green; }
    
    /* 布局 */
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100vh;
    }

    /* 盒模型 */
    .box {
      box-sizing: border-box;
      width: 100px;
      height: 100px;
      padding: 10px;
      border: 2px solid black;
      margin: 20px;
      background-color: lightblue;
    }

    /* 动画 */
    @keyframes move {
      0% { transform: translateX(0); }
      100% { transform: translateX(200px); }
    }

    .box:hover {
      animation: move 2s infinite alternate;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </div>
  <div id="main">这是主内容，文字是红色的。</div>
</body>
</html>
```

这个示例展示了：
- 使用 Flexbox 布局来居中并间隔排列盒子。
- 使用 CSS 动画和过渡来在鼠标悬停时改变盒子的背景色和位置。
- 盒模型的应用，包含了内边距、边框和外边距。
</details>

#### （三）JavaScript & ES6
- 基础语法：变量声明（var、let、const）差异，数据类型（Number、String、Boolean、Object、Array、Function、Symbol、null、undefined），运算符（算术、比较、逻辑、三元等），类型转换。
- 流程控制：if - else、switch 条件语句，for、while、do - while 循环语句，break、continue 关键字。
- 函数：函数定义、调用、参数传递（默认参数、剩余参数），函数表达式与声明，箭头函数特性（this 指向、简洁语法），闭包概念与应用场景。
- 对象：对象字面量创建，对象属性访问与修改，遍历对象（for - in、Object.keys() 等），构造函数与原型链基础。
- ES6 新特性：let 和 const 块级作用域，解构赋值（数组、对象），模板字符串，箭头函数，类（class）与继承，Promise 异步处理基础，模块化（import/export）概念。

<details>
    <summary>demo</summary>

    下面是关于你提到的 JavaScript 和 ES6 基础语法的示例代码：

### 1. **变量声明（var、let、const）**
```javascript
// var 是函数作用域，let 和 const 是块级作用域
var x = 10;  // 可以重新赋值
let y = 20;  // 可以重新赋值
const z = 30; // 不可重新赋值

if (true) {
  var a = 100;
  let b = 200;
  const c = 300;
}

console.log(a); // 100
console.log(b); // 报错: b is not defined
console.log(c); // 报错: c is not defined
```

### 2. **数据类型**
```javascript
let num = 10;            // Number
let str = "Hello";       // String
let bool = true;         // Boolean
let obj = { name: "Alice", age: 25 };  // Object
let arr = [1, 2, 3];     // Array
let func = function() {}; // Function
let sym = Symbol('id');  // Symbol
let nothing = null;      // null
let undef = undefined;   // undefined
```

### 3. **运算符**
```javascript
let a = 5, b = 3;

// 算术运算符
console.log(a + b); // 8
console.log(a - b); // 2

// 比较运算符
console.log(a > b); // true
console.log(a === 5); // true

// 逻辑运算符
console.log(true && false); // false
console.log(true || false); // true

// 三元运算符
let result = a > b ? "a 大于 b" : "a 小于等于 b";
console.log(result); // a 大于 b
```

### 4. **条件语句**
```javascript
// if-else
let age = 20;
if (age >= 18) {
  console.log("成年人");
} else {
  console.log("未成年人");
}

// switch
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("苹果");
    break;
  case "banana":
    console.log("香蕉");
    break;
  default:
    console.log("未知水果");
}
```

### 5. **循环语句**
```javascript
// for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do-while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);
```

### 6. **函数**
```javascript
// 函数声明与调用
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet("Alice");  // Hello, Alice!
greet();         // Hello, Guest!

// 箭头函数
const add = (x, y) => x + y;
console.log(add(2, 3)); // 5

// 闭包
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

### 7. **对象**
```javascript
// 对象字面量创建
let person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

person.greet(); // Hello, Alice

// 遍历对象
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

console.log(Object.keys(person)); // ['name', 'age', 'greet']
```

### 8. **ES6 新特性**

#### let 和 const 块级作用域
```javascript
{
  let x = 10;
  const y = 20;
  var z = 30; // var 是函数作用域
}

console.log(z); // 30
// console.log(x); // 报错
// console.log(y); // 报错
```

#### 解构赋值
```javascript
// 数组解构
let [a, b] = [1, 2];
console.log(a, b); // 1 2

// 对象解构
let person = { name: "Alice", age: 25 };
let { name, age } = person;
console.log(name, age); // Alice 25
```

#### 模板字符串
```javascript
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!
```

#### 类与继承
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

let dog = new Dog("Buddy");
dog.speak(); // Buddy barks
```

#### Promise 异步处理
```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("成功");
  } else {
    reject("失败");
  }
});

promise.then(result => console.log(result)) // 成功
  .catch(error => console.log(error));  // 失败
```

#### 模块化
```javascript
// 1. 导出
// file1.js
export const pi = 3.14;
export function add(x, y) {
  return x + y;
}

// 2. 导入
// file2.js
import { pi, add } from './file1';
console.log(pi); // 3.14
console.log(add(2, 3)); // 5
```

这些示例展示了基础语法、流程控制、函数、对象、ES6 新特性等的使用方法。
</details>

#### （四）TypeScript
- 基础类型：与 JavaScript 基础类型对应关系，新增类型（如 any、unknown、never），接口（interface）定义对象形状，类型别名（type alias）。
- 函数类型：参数类型声明，返回值类型声明，可选参数、剩余参数在类型声明中的体现，函数重载概念。
- 类与接口：类的定义与继承，接口实现（implements），抽象类（abstract class）与抽象方法，访问修饰符（public、private、protected）。

<details>
    <summary>demo</summary>
    下面是关于 TypeScript 的一些基础示例：

### 1. **基础类型**
TypeScript 在 JavaScript 基础类型的基础上，新增了一些类型（如 `any`、`unknown`、`never`），并且支持通过 `interface` 和 `type alias` 来定义复杂类型。

```typescript
// 基础类型
let num: number = 10;              // 数字类型
let str: string = "Hello";         // 字符串类型
let isActive: boolean = true;      // 布尔类型
let anyValue: any = "Can be anything";  // 任意类型
let unknownValue: unknown = "Hello";    // 未知类型
let nothing: null = null;          // null 类型
let undef: undefined = undefined;  // undefined 类型

// 新增类型
let notSure: any = 123;           // any 类型，可以赋值任何类型
let result: unknown = "Something"; // unknown 类型，必须先做类型判断才能使用

// never 类型
function throwError(message: string): never {
  throw new Error(message); // never 类型表示该函数永远不会有正常的返回值
}
```

### 2. **接口（interface）**
`interface` 用来定义对象的形状，可以限制对象的属性类型和方法。

```typescript
// 定义一个接口
interface Person {
  name: string;
  age: number;
  greet(): void;
}

// 实现接口
const person: Person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet();  // Hello, my name is Alice
```

### 3. **类型别名（type alias）**
`type` 别名可以用来给类型指定一个名称，可以是基本类型，也可以是复杂类型。

```typescript
// 类型别名
type ID = string | number;  // ID 可以是字符串或者数字

let userId: ID = 123;
userId = "abc";  // 也可以是字符串
```

### 4. **函数类型**
TypeScript 支持在函数声明中指定参数和返回值的类型，并支持可选参数和剩余参数。

```typescript
// 函数类型声明
function greet(name: string, age: number): void {
  console.log(`Hello, ${name}, you are ${age} years old.`);
}

greet("Alice", 25);

// 可选参数
function greetWithGreeting(name: string, age?: number): void {
  if (age) {
    console.log(`Hello, ${name}, you are ${age} years old.`);
  } else {
    console.log(`Hello, ${name}`);
  }
}

greetWithGreeting("Bob");  // Hello, Bob
greetWithGreeting("Alice", 30);  // Hello, Alice, you are 30 years old

// 剩余参数
function sum(...nums: number[]): number {
  return nums.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4));  // 10
```

### 5. **函数重载**
TypeScript 支持函数重载，即可以为同一函数定义多个不同的签名。

```typescript
// 函数重载
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine("Hello, ", "World!"));  // Hello, World!
console.log(combine(10, 20));  // 30
```

### 6. **类与接口**
TypeScript 中，类可以实现接口，类也可以继承其他类。

```typescript
// 定义一个接口
interface Greetable {
  greet(): void;
}

// 类实现接口
class Person implements Greetable {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person("Alice", 25);
person.greet();  // Hello, my name is Alice
```

### 7. **抽象类与抽象方法**
抽象类不能被实例化，必须被继承。抽象方法在基类中声明，但在子类中实现。

```typescript
// 抽象类和抽象方法
abstract class Animal {
  constructor(public name: string) {}

  // 抽象方法
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound() {
    console.log("Woof!");
  }
}

const dog = new Dog("Buddy");
dog.makeSound();  // Woof!
```

### 8. **访问修饰符**
TypeScript 中支持 `public`、`private` 和 `protected` 访问修饰符，控制成员的访问权限。

```typescript
class Person {
  public name: string;  // public：可以在类外部访问
  private age: number;  // private：只能在类内部访问
  protected gender: string;  // protected：只能在类内部和子类中访问

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person("Alice", 25, "Female");
person.greet();  // Hello, my name is Alice
console.log(person.name);  // Alice
// console.log(person.age);  // Error: Property 'age' is private
```

这些示例涵盖了 TypeScript 中的基础类型、函数类型、类与接口的使用，包括抽象类和访问修饰符。
</details>

#### （五）Vue
- Vue2：实例创建（new Vue()），数据绑定（v - bind、v - model），指令（v - if、v - for、v - show、v - on 等），组件注册（全局与局部），生命周期钩子（created、mounted、updated、destroyed 等），父子组件通信（props、$emit）。
- Vue3：组合式 API（setup 函数、ref、reactive、watchEffect、computed 等），响应式原理基础，与 Vue2 语法对比（如模板语法、生命周期调整），组件传参新特性（provide / inject）。
- Vuex：状态管理核心概念（store、state、mutations、actions、getters），模块划分，在 Vue 组件中如何使用 Vuex 管理状态（mapState、mapMutations、mapActions、mapGetters）。
- Vue Router：路由模式（hash、history），路由配置（routes、path、component、redirect 等），路由导航（router - link、router - push、router - replace），路由守卫（全局、路由独享、组件内）。

<details>
    <summary>demo</summary>
    下面是关于 Vue 相关概念的简介，并附带一些简单的 Demo 代码示例：

### Vue2 示例：

#### 1. 实例创建
```javascript
// Vue2 创建实例
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
```

#### 2. 数据绑定
```html
<!-- 使用 v-bind 绑定属性 -->
<div v-bind:title="message">
  鼠标悬停此处会显示动态绑定的标题
</div>

<!-- 使用 v-model 实现双向数据绑定 -->
<input v-model="message" placeholder="编辑内容">
```

#### 3. 指令（v-if、v-for、v-show、v-on）
```html
<!-- v-if 示例 -->
<p v-if="showMessage">这段话会根据 showMessage 的值来显示</p>

<!-- v-for 示例 -->
<ul>
  <li v-for="item in items" :key="item.id">{{ item.name }}</li>
</ul>

<!-- v-show 示例 -->
<p v-show="isVisible">如果 isVisible 为 true，这段文字显示</p>

<!-- v-on 示例 -->
<button v-on:click="changeMessage">点击改变消息</button>
```

#### 4. 组件注册
```javascript
// 全局注册组件
Vue.component('my-component', {
  template: '<div>这是一个全局组件</div>'
});
```

#### 5. 生命周期钩子
```javascript
new Vue({
  data: {
    message: 'Hello!'
  },
  created() {
    console.log('组件已创建');
  },
  mounted() {
    console.log('组件已挂载');
  },
  updated() {
    console.log('组件已更新');
  },
  destroyed() {
    console.log('组件已销毁');
  }
});
```

#### 6. 父子组件通信
```javascript
// 父组件
<template>
  <child-component :parentMessage="message" @childEvent="handleChildEvent"></child-component>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Hello from Parent!'
      };
    },
    methods: {
      handleChildEvent(data) {
        console.log('收到子组件的事件:', data);
      }
    }
  }
</script>

// 子组件
<template>
  <div>
    <p>{{ parentMessage }}</p>
    <button @click="sendToParent">发送事件给父组件</button>
  </div>
</template>

<script>
  export default {
    props: ['parentMessage'],
    methods: {
      sendToParent() {
        this.$emit('childEvent', 'Hello from Child!');
      }
    }
  }
</script>
```

---

### Vue3 示例：

#### 1. 组合式 API
```javascript
// Vue3 setup 函数示例
import { ref, computed } from 'vue';

export default {
  setup() {
    const message = ref('Hello Vue 3!');
    const reversedMessage = computed(() => message.value.split('').reverse().join(''));

    return { message, reversedMessage };
  }
}
```

#### 2. 响应式原理
```javascript
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      count: 0
    });

    const increment = () => {
      state.count++;
    };

    return { state, increment };
  }
}
```

#### 3. 组件传参（provide / inject）
```javascript
// 父组件
import { provide } from 'vue';

export default {
  setup() {
    const message = '来自父组件的信息';
    provide('message', message);
  }
}

// 子组件
import { inject } from 'vue';

export default {
  setup() {
    const message = inject('message');
    return { message };
  }
}
```

---

### Vuex 示例：

#### 1. Vuex 核心概念
```javascript
// Vuex store 示例
import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    asyncIncrement({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
});
```

#### 2. 在组件中使用 Vuex
```javascript
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double Count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
    <button @click="asyncIncrement">Async Increment</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['doubleCount'])
  },
  methods: {
    ...mapActions(['increment', 'asyncIncrement'])
  }
}
</script>
```

---

### Vue Router 示例：

#### 1. 路由配置
```javascript
import VueRouter from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/:id', component: User }
];

const router = new VueRouter({
  routes
});
```

#### 2. 路由导航
```html
<!-- 使用 router-link 导航 -->
<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>

<!-- 使用 router-push 进行编程式导航 -->
<button @click="goToAbout">Go to About</button>
```

```javascript
// 在组件中使用编程式导航
export default {
  methods: {
    goToAbout() {
      this.$router.push('/about');
    }
  }
}
```

#### 3. 路由守卫
```javascript
// 全局守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/about') {
    next(false); // 阻止导航
  } else {
    next(); // 允许导航
  }
});

// 路由独享守卫
const routes = [
  {
    path: '/protected',
    component: Protected,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next('/login');
      } else {
        next();
      }
    }
  }
];
```

---

以上是一些 Vue2 和 Vue3 中常见的基础知识和代码示例。对于 Vuex 和 Vue Router 的用法，也包括了最常见的应用场景。在实际开发中，你会根据需求选择使用 Vue2 或 Vue3 的特性。
</details>

#### （六）前端网络请求
- Ajax：XMLHttpRequest 对象的创建与使用步骤（open、send、onreadystatechange），请求方法（GET、POST 等），状态码解读（200、404、500 等）。
- Axios：Axios 基本使用（GET、POST 请求示例，配置参数如 headers、timeout），响应拦截与请求拦截设置，处理异步请求的错误与数据解析。

<details>
    <summary>demo</summary>
    ### （六）前端网络请求

#### 1. **Ajax：XMLHttpRequest 对象的创建与使用步骤**

```javascript
// 创建 XMLHttpRequest 对象
const xhr = new XMLHttpRequest();

// 配置请求（GET 请求）
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

// 设置请求头（可选）
xhr.setRequestHeader('Content-Type', 'application/json');

// 监听请求状态变化
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) { // 请求完成
    if (xhr.status === 200) { // 请求成功
      const response = JSON.parse(xhr.responseText); // 解析响应数据
      console.log(response);
    } else { // 请求失败
      console.error('请求失败，状态码:', xhr.status);
    }
  }
};

// 发送请求
xhr.send();
```

#### **请求方法**
- `GET`：用于请求获取资源。
- `POST`：用于发送数据到服务器。
- `PUT`：用于更新服务器上的资源。
- `DELETE`：用于删除资源。

#### **状态码解读**
- `200 OK`：请求成功。
- `404 Not Found`：请求的资源未找到。
- `500 Internal Server Error`：服务器内部错误。
- `400 Bad Request`：请求格式错误。

---

#### 2. **Axios：Axios 基本使用**

##### **GET 请求示例**

```javascript
// 导入 Axios 库
import axios from 'axios';

// 发起 GET 请求
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('响应数据:', response.data);
  })
  .catch(error => {
    console.error('请求失败:', error);
  });
```

##### **POST 请求示例**

```javascript
// 发起 POST 请求
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1
  })
  .then(response => {
    console.log('响应数据:', response.data);
  })
  .catch(error => {
    console.error('请求失败:', error);
  });
```

##### **配置参数（headers、timeout）**

```javascript
axios({
  method: 'post',
  url: 'https://jsonplaceholder.typicode.com/posts',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'  // 示例：需要授权时设置 Authorization 头
  },
  timeout: 5000,  // 请求超时时间设置为 5 秒
  data: {
    title: 'foo',
    body: 'bar',
    userId: 1
  }
})
.then(response => {
  console.log('响应数据:', response.data);
})
.catch(error => {
  console.error('请求失败:', error);
});
```

##### **响应拦截与请求拦截**

- **请求拦截器**：在请求发出之前，进行修改或添加请求配置。
  
```javascript
// 请求拦截器
axios.interceptors.request.use(
  config => {
    console.log('请求发出前:', config);
    // 可以在这里添加自定义的请求头，或者修改请求配置
    config.headers['Authorization'] = 'Bearer token';
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
```

- **响应拦截器**：在响应数据被 `then` 或 `catch` 处理前进行处理。

```javascript
// 响应拦截器
axios.interceptors.response.use(
  response => {
    console.log('响应数据:', response);
    // 可以在这里统一处理响应数据
    return response;
  },
  error => {
    // 处理错误，例如：统一处理错误码
    console.error('响应错误:', error);
    return Promise.reject(error);
  }
);
```

##### **处理异步请求的错误与数据解析**

```javascript
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // 成功响应时处理数据
    const posts = response.data;  // 解析响应数据
    console.log(posts);
  })
  .catch(error => {
    // 失败响应时处理错误
    if (error.response) {
      // 请求已发出，服务器响应了状态码，但状态码超出了 2xx 的范围
      console.error('响应错误:', error.response.status, error.response.data);
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      console.error('没有响应:', error.request);
    } else {
      // 其他错误
      console.error('请求错误:', error.message);
    }
  });
```

---

### 总结：
- **Ajax** 使用 `XMLHttpRequest` 对象发送网络请求，通过监听请求的状态来获取响应数据，可以设置不同的请求方法（如 GET、POST）和处理不同的 HTTP 状态码。
- **Axios** 是一个基于 Promise 的 HTTP 请求库，使用简便且支持请求和响应拦截、超时设置、错误处理等高级特性，广泛应用于前端网络请求。

这两者各有特点，`Axios` 在处理请求时提供了更多封装和简便性，推荐在现代开发中使用。
</details>

#### （七）CSS 预处理器（Less & Sass）
- 基础语法：变量定义（$ 或 @ 开头）与使用，嵌套规则（后代、兄弟嵌套），混合（mixin）创建与引用，继承（extend）特性，函数（如颜色处理函数）运用。
- 工程化应用：在项目中引入预处理器，文件组织（如变量文件、混合文件分离），与 CSS 后处理工具（如 PostCSS）结合优化样式输出。

<details>
    <summary>demo</summary>
    ### （七）CSS 预处理器（Less & Sass）

#### 1. **基础语法**

##### **Less**

- **变量定义与使用**：使用 `@` 符号来定义和使用变量。

```less
@primary-color: #4CAF50;

.button {
  background-color: @primary-color;
  color: white;
}
```

- **嵌套规则**：Less 允许嵌套规则，以表示元素的层级关系。

```less
// 父级元素嵌套子级元素
.container {
  width: 100%;
  padding: 20px;

  .header {
    font-size: 24px;
    color: @primary-color;
  }

  .content {
    padding: 10px;
  }
}
```

- **混合（Mixin）**：Mixin 用于复用样式。

```less
// 定义 Mixin
.border-radius(@radius: 5px) {
  border-radius: @radius;
}

// 使用 Mixin
.box {
  width: 200px;
  height: 200px;
  .border-radius(10px); // 调用时可以传入参数
}
```

- **继承（Extend）**：`extend` 允许一个选择器继承另一个选择器的样式。

```less
// 定义基础样式
.button {
  padding: 10px;
  background-color: @primary-color;
  color: white;
}

// 扩展按钮样式
.primary-button {
  .button;
  font-weight: bold;
}
```

- **函数运用**：Less 提供了一些内置函数来处理颜色、运算等。

```less
@base-color: #4CAF50;

// 使用内置函数调整颜色亮度
.new-color {
  background-color: lighten(@base-color, 20%);
}
```

##### **Sass**

- **变量定义与使用**：Sass 使用 `$` 符号来定义和使用变量。

```scss
$primary-color: #4CAF50;

.button {
  background-color: $primary-color;
  color: white;
}
```

- **嵌套规则**：Sass 同样支持嵌套规则。

```scss
// 父级元素嵌套子级元素
.container {
  width: 100%;
  padding: 20px;

  .header {
    font-size: 24px;
    color: $primary-color;
  }

  .content {
    padding: 10px;
  }
}
```

- **混合（Mixin）**：Mixin 在 Sass 中以 `@mixin` 和 `@include` 语法定义和调用。

```scss
// 定义 Mixin
@mixin border-radius($radius: 5px) {
  border-radius: $radius;
}

// 使用 Mixin
.box {
  width: 200px;
  height: 200px;
  @include border-radius(10px); // 调用时传入参数
}
```

- **继承（Extend）**：Sass 也支持继承，通过 `@extend` 语法。

```scss
// 定义基础样式
.button {
  padding: 10px;
  background-color: $primary-color;
  color: white;
}

// 扩展按钮样式
.primary-button {
  @extend .button;
  font-weight: bold;
}
```

- **函数运用**：Sass 提供了内置函数处理颜色、操作等。

```scss
$base-color: #4CAF50;

// 使用内置函数调整颜色亮度
.new-color {
  background-color: lighten($base-color, 20%);
}
```

---

#### 2. **工程化应用**

##### **在项目中引入预处理器**

- **安装 Less 和 Sass**

  - **Less**：使用 `npm` 安装 Less：

    ```bash
    npm install less --save-dev
    ```

  - **Sass**：使用 `npm` 安装 Sass：

    ```bash
    npm install sass --save-dev
    ```

- **在项目中使用 Less/Sass**：例如，在 Webpack 中配置 Less 或 Sass 的加载器：

  - **Webpack 配置（使用 Less）**：
  
    ```javascript
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            'style-loader',
            'css-loader',
            'less-loader'
          ]
        }
      ]
    }
    ```

  - **Webpack 配置（使用 Sass）**：
  
    ```javascript
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }
    ```

##### **文件组织（如变量文件、混合文件分离）**

为保持项目结构清晰，可以将样式文件组织成多个部分：

- **variables.less / _variables.scss**：存放全局变量。
- **mixins.less / _mixins.scss**：存放 Mixin。
- **base.less / _base.scss**：存放基础样式。
- **components.less / _components.scss**：存放组件样式。

例如，在项目中：

```less
// _variables.less
@primary-color: #4CAF50;
@font-size: 16px;

// _mixins.less
.border-radius(@radius) {
  border-radius: @radius;
}

// styles.less
@import 'variables';
@import 'mixins';

.container {
  .border-radius(5px);
  background-color: @primary-color;
  font-size: @font-size;
}
```

##### **与 CSS 后处理工具结合优化样式输出**

后处理工具（如 **PostCSS**）可以与预处理器一起使用，进一步优化输出的 CSS，例如压缩、自动添加前缀等。

- **安装 PostCSS 和插件**：

  ```bash
  npm install postcss postcss-cli autoprefixer cssnano --save-dev
  ```

- **配置 PostCSS** (`postcss.config.js`)：

  ```javascript
  module.exports = {
    plugins: [
      require('autoprefixer'),  // 自动添加浏览器前缀
      require('cssnano')        // 压缩 CSS
    ]
  };
  ```

- **在 Webpack 中配置 PostCSS**：

  ```javascript
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  }
  ```

---

### 总结：

- **Less 与 Sass** 都是流行的 CSS 预处理器，提供了更强大的功能，比如变量、嵌套、混合和继承，帮助我们更高效地编写和维护 CSS。
- **工程化应用**：通过将变量、混合、函数等功能分离成独立的文件，可以保持项目结构的清晰和可维护性。
- 通过结合 **PostCSS** 等后处理工具，可以进一步优化最终的 CSS 输出，确保兼容性、性能和可读性。
</details>

#### （八）前端开发工具与调试
- 代码编辑器：VS Code 插件安装与配置（如 ESLint、Prettier、Vetur 等），代码片段使用，高效快捷键（如代码格式化、快速导航、多光标操作）。
- 浏览器开发者工具：Elements 面板（查看、修改元素样式与结构），Console 面板（打印调试信息、执行 JavaScript 片段），Network 面板（分析请求、查看响应数据、排查加载问题），Sources 面板（调试 JavaScript 代码，设置断点、单步执行）。