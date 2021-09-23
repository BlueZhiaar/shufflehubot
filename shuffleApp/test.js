'use strict';
const shuffle = require('./index.js');
const assert = require('assert');
const fs = require('fs');
fs.unlink('./listsAndItems.json', err => {
//addlist,showlistのテスト
shuffle.addlist('サイコロ');
shuffle.addlist('献立');
shuffle.addlist('十八番');
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

//二つ目のリストにアイテムを追加のテスト
shuffle.selectlist('十八番');
console.log(shuffle.nowlist());
shuffle.additem('卵焼き');
shuffle.additem('カオマンガイ');
console.log(shuffle.showitem());
console.log(shuffle.ran());

console.log('テストは正常に完了しました');

})

/*
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

//savelistsのテスト

console.log('テストは正常に完了しました');
*/