module.exports = function getZerosCount(number) {
  // your implementation
  let zerosCount = 0;
  for (let i = 5; number / i >= 1; i *= 5) {
    zerosCount += Math.floor(number / i);
  }
  // console.log(zerosCount);
  return zerosCount;
}