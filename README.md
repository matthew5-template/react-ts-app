### redux-saga-easy TODO

1. 目前 saga 和 reducer 中不能用匿名函数
2. 如果想使用匿名函数需要改变目前 createSaga createReducer 结构如 `src/redux/saga/contacts.ts`中的 TODO 代码如果改变结构如何保证 ts 的 type 类型
3. 打包后保留 method.name
