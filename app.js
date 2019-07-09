const xlsx = require('xlsx');
const fs = require('fs');
const getDataArr = function (data, index) {
  let tmpData     = [];
  for(let i=0 ; i< 10; i++){
    tmpData[i] = data[index+(6+i)].v;
  }
  return tmpData;
}

let jsonData = {
  mainBoom : 0,
  extBoom  : 0,
  adapter  : 0,
  fix      : 0,
  angle    : 0,
  data     : [],
  distance : [],
};

let workbook = xlsx.readFile("./LTM_1500-9.1.xlsx");
let worksheet = workbook.Sheets["TY3F_165t_TAB221597"];
let result = JSON.stringify(worksheet);

fs.writeFileSync('./test2.json', result);
const data = require('./test2.json');
//data = JSON.parse(predata);

jsonData.mainBoom = data.B1.v;
jsonData.extBoom  = data.B2.v;
jsonData.adapter  = data.B3.v;
jsonData.fix      = data.B4.v;
jsonData.angle    = data.B5.v;
jsonData.data     = getDataArr(data, 'B'); 
jsonData.distance     = getDataArr(data, 'A');
console.log(JSON.stringify(jsonData));