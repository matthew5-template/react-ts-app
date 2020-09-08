### redux-saga-easy TODO

1. 目前saga和reducer中不能用匿名函数
2. 如果想使用匿名函数需要改变目前createSaga createReducer结构如 `src/redux/saga/contacts.ts`中的TODO代码
   如果改变结构如何保证ts的type类型