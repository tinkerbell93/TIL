const PI = 3.14;
const getCircleArea = r => r * r * PI;

// module 키워드로 내보내기
// 다른 파일에서 PI, getCircleArea에 접근 할 수 있음
// module.exports = {
//   PI,
//   getCircleArea
// }

// exports 키워드로 내보내기
exports.PI = PI;
exports.getCircleArea = getCircleArea;