module.exports = function (data, alphIndex, length, offset) {
  let tmpData     = [];
  for(let i=0 ; i< length; i++){
    //만약에 객체에 멤버가 존재하면(엑셀값이 존재하면)실행
    if(data[alphIndex+(offset+i)]){
      tmpData[i] = data[alphIndex+(offset+i)].v;  
    }
    else{// 아니면 0을 대입
      tmpData[i] = 0;
    }
  }
  return tmpData;
}