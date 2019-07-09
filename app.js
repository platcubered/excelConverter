const xlsx = require('xlsx');
const fs = require('fs');
const getDataArr = require('./libs/getDataArr.js');
const num2Alph = require('./libs/numberToAph.js')

let jsonData = {
  mainBoom : 0,
  extBoom  : 0,
  adapter  : 0,
  fix      : 0,
  angle    : 0,
  data     : [],
  distance : [],
};
let jsonDataArr = [];

let workbook = xlsx.readFile("./LTM_1500-9.1.xlsx");
let worksheet = workbook.Sheets["TY3F_165t_TAB221597"];
let result = JSON.stringify(worksheet);

fs.writeFileSync('./test2.json', result);
const data = require('./test2.json');
//data = JSON.parse(predata);
// jsonData.mainBoom = data.B1.v;
//   jsonData.extBoom  = data.B2.v;
//   jsonData.adapter  = data.B3.v;
//   jsonData.fix      = data.B4.v;
//   jsonData.angle    = data.B5.v;
//   jsonData.data     = getDataArr(data, 'B', 45, 5); 
//   jsonData.distance = getDataArr(data, 'A', 45, 5);
// for(let i=0 ; i<10  ; i++){
//   console.log(num2Alph(i));
// }
let test = function(data, cb){
  for(let i=1 ; i<25 ; i++ ){
    charIndex = num2Alph(i);
    jsonData.mainBoom = data[charIndex + 1].v;
    jsonData.extBoom  = data[charIndex + 2].v;
    jsonData.adapter  = data[charIndex + 3].v;
    jsonData.fix      = data[charIndex + 4].v;
    jsonData.angle    = data[charIndex + 5].v;
    jsonData.data     = getDataArr(data, charIndex, 45, 5); 
    jsonData.distance = getDataArr(data, 'A', 45, 5);
    jsonDataArr[i-1] = jsonData;   
  }
  cb(jsonDataArr);
}
test(data, function(d){
  let re = JSON.stringify(d);
  fs.writeFileSync('./LastData.json', re);
})


// console.log(JSON.stringify(jsonData));


  