'use strict';



//async는 다운먼저 받은 순서부터 출력
//defer는 작성 순서대로 출력
//number
const infinity = 1 / 0;
const negativeinfinity = -1 / 0;
const nAn = 'not a number' / 2;

//string백틱사용시 뛰어쓰기 문자열 그대로
const helloBob = (`value: ${helloBob} type: ${typeof helloBob}`);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value

//null은 텅텅, undefined은 미지정

//symbol differtnt obj
const symbol1 = symbol('id');
const symbol2 = symbol('id');
//symbol same obj by for
const gsymbol1 = symbol.for('id');
const gsymbol2 = symbol.for('id');
//symbol은 바로 표현이 안되므로 description으로변환 필요
console.log(`value: ${symbol1.description}`)


//dynamic typing 
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
