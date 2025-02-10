## 能够熟练运用 HTML、CSS 及 JavaScript 构建复杂且交互性强的网页，对页面布局、样式适配及动态效果实现有深入理解与实践经验。

<details>
    <summary>demon</summary>

    为了帮助你系统性地掌握考试涉及的HTML、CSS和JavaScript核心知识点，以下整理了一份结构化复习指南，包含关键概念、实践技巧及示例：

---

### **一、HTML**
#### **1. 语义化标签**
- **用途**：提升可访问性、SEO优化。
  - `header`：页眉，包含导航/标题。
  - `nav`：主导航链接。
  - `article`：独立内容块（如博客文章）。
  - `section`：内容分组，需搭配标题。
  - `footer`：页脚，版权信息等。
- **实践**：避免滥用，如非独立内容用`div`而非`article`。

#### **2. 表单与验证**
- **元素**：`<input type="email">`、`<textarea>`、`<select>`。
- **属性**：
  - `required`：必填字段。
  - `pattern`：正则验证（如`[A-Za-z]{3}`）。
  - `novalidate`：禁用浏览器验证。
- **自定义验证**：通过JavaScript监听`invalid`事件，使用`setCustomValidity()`设置错误提示。

#### **3. 多媒体控制**
- **嵌入**：`<video controls><source src="..." type="video/mp4"></video>`。
- **JS操作**：
  ```javascript
  const vid = document.getElementById("myVideo");
  vid.play(); // 播放
  vid.pause(); // 暂停
  ```

#### **4. iframe与通信**
- **安全性**：使用`sandbox`属性限制权限（如`allow-scripts`）。
- **跨域通信**：
  ```javascript
  // 父页面发送消息
  iframe.contentWindow.postMessage('数据', 'https://子页面源');
  
  // 子页面接收
  window.addEventListener('message', (e) => {
    if (e.origin !== '父页面源') return;
    console.log(e.data);
  });
  ```

---

### **二、CSS**
#### **1. 选择器与优先级**
- **权重计算**：内联样式（1000）> ID（100）> 类/伪类（10）> 元素（1）。
  - 示例：`#nav .item:hover` → 100 + 10 + 10 = 120。
- **属性选择器**：`input[type="text"]`选择文本输入框。

#### **2. 盒模型与布局**
- **盒模型**：
  - 标准盒模型（`box-sizing: content-box`）：宽高不含padding和border。
  - 怪异盒模型（`box-sizing: border-box`）：宽高包含padding和border。
- **BFC触发条件**：`overflow: hidden`、`display: inline-block`等。
  - 解决边距重叠：父元素触发BFC。

#### **3. 浮动与清除**
- **清除浮动**：使用`.clearfix::after { content: ''; display: block; clear: both; }`。

#### **4. 布局方案**
- **Flexbox**：
  ```css
  .container {
    display: flex;
    justify-content: center; /* 主轴对齐 */
    align-items: center;     /* 交叉轴对齐 */
    flex-wrap: wrap;         /* 换行 */
  }
  ```
- **Grid**：
  ```css
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 三列等宽 */
    gap: 20px;                             /* 间距 */
  }
  ```

#### **5. 动画与过渡**
- **关键帧动画**：
  ```css
  @keyframes slide {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }
  .element { animation: slide 1s ease-in-out; }
  ```
- **过渡效果**：`transition: width 0.3s ease;`。

---

### **三、JavaScript（ES6+）**
#### **1. 变量与作用域**
- **声明差异**：
  - `var`：函数作用域，可重复声明。
  - `let/const`：块级作用域，`const`不可重新赋值。
- **深拷贝**：
  ```javascript
  const deepCopy = JSON.parse(JSON.stringify(obj)); // 简单方法（不处理函数）
  // 递归实现或使用第三方库（如lodash.cloneDeep）。
  ```

#### **2. 函数与闭包**
- **箭头函数**：无自身`this`，继承外层上下文。
  ```javascript
  const add = (a, b) => a + b;
  ```
- **闭包应用**：
  ```javascript
  function counter() {
    let count = 0;
    return () => count++;
  }
  const c = counter();
  c(); // 1
  ```

#### **3. 异步编程**
- **Promise链**：
  ```javascript
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
  ```
- **async/await**：
  ```javascript
  async function loadData() {
    try {
      const res = await fetch(url);
      const data = await res.json();
    } catch (err) {
      console.error(err);
    }
  }
  ```

#### **4. 面向对象**
- **类与继承**：
  ```javascript
  class Animal {
    constructor(name) { this.name = name; }
    speak() { console.log(`${this.name} makes a noise.`); }
  }
  class Dog extends Animal {
    speak() { super.speak(); console.log("Woof!"); }
  }
  ```

#### **5. ES6+特性**
- **解构与扩展**：
  ```javascript
  const [a, b] = [1, 2]; // 数组解构
  const { x, y } = obj;  // 对象解构
  const merged = { ...obj1, ...obj2 }; // 合并对象
  ```
- **Map/Set**：
  ```javascript
  const map = new Map();
  map.set('key', 'value');
  const set = new Set([1, 2, 3]);
  ```

---

### **四、实战练习**
1. **布局练习**：使用Flex或Grid实现响应式卡片布局，适配不同屏幕尺寸。
2. **表单验证**：结合HTML5验证与JavaScript自定义逻辑（如密码强度）。
3. **动态交互**：实现一个图片轮播组件，支持自动播放与手势切换（触摸/点击）。

通过理论结合实践，逐步攻克每个考点，确保对核心技术的深入理解和灵活运用。
</details>

## 精通 ES6 及以上语法特性，合理运用在项目开发中提升代码质量与效率，熟悉 TypeScript 语法，能进行基础的类型定义与代码编写，确保代码的健壮性。

<details>
    <summary>demon</summary>

    ### 知识点列表
1. **基础类型、联合类型、交叉类型、字面量类型的定义与使用，类型断言操作**
    - **基础类型**：如 `number`、`string`、`boolean`、`null`、`undefined` 等，是 TypeScript 中最基本的数据类型。
    - **联合类型**：表示一个值可以是几种类型之一，用 `|` 分隔。例如 `let value: string | number;`，`value` 可以是字符串或数字。
    - **交叉类型**：将多个类型合并为一个类型，使用 `&` 操作符。比如 `let person: {name: string} & {age: number};`，`person` 必须同时具备 `name` 属性（字符串类型）和 `age` 属性（数字类型）。
    - **字面量类型**：使用具体的字面量值来定义类型，如 `let status: 'active' | 'inactive';`，`status` 只能是 `'active'` 或 `'inactive'`。
    - **类型断言**：用于手动指定一个值的类型，有两种形式：`(<Type>value)` 或 `(value as Type)`。例如 `let someValue: any = "this is a string"; let strLength: number = (<string>someValue).length;`
2. **接口（interface）定义，可选属性、只读属性，接口继承，函数类型接口声明**
    - **接口定义**：用于定义对象的形状，即对象应该具有哪些属性以及这些属性的类型。例如 `interface User { name: string; age: number; }`
    - **可选属性**：在属性名后加 `?` 表示该属性是可选的。如 `interface User { name: string; age?: number; }`
    - **只读属性**：在属性名前加 `readonly`，表示该属性一旦被赋值，就不能再被修改。例如 `interface Point { readonly x: number; readonly y: number; }`
    - **接口继承**：一个接口可以继承另一个接口，使用 `extends` 关键字。如 `interface Admin extends User { role: string; }`
    - **函数类型接口声明**：定义函数的参数和返回值类型。例如 `interface AddFunction { (a: number, b: number): number; }`
3. **类的类型定义，成员变量、方法的类型标注，抽象类与抽象方法，泛型类与泛型函数**
    - **类的类型定义**：为类的成员变量和方法添加类型标注。例如 `class Animal { name: string; constructor(name: string) { this.name = name; } }`
    - **成员变量类型标注**：在类的属性声明时指定其类型。如上述 `Animal` 类中的 `name` 属性。
    - **方法类型标注**：在方法的参数和返回值处指定类型。例如 `class Calculator { add(a: number, b: number): number { return a + b; } }`
    - **抽象类与抽象方法**：抽象类是不能被实例化的类，抽象方法是没有具体实现的方法，必须在子类中实现。例如 `abstract class Shape { abstract getArea(): number; }`
    - **泛型类与泛型函数**：泛型允许我们在定义函数、类或接口时使用类型参数，使代码更具通用性。例如泛型函数 `function identity<T>(arg: T): T { return arg; }`，泛型类 `class GenericNumber<T> { zeroValue: T; add: (x: T, y: T) => T; }`
4. **模块系统（import/export）在 TypeScript 中的运用，与 JavaScript 模块的兼容处理**
    - **导出（export）**：可以使用 `export` 关键字导出变量、函数、类、接口等。例如 `export const myFunction = () => { console.log('Hello'); };`
    - **导入（import）**：使用 `import` 关键字导入其他模块导出的内容。如 `import { myFunction } from './myModule';`
    - **与 JavaScript 模块的兼容处理**：TypeScript 支持 ES6 模块语法，与 JavaScript 的模块系统兼容。可以通过设置 `tsconfig.json` 中的 `module` 选项来指定模块系统，如 `commonjs`、`es6` 等。
5. **tsconfig.json 配置项解读，类型检查级别调整，路径别名设置等常见配置**
    - **tsconfig.json 配置项解读**：`tsconfig.json` 用于配置 TypeScript 编译选项。例如 `compilerOptions` 中的 `target` 用于指定 ECMAScript 目标版本，`module` 用于指定模块系统等。
    - **类型检查级别调整**：可以通过 `strict` 选项开启严格类型检查，包括 `strictNullChecks`、`strictFunctionTypes` 等子选项，更严格地检查类型错误。
    - **路径别名设置**：通过 `compilerOptions` 中的 `paths` 选项设置路径别名。例如 `"paths": { "@src/*": ["src/*"] }`，之后在代码中就可以使用 `@src` 来代替 `src` 路径。

### 项目 demo
以下是一个简单的 TypeScript 项目示例，展示了上述知识点的综合运用：

#### 1. 项目结构
```
project/
├── src/
│   ├── utils/
│   │   ├── mathUtils.ts
│   │   └── stringUtils.ts
│   ├── models/
│   │   ├── user.ts
│   │   └── admin.ts
│   ├── main.ts
├── tsconfig.json
```

#### 2. `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@src/*": ["src/*"]
    }
  },
  "include": ["src/**/*"]
}
```

#### 3. `src/utils/mathUtils.ts`
```typescript
// 泛型函数
export function identity<T>(arg: T): T {
    return arg;
}

// 函数类型接口声明
interface AddFunction {
    (a: number, b: number): number;
}

const add: AddFunction = (a, b) => a + b;

export { add };
```

#### 4. `src/utils/stringUtils.ts`
```typescript
// 基础类型和字面量类型
export function getStatus(status: 'active' | 'inactive'): string {
    return `The status is ${status}`;
}
```

#### 5. `src/models/user.ts`
```typescript
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
```

#### 6. `src/models/admin.ts`
```typescript
import { User } from './user';

// 接口继承
export interface Admin extends User {
    role: string;
}

// 抽象类
abstract class BaseRole {
    abstract getRole(): string;
}

// 泛型类
export class GenericRole<T> {
    role: T;

    constructor(role: T) {
        this.role = role;
    }
}
```

#### 7. `src/main.ts`
```typescript
import { identity, add } from '@src/utils/mathUtils';
import { getStatus } from '@src/utils/stringUtils';
import { User, UserClass } from '@src/models/user';
import { Admin, BaseRole, GenericRole } from '@src/models/admin';

// 类型断言
const someValue: any = 10;
const numValue: number = someValue as number;

// 联合类型
let value: string | number;
value = 'Hello';
value = 10;

// 交叉类型
let person: { name: string } & { age: number };
person = { name: 'John', age: 30 };

// 使用接口
const user: User = { name: 'Jane', age: 25 };

// 使用类
const userObj = new UserClass('Bob', 35);

// 使用抽象类和泛型类
class AdminRole extends BaseRole {
    getRole(): string {
        return 'admin';
    }
}

const genericRole = new GenericRole('admin');

console.log(identity('TypeScript'));
console.log(add(5, 3));
console.log(getStatus('active'));
console.log(numValue);
console.log(user);
console.log(userObj);
console.log(new AdminRole().getRole());
console.log(genericRole.role);
```

此项目展示了如何在实际开发中运用 TypeScript 的各种语法特性，从基础类型到复杂的泛型和模块系统，以及通过 `tsconfig.json` 进行项目配置。
</details>

## 熟练掌握 Vue2 和 Vue3 框架，包括组件化开发、路由管理（Vue Router）、状态管理（Vuex），能独立搭建 Vue 项目，解决开发过程中的常见问题。

<details>
    <summary>demon</summary>
</details>

## 熟悉 CSS 预处理器（Less、Sass），能运用其特性进行高效的样式编写与维护，理解 CSS3 新特性并灵活运用在动画、渐变、弹性布局等场景。

<details>
    <summary>demon</summary>
</details>

## 掌握 Ajax 和 Axios 进行数据交互，熟悉前后端数据传输流程，能够处理请求与响应中的各种情况，如错误处理、异步加载等。

<details>
    <summary>demon</summary>

    ### 知识点总结

#### 1. Ajax 相关知识点
- **原理**：Ajax（Asynchronous JavaScript and XML）的核心是 `XMLHttpRequest` 对象，它允许浏览器在不刷新整个页面的情况下与服务器进行异步通信。
- **请求方法**：常见的 HTTP 请求方法有 `GET`（用于获取资源）、`POST`（用于提交数据）、`PUT`（用于更新资源）、`DELETE`（用于删除资源）等。
- **请求头与响应头设置**：请求头可用于传递额外信息，如身份验证信息、数据格式等；响应头包含服务器返回的元数据，如内容类型、缓存信息等。
- **跨域问题及解决方案**：由于浏览器的同源策略，不同源的页面之间无法直接进行数据交互。常见的解决方案有 JSONP（JSON with Padding）、CORS（Cross-Origin Resource Sharing）和代理服务器。

#### 2. Axios 相关知识点
- **基本用法**：Axios 是一个基于 Promise 的 HTTP 客户端，用于浏览器和 Node.js。可以使用它发送各种类型的请求，设置拦截器对请求和响应进行预处理，处理请求和响应数据格式，还可以取消请求。
- **与框架集成**：Axios 可以很方便地与 Vue、React 等前端框架集成，用于处理数据交互。

### 完整 Demo

#### 1. 使用 Ajax（XMLHttpRequest）进行数据交互

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ajax Demo</title>
</head>

<body>
  <button id="getButton">GET 请求</button>
  <button id="postButton">POST 请求</button>
  <div id="result"></div>

  <script>
    // 获取按钮元素
    const getButton = document.getElementById('getButton');
    const postButton = document.getElementById('postButton');
    const resultDiv = document.getElementById('result');

    // GET 请求
    getButton.addEventListener('click', () => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resultDiv.textContent = xhr.responseText;
          } else {
            resultDiv.textContent = `请求失败，状态码: ${xhr.status}`;
          }
        }
      };

      xhr.send();
    });

    // POST 请求
    postButton.addEventListener('click', () => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
      xhr.setRequestHeader('Content-Type', 'application/json');

      const data = {
        title: 'foo',
        body: 'bar',
        userId: 1
      };

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 201) {
            resultDiv.textContent = xhr.responseText;
          } else {
            resultDiv.textContent = `请求失败，状态码: ${xhr.status}`;
          }
        }
      };

      xhr.send(JSON.stringify(data));
    });
  </script>
</body>

</html>
```

#### 2. 使用 Axios 进行数据交互

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Axios Demo</title>
  <!-- 引入 Axios -->
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>

<body>
  <button id="axiosGetButton">Axios GET 请求</button>
  <button id="axiosPostButton">Axios POST 请求</button>
  <div id="axiosResult"></div>

  <script>
    const axiosGetButton = document.getElementById('axiosGetButton');
    const axiosPostButton = document.getElementById('axiosPostButton');
    const axiosResultDiv = document.getElementById('axiosResult');

    // Axios GET 请求
    axiosGetButton.addEventListener('click', () => {
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
          axiosResultDiv.textContent = JSON.stringify(response.data);
        })
        .catch(error => {
          axiosResultDiv.textContent = `请求失败: ${error.message}`;
        });
    });

    // Axios POST 请求
    axiosPostButton.addEventListener('click', () => {
      const data = {
        title: 'foo',
        body: 'bar',
        userId: 1
      };

      axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then(response => {
          axiosResultDiv.textContent = JSON.stringify(response.data);
        })
        .catch(error => {
          axiosResultDiv.textContent = `请求失败: ${error.message}`;
        });
    });
  </script>
</body>

</html>
```

#### 3. Axios 与 Vue 集成示例

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Axios with Vue</title>
  <!-- 引入 Vue -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
  <!-- 引入 Axios -->
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
</head>

<body>
  <div id="app">
    <button @click="fetchData">获取数据</button>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>

  <script>
    new Vue({
      el: '#app',
      data: {
        posts: []
      },
      methods: {
        fetchData() {
          axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
              this.posts = response.data;
            })
            .catch(error => {
              console.error('请求失败:', error);
            });
        }
      }
    });
  </script>
</body>

</html>
```

### 总结
通过以上示例，你可以看到如何使用 Ajax 和 Axios 进行数据交互，处理请求和响应，以及如何将 Axios 与 Vue 框架集成。同时，还可以了解到不同请求方法的使用和错误处理的基本方法。
</details>

## 对 Node.js 有一定了解，能搭建简单的后端服务，进行接口开发、路由配置，实现前后端联调，了解常见的 Node.js 模块与包管理。

<details>
    <summary>demon</summary>

    ### 知识点总结

#### 1. Node.js 基础模块
- **fs 模块**：用于文件系统操作，如读取、写入、删除文件，以及目录操作等。
- **path 模块**：提供了处理和转换文件路径的实用工具。
- **http 模块**：用于创建 HTTP 服务器和客户端，处理 HTTP 请求和响应。
- **events 模块**：是 Node.js 中实现事件驱动编程的基础，许多核心模块都基于它构建。

#### 2. 文件系统操作
- **读取文件**：使用 `fs.readFile` 或 `fs.readFileSync` 方法。
- **写入文件**：使用 `fs.writeFile` 或 `fs.writeFileSync` 方法。
- **删除文件**：使用 `fs.unlink` 或 `fs.unlinkSync` 方法。
- **目录操作**：使用 `fs.mkdir`、`fs.rmdir` 等方法。

#### 3. HTTP 服务器创建与请求处理流程
- 创建 HTTP 服务器：使用 `http.createServer` 方法。
- 处理请求：在服务器的回调函数中处理请求和响应。

#### 4. Express、Koa 等常用 Web 框架
- **项目搭建**：使用框架的脚手架工具或手动创建项目结构。
- **路由定义**：定义不同路径的请求处理函数。
- **中间件原理**：中间件是处理请求和响应的函数，可以用于日志记录、错误处理、权限验证等。
- **模板引擎集成**：如 ejs、pug 等，用于动态生成 HTML 页面。

#### 5. Node.js 与数据库交互
- **连接数据库**：使用相应的数据库驱动或 ORM 框架连接数据库。
- **连接池配置**：提高数据库连接的性能和效率。
- **基本的增删改查操作**：执行 SQL 语句或使用 ORM 框架的方法进行数据操作。
- **ORM 框架**：如 Sequelize，用于将数据库操作抽象为对象操作。

### 完整 Demo

#### 1. Node.js 基础模块使用

```javascript
const fs = require('fs');
const path = require('path');

// 文件读取
fs.readFile(path.join(__dirname, 'test.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件失败:', err);
    return;
  }
  console.log('文件内容:', data);
});

// 文件写入
fs.writeFile(path.join(__dirname, 'new.txt'), 'Hello, Node.js!', (err) => {
  if (err) {
    console.error('写入文件失败:', err);
    return;
  }
  console.log('文件写入成功');
});

// 创建 HTTP 服务器
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('服务器运行在 http://localhost:3000');
});
```

#### 2. 使用 Express 框架搭建项目

```javascript
const express = require('express');
const app = express();
const port = 3000;

// 中间件：日志记录
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 路由定义
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error('错误:', err);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
```

#### 3. Express 集成 EJS 模板引擎

```javascript
const express = require('express');
const app = express();
const port = 3000;

// 设置模板引擎
app.set('view engine', 'ejs');

// 路由定义
app.get('/', (req, res) => {
  const data = {
    title: 'Home Page',
    message: 'Welcome to my website!'
  };
  res.render('index', data);
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
```

在项目根目录下创建 `views` 文件夹，并在其中创建 `index.ejs` 文件：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= title %></title>
</head>

<body>
  <h1><%= message %></h1>
</body>

</html>
```

#### 4. Node.js 与 MySQL 数据库交互

```javascript
const mysql = require('mysql2/promise');

// 配置连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 基本的增删改查操作
async function main() {
  try {
    // 查询数据
    const [rows] = await pool.execute('SELECT * FROM users');
    console.log('查询结果:', rows);

    // 插入数据
    const [result] = await pool.execute('INSERT INTO users (name, age) VALUES (?, ?)', ['John', 25]);
    console.log('插入结果:', result);

    // 更新数据
    const [updateResult] = await pool.execute('UPDATE users SET age = ? WHERE name = ?', [26, 'John']);
    console.log('更新结果:', updateResult);

    // 删除数据
    const [deleteResult] = await pool.execute('DELETE FROM users WHERE name = ?', ['John']);
    console.log('删除结果:', deleteResult);
  } catch (error) {
    console.error('数据库操作失败:', error);
  } finally {
    pool.end();
  }
}

main();
```

#### 5. 使用 Sequelize ORM 框架

```javascript
const { Sequelize, DataTypes } = require('sequelize');

// 配置连接
const sequelize = new Sequelize('testdb', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

// 定义模型
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER
  }
});

// 同步模型到数据库
async function syncDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log('数据库同步成功');
  } catch (error) {
    console.error('数据库同步失败:', error);
  }
}

// 基本的增删改查操作
async function main() {
  await syncDatabase();

  try {
    // 创建用户
    const user = await User.create({ name: 'Jane', age: 30 });
    console.log('创建用户:', user.toJSON());

    // 查询用户
    const users = await User.findAll();
    console.log('查询用户:', users.map(user => user.toJSON()));

    // 更新用户
    await user.update({ age: 31 });
    console.log('更新用户:', user.toJSON());

    // 删除用户
    await user.destroy();
    console.log('删除用户成功');
  } catch (error) {
    console.error('数据库操作失败:', error);
  } finally {
    await sequelize.close();
  }
}

main();
```

### 总结
通过以上示例，你可以了解到 Node.js 基础模块的使用、文件系统操作、HTTP 服务器的创建、Express 框架的使用、模板引擎的集成、Node.js 与 MySQL 数据库的交互以及 Sequelize ORM 框架的基本使用。这些示例涵盖了 Node.js 后端开发的常见场景和操作。
</details>

## 掌握至少一种数据可视化库（Echarts、AntV/X6），能够根据需求进行数据可视化图表的创建、配置与优化，展示数据信息。

<details>
    <summary>demon</summary>

    ### 知识点总结

#### 1. Echarts
- **图表类型选择**：根据数据特点和展示需求选择合适的图表类型，如柱状图适合比较数据大小，折线图适合展示数据趋势，饼图适合展示数据占比，散点图适合展示数据分布等。
- **基本配置**：包括坐标轴（x 轴、y 轴）的设置、图例（用于标识不同数据系列）的显示和数据系列（实际的数据集合）的配置。
- **交互功能实现**：如 tooltip（鼠标悬停显示数据详情）、legend 切换（通过点击图例显示或隐藏对应数据系列）、缩放（对图表进行缩放操作）等。

#### 2. AntV/X6
- **基础概念**：了解节点（代表实体）、边（代表实体之间的关系）等基本元素。
- **创建节点和边**：使用 API 创建节点和边，并设置其属性。
- **布局算法应用**：根据需求选择合适的布局算法，如力导向布局可使节点自然分布，树状布局适合展示层级关系。
- **图组件交互事件绑定**：为节点、边等元素绑定交互事件，如点击、鼠标悬停等，以实现交互效果。
- **应用场景**：常用于流程、关系图的绘制，如流程图、组织架构图等。

### 完整 Demo

#### 1. Echarts 示例

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Echarts Demo</title>
  <!-- 引入 Echarts -->
  <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.2/dist/echarts.min.js"></script>
</head>

<body>
  <!-- 定义图表容器 -->
  <div id="main" style="width: 600px; height: 400px;"></div>
  <script>
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
      // 标题
      title: {
        text: '柱状图示例'
      },
      // 图例
      legend: {
        data: ['销量']
      },
      // x 轴
      xAxis: {
        data: ['苹果', '香蕉', '橙子', '葡萄', '草莓']
      },
      // y 轴
      yAxis: {},
      // 数据系列
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10]
      }],
      // 提示框
      tooltip: {
        trigger: 'axis'
      },
      // 工具盒
      toolbox: {
        feature: {
          dataZoom: {},
          restore: {},
          saveAsImage: {}
        }
      }
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  </script>
</body>

</html>
```

#### 2. AntV/X6 示例

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AntV/X6 Demo</title>
  <!-- 引入 AntV/X6 -->
  <link rel="stylesheet" href="https://unpkg.com/@antv/x6@1.30.2/dist/style.css">
  <script src="https://unpkg.com/@antv/x6@1.30.2/dist/x6.js"></script>
</head>

<body>
  <!-- 定义图容器 -->
  <div id="graph-container" style="width: 600px; height: 400px;"></div>
  <script>
    // 创建图实例
    const graph = new X6.Graph({
      container: document.getElementById('graph-container'),
      grid: true
    });

    // 创建节点
    const node1 = graph.addNode({
      x: 100,
      y: 100,
      width: 80,
      height: 40,
      label: '节点 1'
    });

    const node2 = graph.addNode({
      x: 300,
      y: 100,
      width: 80,
      height: 40,
      label: '节点 2'
    });

    // 创建边
    const edge = graph.addEdge({
      source: node1,
      target: node2
    });

    // 应用力导向布局
    graph.layout({
      type: 'force',
      nodeStrength: -300,
      linkStrength: 0.1
    });

    // 绑定节点点击事件
    graph.on('node:click', ({ cell }) => {
      console.log('点击节点:', cell.id);
    });
  </script>
</body>

</html>
```

### 总结
以上两个示例分别展示了如何使用 Echarts 创建柱状图，并实现基本的配置和交互功能，以及如何使用 AntV/X6 创建节点、边，应用布局算法，并绑定交互事件。通过这些示例，你可以初步掌握这两种数据可视化库的基本使用方法。
</details>

## 了解微前端架构，掌握 qiankun.js 基本使用，实现微应用的集成、加载与通信，应对大型项目的架构拆分需求。

<details>
    <summary>demon</summary>

    ### 知识点总结

#### 1. 微前端架构理念
- **核心思想**：将一个大型前端应用拆分成多个小型、自治的前端应用（微应用），每个微应用可以独立开发、测试、部署，最后再集成到一个主应用中。
- **解决的问题与应用场景**：适用于大型项目，解决代码复杂度高、团队协作困难、技术栈升级困难等问题。例如，多个团队负责不同业务模块的大型电商平台、企业级管理系统等。
- **与传统单体前端对比优势**：提高开发效率，不同团队可以并行开发不同的微应用；降低维护成本，每个微应用的代码量相对较小，易于维护；便于技术栈升级，可逐步替换部分微应用的技术栈。

#### 2. qiankun.js 相关知识点
- **主应用与子应用配置**：主应用需要注册子应用信息，包括子应用的名称、入口地址等；子应用需要暴露特定的生命周期函数供主应用调用。
- **加载机制**：qiankun.js 会根据配置动态加载子应用的资源，在需要时将子应用挂载到主应用的指定容器中。
- **样式隔离策略**：通过一些技术手段避免子应用的样式影响主应用或其他子应用，如使用 Shadow DOM、CSS Modules 等。
- **全局状态共享与通信方式**：可以使用事件总线、状态管理库（如 Redux、Vuex）等方式实现主应用与子应用之间的通信和状态共享。
- **子应用的独立开发与部署流程**：子应用可以独立进行开发、测试和部署，部署后主应用可以通过配置加载最新版本的子应用。

### 完整 Demo

#### 1. 项目初始化
首先，创建主应用和子应用的项目结构。这里以 Vue 为例，使用 Vue CLI 创建项目。

```bash
# 创建主应用
vue create main-app
cd main-app

# 创建子应用
vue create sub-app
cd sub-app
```

#### 2. 主应用配置

在主应用的 `main.js` 中引入并配置 qiankun：

```javascript
import Vue from 'vue';
import App from './App.vue';
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false;

// 注册子应用
registerMicroApps([
  {
    name: 'sub-app', // 子应用名称
    entry: '//localhost:8081', // 子应用入口地址
    container: '#sub-app-container', // 子应用挂载的容器
    activeRule: '/sub-app' // 子应用激活规则
  }
]);

// 启动 qiankun
start();

new Vue({
  render: h => h(App)
}).$mount('#app');
```

在主应用的 `App.vue` 中添加子应用的挂载容器：

```vue
<template>
  <div id="app">
    <h1>主应用</h1>
    <a href="/sub-app">打开子应用</a>
    <div id="sub-app-container"></div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```

#### 3. 子应用配置

在子应用的 `main.js` 中暴露生命周期函数：

```javascript
import Vue from 'vue';
import App from './App.vue';

let instance = null;

function render() {
  instance = new Vue({
    render: h => h(App)
  }).$mount('#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  // 独立运行时
  render();
}

export async function bootstrap() {
  console.log('[sub-app] 子应用开始加载');
}

export async function mount(props) {
  console.log('[sub-app] 子应用挂载', props);
  render();
}

export async function unmount() {
  console.log('[sub-app] 子应用卸载');
  instance.$destroy();
  instance = null;
}
```

#### 4. 样式隔离
qiankun 提供了 `sandbox` 配置来实现样式隔离，在主应用的 `registerMicroApps` 中添加 `sandbox` 选项：

```javascript
registerMicroApps([
  {
    name: 'sub-app',
    entry: '//localhost:8081',
    container: '#sub-app-container',
    activeRule: '/sub-app',
    sandbox: true // 开启样式隔离
  }
]);
```

#### 5. 全局状态共享与通信
可以使用事件总线来实现主应用与子应用之间的通信。

在主应用中发送消息：

```javascript
import { registerMicroApps, start, initGlobalState } from 'qiankun';

// 初始化全局状态
const actions = initGlobalState({
  message: 'Hello from main app'
});

// 注册子应用
registerMicroApps([
  {
    name: 'sub-app',
    entry: '//localhost:8081',
    container: '#sub-app-container',
    activeRule: '/sub-app',
    props: {
      actions // 将事件总线传递给子应用
    }
  }
]);

// 发送消息
actions.setGlobalState({
  message: 'New message from main app'
});

start();
```

在子应用中接收消息：

```javascript
export async function mount(props) {
  console.log('[sub-app] 子应用挂载', props);
  const { actions } = props;
  actions.onGlobalStateChange((state) => {
    console.log('接收到主应用的消息:', state.message);
  }, true);
  render();
}
```

### 总结
通过以上示例，你可以了解到微前端架构的基本理念，以及如何使用 qiankun.js 实现主应用与子应用的集成、加载、样式隔离和通信。子应用可以独立开发和部署，主应用通过配置动态加载子应用，实现了大型项目的架构拆分。
</details>

## 熟悉构建工具 Vite 与 Webpack，能进行项目的打包、优化配置，提升项目的构建效率与性能。

<details>
    <summary>demon</summary>

    ### 知识点总结

#### 1. Webpack
- **核心概念**
    - **入口（Entry）**：Webpack 开始构建的起点文件，指示 Webpack 从哪个文件开始打包。
    - **出口（Output）**：指定打包后的文件输出路径和文件名。
    - **Loader**：用于处理不同类型的文件，将它们转换为 Webpack 能够处理的模块，比如将 CSS、图片等文件转换为 JavaScript 模块。
    - **Plugin**：扩展 Webpack 功能，在 Webpack 构建流程的特定时机执行特定任务，如生成 HTML 文件、压缩代码等。
- **常见 Loader 配置**
    - **css-loader**：解析 CSS 文件中的 `@import` 和 `url()` 等语句。
    - **style-loader**：将 CSS 代码插入到 HTML 的 `<style>` 标签中。
    - **babel-loader**：使用 Babel 转换 JavaScript 代码，使其兼容旧版本浏览器。
- **Plugin 应用**
    - **HtmlWebpackPlugin**：生成 HTML 文件，并自动注入打包后的 JavaScript 和 CSS 文件。
    - **MiniCssExtractPlugin**：将 CSS 提取到单独的文件中，而不是内联在 JavaScript 中。
- **优化策略**
    - **代码分割**：将代码拆分成多个较小的文件，按需加载，减少初始加载时间。
    - **缓存**：利用缓存机制，避免重复构建，提高构建速度。
    - **Tree Shaking**：移除代码中未使用的部分，减小打包文件的体积。

#### 2. Vite
- **原理**
    - **基于 ESModule 的快速冷启动**：Vite 利用浏览器原生的 ESModule 支持，在开发环境中直接使用浏览器加载模块，避免了像 Webpack 那样的预打包过程，从而实现快速冷启动。
    - **热更新原理**：Vite 在文件发生变化时，通过 WebSocket 通知浏览器更新相应的模块，实现快速热更新。
- **项目搭建**：可以使用 Vite 官方提供的脚手架工具快速搭建项目。
- **与框架配合使用**：Vite 支持与 Vue、React 等主流前端框架无缝配合。
- **配置文件 `vite.config.js` 编写**：用于配置 Vite 的各种参数，如端口、代理、插件等。
- **插件开发入门**：Vite 插件可以扩展其功能，开发插件需要了解 Vite 的插件 API。

### 完整 Demo

#### 1. Webpack 示例

##### 项目初始化
```bash
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```

##### 安装 Loader 和 Plugin
```bash
npm install css-loader style-loader babel-loader @babel/core @babel/preset-env html-webpack-plugin mini-css-extract-plugin --save-dev
```

##### 创建项目文件结构
```plaintext
webpack-demo
├── src
│   ├── index.js
│   └── style.css
├── index.html
└── webpack.config.js
```

##### `src/index.js`
```javascript
import './style.css';

function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Hello, Webpack!';
  return element;
}

document.body.appendChild(component());
```

##### `src/style.css`
```css
body {
  background-color: lightblue;
}
```

##### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webpack Demo</title>
</head>
<body>
  
</body>
</html>
```

##### `webpack.config.js`
```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]
};
```

##### 运行打包命令
```bash
npx webpack
```

#### 2. Vite 示例

##### 项目搭建
```bash
# 创建 Vite + Vue 项目
npm init vite@latest vite-vue-demo -- --template vue
cd vite-vue-demo
npm install
```

##### `vite.config.js` 配置示例
```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  }
});
```

##### 插件开发入门示例
创建一个简单的 Vite 插件，在控制台输出构建开始和结束信息。

```javascript
// vite-plugin-log.js
export default function vitePluginLog() {
  return {
    name: 'vite-plugin-log',
    buildStart() {
      console.log('构建开始');
    },
    buildEnd() {
      console.log('构建结束');
    }
  };
}
```

在 `vite.config.js` 中使用该插件：
```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vitePluginLog from './vite-plugin-log';

export default defineConfig({
  plugins: [vue(), vitePluginLog()]
});
```

### 总结
通过以上示例，你可以了解到 Webpack 的核心概念、常见 Loader 和 Plugin 的使用，以及如何进行项目的打包和优化。同时，也掌握了 Vite 的项目搭建、配置文件编写和插件开发的基本方法。这些知识可以帮助你提升项目的构建效率和性能。 
</details>

## 对 React 技术栈有初步认识，了解其基本概念、组件化思想与常用 API，能读懂简单的 React 代码。

<details>
    <summary>demon</summary>

    ### 知识点总结

#### 1. React 组件创建
- **函数组件**：是一个纯 JavaScript 函数，接收 `props` 作为参数并返回 JSX 元素。它是无状态的，简洁且易于理解。
- **类组件**：继承自 `React.Component`，有自己的状态和生命周期方法。适用于需要管理复杂状态和使用生命周期钩子的场景。

#### 2. 组件生命周期
- **旧版**：包含挂载阶段（`componentWillMount`、`render`、`componentDidMount` 等）、更新阶段（`componentWillReceiveProps`、`shouldComponentUpdate` 等）和卸载阶段（`componentWillUnmount`）。
- **新版**：强调使用副作用钩子（`useEffect`）替代部分旧生命周期方法，移除了一些不安全的生命周期方法（如 `componentWillMount`、`componentWillReceiveProps`、`componentWillUpdate`）。

#### 3. 状态与属性管理
- **状态（`useState`）**：在函数组件中用于管理组件的局部状态，是 React Hooks 的一种，调用 `useState` 会返回一个状态值和更新该状态的函数。
- **属性（`props`）**：用于在组件之间传递数据，是父组件向子组件传递数据的主要方式。

#### 4. React 事件处理机制
- **合成事件**：是 React 对原生事件的封装，具有跨浏览器兼容性，使用小驼峰命名，如 `onClick`。
- **原生事件**：直接绑定到 DOM 元素上的事件，使用全小写命名，如 `onclick`。
- **事件冒泡与捕获**：React 中的合成事件默认使用冒泡阶段，可通过 `Capture` 后缀（如 `onClickCapture`）使用捕获阶段。

#### 5. JSX 语法基础
- 是 JavaScript 的语法扩展，允许在 JavaScript 代码中编写类似 XML 的代码，最终会被编译成 JavaScript 对象。
- 可以与 JavaScript 混合编程，使用 `{}` 插入 JavaScript 表达式。
- **条件渲染**：通过 `if` 语句、三元运算符或逻辑与运算符实现。
- **列表渲染**：使用 JavaScript 的 `map` 方法遍历数组并渲染列表项。

#### 6. React Router
- **基础路由配置**：定义不同路径对应的组件，使用 `BrowserRouter`、`Route` 和 `Switch` 等组件。
- **路由参数传递**：在路由路径中使用 `:param` 定义参数，通过 `props.match.params` 获取参数值。
- **嵌套路由**：在组件内部定义子路由，实现路由的嵌套。

#### 7. 简单的 Redux 状态管理概念
- **action**：是一个描述状态变化的对象，包含 `type` 属性和可选的 `payload` 属性。
- **reducer**：是一个纯函数，接收当前状态和 action 作为参数，返回新的状态。
- **store**：是 Redux 应用的状态容器，负责存储应用的所有状态，并提供 `dispatch` 方法来触发 action。

### 完整 Demo

#### 1. React 组件创建
```jsx
// 函数组件
import React from 'react';

const FunctionComponent = (props) => {
  return <div>Hello, {props.name}!</div>;
};

// 类组件
import React, { Component } from 'react';

class ClassComponent extends Component {
  render() {
    return <div>Hello, {this.props.name}!</div>;
  }
}

export { FunctionComponent, ClassComponent };
```

#### 2. 组件生命周期（新版示例）
```jsx
import React, { useEffect, useState } from 'react';

const LifecycleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 组件挂载时执行
    console.log('Component mounted');

    return () => {
      // 组件卸载时执行
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {
    // count 变化时执行
    console.log(`Count changed to ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LifecycleComponent;
```

#### 3. 状态与属性管理
```jsx
import React, { useState } from 'react';

const ParentComponent = () => {
  const [name, setName] = useState('John');

  return (
    <div>
      <ChildComponent name={name} />
      <button onClick={() => setName('Jane')}>Change Name</button>
    </div>
  );
};

const ChildComponent = (props) => {
  return <div>Hello, {props.name}!</div>;
};

export default ParentComponent;
```

#### 4. React 事件处理机制
```jsx
import React from 'react';

const EventComponent = () => {
  const handleClick = (event) => {
    console.log('Button clicked', event);
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
};

export default EventComponent;
```

#### 5. JSX 语法基础
```jsx
import React from 'react';

const JsxComponent = () => {
  const isLoggedIn = true;
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      {/* 条件渲染 */}
      {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}
      {/* 列表渲染 */}
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default JsxComponent;
```

#### 6. React Router
```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const User = (props) => <h2>User: {props.match.params.username}</h2>;

const AppRouter = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/user/john">User John</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/user/:username" component={User} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
```

#### 7. 简单的 Redux 状态管理
```jsx
import React from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// action
const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

// reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

// store
const store = createStore(counterReducer);

const CounterComponent = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

export default ReduxApp;
```

### 总结
通过以上示例，你可以深入理解 React 的基本概念、组件化思想和常用 API。从组件的创建、生命周期管理，到状态和属性的处理，再到事件处理、JSX 语法、路由配置和简单的状态管理，这些知识点构成了 React 开发的基础。
</details>

---

### （一）HTML
- HTML5 语义化标签（如 header、footer、nav、article 等）的正确使用及场景适配。
- 表单元素（input 各种类型、textarea、select 等）及其属性（如 required、pattern、placeholder 等）的运用，表单验证原理。
- HTML 多媒体元素（audio、video）的嵌入与控制。
- iframe 的使用场景及安全性考量，与父页面的通信方式。

### （二）CSS
- CSS 选择器优先级计算，权重分析，常见选择器（类选择器、ID 选择器、属性选择器、伪类选择器等）的灵活运用。
- 盒模型（标准盒模型、怪异盒模型）详解，边距重叠问题及解决方案，元素尺寸计算。
- 浮动布局、清除浮动的方法（如 clearfix 技巧、overflow:hidden 等），BFC（块级格式化上下文）原理与应用场景。
- CSS3 动画（@keyframes、animation 属性），过渡效果（transition），实现元素的动态展示，如渐变、旋转、缩放等。
- 弹性布局（display:flex），容器与项目属性设置，实现复杂页面布局，如响应式导航栏、卡片式布局。
- 网格布局（display:grid）基本概念与属性运用，与弹性布局的对比及结合使用。
- CSS 预处理器（Less、Sass）变量、嵌套规则、混合（mixin）、函数的使用，编译配置。

### （三）JavaScript（含 ES6+）
- 数据类型（原始数据类型与引用数据类型），变量声明（var、let、const）差异，类型转换（显式与隐式），深拷贝与浅拷贝原理与实现。
- 函数表达式与函数声明区别，箭头函数特性（this 指向、简洁语法），函数柯里化应用，闭包原理与内存泄漏防范。
- 面向对象编程（ES6 类语法糖，原型链继承、构造函数继承、组合继承等多种继承方式对比），对象创建模式（工厂模式、单例模式、原型模式等）。
- 异步编程（Promise 原理与用法，async/await 语法糖，回调地狱问题及解决，事件循环机制理解，宏任务与微任务执行顺序）。
- ES6+新特性（解构赋值、扩展运算符、Symbol、Set、Map、Proxy、Reflect 等）在实际项目中的运用。
- 错误处理机制（try-catch-finally，throw 语句，自定义错误类型），调试技巧（浏览器开发者工具使用，断点调试，console 方法进阶）。

### （四）TypeScript
- 基础类型、联合类型、交叉类型、字面量类型的定义与使用，类型断言操作。
- 接口（interface）定义，可选属性、只读属性，接口继承，函数类型接口声明。
- 类的类型定义，成员变量、方法的类型标注，抽象类与抽象方法，泛型类与泛型函数。
- 模块系统（import/export）在 TypeScript 中的运用，与 JavaScript 模块的兼容处理。
- tsconfig.json 配置项解读，类型检查级别调整，路径别名设置等常见配置。

### （五）Vue 技术栈
- Vue2 与 Vue3 响应式原理对比（Object.defineProperty 与 Proxy），响应式数据的创建、更新与监听，ref、reactive 等 API 使用。
- Vue 组件基础（组件定义、注册、通信，props 验证，自定义事件，插槽 slot 使用，作用域插槽应用）。
- Vue Router（路由模式，动态路由，路由懒加载，导航守卫，路由元信息 meta 运用，路由传参方式对比）。
- Vuex（状态管理核心概念，store 模块结构，mutations、actions、getters 职责与用法，模块划分与命名空间应用）。
- Vue 项目构建与优化（脚手架使用，组件库引入，性能优化点，如 v-if/v-show 选择、列表渲染优化 key 值设置、异步组件应用等）。

### （六）数据交互
- Ajax 原理（XMLHttpRequest 对象），请求方法（GET、POST、PUT、DELETE 等），请求头与响应头设置，跨域问题及解决方案（JSONP、CORS、代理服务器等）。
- Axios 基本用法（发送请求、拦截器设置，请求与响应数据格式处理，取消请求操作），与 Vue、React 等框架的集成。

### （七）Node.js
- Node.js 基础模块（fs、path、http、events 等）使用，文件系统操作（读取、写入、删除、目录操作），HTTP 服务器创建与请求处理流程。
- Express、Koa 等常用 Web 框架搭建项目，路由定义，中间件原理（如日志记录、错误处理、权限验证中间件编写），模板引擎集成（ejs、pug 等）。
- Node.js 与数据库交互（如 MySQL、MongoDB），连接池配置，基本的增删改查操作，ORM 框架（Sequelize 等）初步了解。

### （八）数据可视化
- Echarts 图表类型（柱状图、折线图、饼图、散点图等）选择与基本配置（坐标轴、图例、数据系列），交互功能（tooltip、legend 切换、缩放等）实现。
- AntV/X6 图可视化库基础概念，创建节点、边，布局算法应用（如力导向布局、树状布局），图组件交互事件绑定，应用于流程、关系图绘制场景。

### （九）微前端
- 微前端架构理念理解，解决的问题与应用场景，与传统单体前端对比优势。
- qiankun.js 主应用与子应用配置，加载机制，样式隔离策略，全局状态共享与通信方式，子应用的独立开发与部署流程。

### （十）构建工具
- Webpack 核心概念（入口、出口、loader、plugin），常见 loader（如 css-loader、style-loader、babel-loader 等）配置，plugin 应用（如 HtmlWebpackPlugin、MiniCssExtractPlugin 等），优化策略（代码分割、缓存、Tree Shaking 等）。
- Vite 原理（基于 ESModule 的快速冷启动，热更新原理），项目搭建，与 Vue、React 框架的配合使用，配置文件 vite.config.js 编写，插件开发入门。

### （十一）React（初步）
- React 组件创建（函数组件、类组件），组件生命周期（旧版与新版对比），状态（useState）与属性（props）管理。
- React 事件处理机制，合成事件与原生事件区别，事件冒泡与捕获在 React 中的处理。
- JSX 语法基础，与 JavaScript 混合编程，条件渲染、列表渲染在 React 中的实现方式。
- React Router（基础路由配置，路由参数传递，嵌套路由），简单的 Redux 状态管理概念引入（action、reducer、store 关系）。