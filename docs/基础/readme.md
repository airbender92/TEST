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
    ### HTML基础概念

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

#### （三）JavaScript & ES6
- 基础语法：变量声明（var、let、const）差异，数据类型（Number、String、Boolean、Object、Array、Function、Symbol、null、undefined），运算符（算术、比较、逻辑、三元等），类型转换。
- 流程控制：if - else、switch 条件语句，for、while、do - while 循环语句，break、continue 关键字。
- 函数：函数定义、调用、参数传递（默认参数、剩余参数），函数表达式与声明，箭头函数特性（this 指向、简洁语法），闭包概念与应用场景。
- 对象：对象字面量创建，对象属性访问与修改，遍历对象（for - in、Object.keys() 等），构造函数与原型链基础。
- ES6 新特性：let 和 const 块级作用域，解构赋值（数组、对象），模板字符串，箭头函数，类（class）与继承，Promise 异步处理基础，模块化（import/export）概念。

#### （四）TypeScript
- 基础类型：与 JavaScript 基础类型对应关系，新增类型（如 any、unknown、never），接口（interface）定义对象形状，类型别名（type alias）。
- 函数类型：参数类型声明，返回值类型声明，可选参数、剩余参数在类型声明中的体现，函数重载概念。
- 类与接口：类的定义与继承，接口实现（implements），抽象类（abstract class）与抽象方法，访问修饰符（public、private、protected）。

#### （五）Vue
- Vue2：实例创建（new Vue()），数据绑定（v - bind、v - model），指令（v - if、v - for、v - show、v - on 等），组件注册（全局与局部），生命周期钩子（created、mounted、updated、destroyed 等），父子组件通信（props、$emit）。
- Vue3：组合式 API（setup 函数、ref、reactive、watchEffect、computed 等），响应式原理基础，与 Vue2 语法对比（如模板语法、生命周期调整），组件传参新特性（provide / inject）。
- Vuex：状态管理核心概念（store、state、mutations、actions、getters），模块划分，在 Vue 组件中如何使用 Vuex 管理状态（mapState、mapMutations、mapActions、mapGetters）。
- Vue Router：路由模式（hash、history），路由配置（routes、path、component、redirect 等），路由导航（router - link、router - push、router - replace），路由守卫（全局、路由独享、组件内）。

#### （六）前端网络请求
- Ajax：XMLHttpRequest 对象的创建与使用步骤（open、send、onreadystatechange），请求方法（GET、POST 等），状态码解读（200、404、500 等）。
- Axios：Axios 基本使用（GET、POST 请求示例，配置参数如 headers、timeout），响应拦截与请求拦截设置，处理异步请求的错误与数据解析。

#### （七）CSS 预处理器（Less & Sass）
- 基础语法：变量定义（$ 或 @ 开头）与使用，嵌套规则（后代、兄弟嵌套），混合（mixin）创建与引用，继承（extend）特性，函数（如颜色处理函数）运用。
- 工程化应用：在项目中引入预处理器，文件组织（如变量文件、混合文件分离），与 CSS 后处理工具（如 PostCSS）结合优化样式输出。

#### （八）前端开发工具与调试
- 代码编辑器：VS Code 插件安装与配置（如 ESLint、Prettier、Vetur 等），代码片段使用，高效快捷键（如代码格式化、快速导航、多光标操作）。
- 浏览器开发者工具：Elements 面板（查看、修改元素样式与结构），Console 面板（打印调试信息、执行 JavaScript 片段），Network 面板（分析请求、查看响应数据、排查加载问题），Sources 面板（调试 JavaScript 代码，设置断点、单步执行）。