# JavaScript 本地刷题

## 目录

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [功能](#%E5%8A%9F%E8%83%BD)
- [安装](#%E5%AE%89%E8%A3%85)
  - [Step 1](#step-1)
  - [Step 2](#step-2)
- [单元测试](#%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95)
- [模块化注意事项](#%E6%A8%A1%E5%9D%97%E5%8C%96%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 功能

简单的 LeetCode JavaScript 本地刷题模板。可以使用 JavaScript 刷题，有 Jest 单元测试功能。欢迎 fork。

另有 [TS 豪华加强版](https://github.com/seognil-study/leetcode/tree/master/js)（我的刷题主仓库），针对测试做了一些封装，包括用例遍历、log、title 等。以及写了一些数据结构处理工具。

也可以根据自己的需求自行开发。本仓库作为模板就不引入更多内容了。

## 安装

### Step 1

安装 [VS Code](https://code.visualstudio.com/)

安装 [LeetCode - VS Code Extension](https://marketplace.visualstudio.com/items?itemName=shengchen.vscode-leetcode) 插件

这个插件需要调整 VSCode 的 User 的 `settings.json` 配置，例如改这些字段：

```json
{
  "leetcode.defaultLanguage": "javascript",
  "leetcode.workspaceFolder": "/Users/lc/github-repo/leetcode-startup-js", // 改成你的文件夹路径
  "leetcode.filePath": {
    "javascript": {
      "folder": "./problems/${id}.${kebab-case-name}",
      "filename": "solution.js"
    }
  }
}
```

还需要通过插件登陆 LeetCode 账户，这样就能愉快地在本地刷题了。

详情见插件自己的说明文档。

### Step 2

下载本仓库，安装：

```bash
npm install
```

运行测试：

```bash
npm run test --watch
```

## 单元测试

关于单元测试框架 Jest。

如果没用过，可以查看 [Jest 官方文档](https://jestjs.io/)，
或看看我写的 [Jest 学习指南](https://fe.rualc.com/note/jest.html)。针对刷题的代码，只会用到很少一部分功能，很简单就能上手。

单元测试的代码设计，我最终决定采用手写每个测试用例的方式。代码逻辑简单明了。  
（在我的主仓库中用了一些辅助函数，但也是显式调用的）

刷题的重点和难点在于算法本身不是吗？代码逻辑越清晰越好。多复制粘贴几个字符花不了多少时间。

### 模块化注意事项

为了支持测试，需要模块化导出。

但需要注意不要在 `solution.js` 文件中 `import` 任何外部模块（因为插件只会帮你提交文件内的代码），所有解答必须在 `solution.js` 文件内完成。

为了支持测试，你可能需要额外写一些缺失的函数（每道题都是如此），比如第 2 题中的 `ListNode` 类（这个语法无所谓，已经支持 ES6 了）。好在 LeetCode 解答的代码规模都不大。

`solution.js`：

```js
class ListNode() {
  // ...
}

const addTwoNumbers = (l1, l2) => {
  // ... complete algorithm logic

  return result;
};

export { addTwoNumbers };
```

`xxx.test.js`：

```js
import { addTwoNumbers } from './solution';

class ListNode() {
  // ...
}

describe('addTwoNumbers', () => {
  test('case 1', () => {
    const l1 = new ListNode(/* ... */);
    const l2 = new ListNode(/* ... */);
    const result = addTwoNumbers(l1, l2);
    const expected = new ListNode(/* ... */);

    expect().toEqual(expected);
  });
});
```

### 模块化语法

与此同时，LeetCode 对模块化写法的支持有一定局限性，  
经粗略测试，必须采用某些写法。

（对 `import` 的语法支持我已经通过 `babel-jest` 配好了，开箱即用）

比如：

```js
// * ---------------- ESM

const addTwoNumbers = (l1, l2) => {};
export default solution;

// * ---------------- ESM

const addTwoNumbers = (l1, l2) => {};
export { solution };

// * ---------------- CJS

module.exports = addTwoNumbers = (l1, l2) => {};
```

而以下写法则会提交报错 `addTwoNumbers is not defined`：

```js
// * ---------------- ESM

export const addTwoNumbers = (str) => {};

// * ---------------- CJS

module.exports.addTwoNumbers = (str) => {};
```

根据个人喜好选择统一的风格即可。

为考虑到自动补全以及后续的扩展性，我个人推荐使用这种风格：

```js
const addTwoNumbers = (l1, l2) => {};
export { solution };
```

虽然可能显得麻烦和啰嗦一点，  
但总之，刷题的重点和难点在于算法本身不是吗？
