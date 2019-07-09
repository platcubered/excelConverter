module.exports = function (data, index) {
  let tmpData     = [];
  for(let i=0 ; i< 10; i++){
    tmpData[i] = data[index+(6+i)].v;
  }
  return tmpData;
}