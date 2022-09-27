# backSystem

npm install

npm start

npm run build

npm run serve

## 提交代码前注意开发规范

1. if 和 function 后面不需要写分号，Form 后需要写。
2. If 语句中写 return，就不用写成 else 的形式了，避免嵌套。
一个 if 对应一个 return，return 掉的一般是异常情况。
3. 命名风格要统一
如 onClickResetButton、onClickDeleteRows、onClickAddButton、
onClickEditButton、onClickDeleteItem、
4. 注意接口字段容错
 const { userName = '', phoneNumber = '', email = '' } = 
 res?.data?.data ?? {};
5. .less 文件放到 import 的最下面，import type {} 后面
6. useMount 写到最后，方便看到
7. 可选项参数写成 interface
8. 多个参数写变量
9. 取可选项参数时用解构赋值，注意对象兼容
  const { a } = option || {}
10. 修改全局组件样式时，不要用 anticon 之类的公共样式，用 className
前端接口定义和后端定义一定要分开，service中定义后端字段，model 中定义前端字段
原因：1、前后端数据类型可能不一致，便于格式化
     2、防止后端字段数据错误，前端不受影响
11. 如果实在相同，可以定义如下
type QuestioningMange = HttpGetQuestioningMangeRes;
12. 前端定义的类型不要写在 service 文件中，前后端类型一致的枚举可以

13. 组件加注释。前端定义的 interface 也都要加注释，表明这个 interface 是做什么的
14. interface 定义的名称开头大写
15. 子组件的 onClick 事件写在子组件中，不要写在父组件中
16. 判断一个函数是否存在时，可以直接用 ?.
    如reload?.()       onClick?.()
17. map 渲染 UI 时，通过 document.getElementById 获取到的 dom 元素，id 一定要加 key，否则多个元素获取到的都是同一个 dom
18. visible 的弹框，visible && < />，组件每次销毁，走 onMount；
不要用 visible && < />，组件 onMount 一次，后面都走 update。
19. 组件要考虑无数据时的样式，以及要根据字段判断一下展示，不要单纯展示后端字段数据
20. 使用 ref 时，先考虑此时相应的 dom 存不存在
21. 考虑后端字段返回为 null 时的情况，不要直接用 data.  页面会直接报错红屏，使用data?.  ??
22. modal 可封装 onOpen、onClose。modal 中封装自定义的 onClose, 调用时，只清空组件数据，防止页面数据闪烁，在组件的close 中封装 closeModal, 调用 onClose和 props 的 close。
23. 引用样式时先看 utils 中有没有对应的样式
24. 嵌套对象过深时使用 use-immer
25. 有明确类型的选项都定义为枚举，如 tab、radio 选项
26. .then .catch 要换行对齐
27. await then 不要连用，用了 async await，就不要用 .then
28. useState 的空对象{}, 可以定义一个初始对象 const initialXxx = {a: 1, b: 2}
29. 如果多于一种样式，则可以考虑扩展，定义成一个 map
```js
  enum AnswerResult {
    'FALSE',
    'TRUE',
  };
  const xxxMap = { // 名称小驼峰或全大写
    [AnswerResult.TRUE]: { text: '正确’, className: xxx },
    [AnswerResult.FALSE]: { text: '错误', className: xxx },
  };
```
30. className 和标签写在一行
31. 换行后前一行最后不能有空格
32. { 和 ( 写在一行
33. classNames 中样式要对齐
34. UI中展示的变量括号中有空格，属性中的括号不用加空格
35. css样式中不要写 !important，直接用.的形式加个优先级即可
36. 接口请求 interface 命名，请求 HttpGetXxxReq, 返回 HttpGetXxxRes