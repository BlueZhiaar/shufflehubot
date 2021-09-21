'use strict';
const shuffle = require('./index.js');
const assert = require('assert');

//addlist,showlistのテスト
shuffle.addlist('サイコロ');
shuffle.addlist('献立');
console.log(shuffle.showlist());

//dellistのテスト
shuffle.dellist('献立');
console.log(shuffle.showlist());
//selectlistのテスト
console.log(shuffle.selectlist('サイコロ'));
console.log(shuffle.selectlist('ダミー'));

//additem、showitemのテスト
shuffle.selectlist('サイコロ');
shuffle.additem(555);
shuffle.additem(222);
shuffle.additem(111);
shuffle.additem(2);
console.log(shuffle.showitem());

//delitemのテスト
shuffle.delitem(222);
console.log(shuffle.showitem());

//nowlistのテスト
console.log(shuffle.nowlist());

//ranのテスト
console.log(shuffle.ran());

console.log('テストは正常に完了しました');