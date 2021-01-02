// 1. 원의 넓이를 구하는 공식
// 2. PI정의
// 3. 공식을 통해 결과 얻기

// module 가져오기: CommonJS
// const { getCircleArea } = require('./mathUtil');

// module 가져오기: ESM
import { getCircleArea } from './mathUtil';

const result = getCircleArea(2);
console.log(result);