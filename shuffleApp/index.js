'use strict';
let listsMap = new Map();
let activeListName;
const fs = require('fs');
const fileName = './listsAndItems.json';
//listMap = {サイコロ: [1,2,3,4,5,6] , 献立:['卵焼き','親子丼']}

//listsMap['サイコロ'] = [1,2,3,4,5,6];
//listsMap['献立'] = ['卵焼き','親子丼'];

//同期的にファイルから復元
try {
    const data = fs.readFileSync(fileName, 'utf8');
    listsMap = new Map(JSON.parse(data));
} catch(ignore) {
    console.log(fileName + 'から復元できませんでした')
}


/**
 * タスクをファイルに保存する 
 */

function saveListsAndItems() {
    fs.writeFileSync(fileName, JSON.stringify(Array.from(listsMap.entries())), 'utf8');
}




/**
 * リスト名の追加
 * @param {string} リスト名
 */
function addlist(listname){
    listsMap.set(listname,[]);
    saveListsAndItems();
}

/**
 * リスト名一覧の取得
 * @return {array} リスト名
 */
function showlist(){
    return Array.from(listsMap.keys());
}

/**
 * リスト名から、そのリスト名が存在しているかを判定する
 * @param {string} リスト名
 * @return {boolean}
 */
function isListExist(listname) {
    return listsMap.has(listname);
}

/**
 * リスト名が存在したときだけそのリスト名を返す
 * @param {string} リスト名
 * @return {string} リスト名
 */
function selectlist(listname){
    if(isListExist(listname)) {
        activeListName = listname;
        return activeListName;
    }else{
        return 'そのリストは存在しません。'
    }
}
/**
 * 現在選択中のリスト名を表示する
 * @return {string} リスト名 
 */
function nowlist(){
    if(activeListName){
        return activeListName;
    } else {
        return '現在リストは選択されていません';
    }
}

/**
 * リストを削除する
 * @param {string} リスト名
 */
function dellist(listname){
    listsMap.delete(listname);

    saveListsAndItems();
}



/**
 * 設定中のリストのアイテムを追加する
 * @param {string} アイテム名
 * 
 */
function additem(itemname){
    listsMap.get(activeListName).push(itemname);

    saveListsAndItems();
}

/**
 * 設定中のリスト内のアイテムの一覧を取得する
 * @return {array} アイテム名
 */
function showitem(){
    return listsMap.get(activeListName);
}

/**
 * 設定中のリスト内のアイテムを削除する
 * @param {string} アイテム名
 * 
 */
function delitem(itemname){
    let result;
    result = listsMap.get(activeListName).filter(item => item !== itemname);
    listsMap.set(activeListName,result);
    
    saveListsAndItems();
}

/**
 * 設定中のリスト内のアイテムからランダムに１つ返す
 * @return {string} アイテム名 
 */
function ran(){
    let result;
    let num;
    num = Math.floor(Math.random() * listsMap.get(activeListName).length);
    result = listsMap.get(activeListName)[num];
    return result;
}

/**
 *アイテム名からすでにあるかを判定する
 * @param {string} アイテム名
 * @returns {boolean}
 */
function isItemExist(itemname){
    return listsMap.get(activeListName).includes(itemname);
}

/**
 * ヘルプを返す
 * @return {string} help
 */
function returnHelp(){
   return 'あらゆるリストをシャッフルできるボットです。\n' + 
   'ボット名 hp -操作説明を表示\n' + 
   'ボット名 addlist リスト名      - リストを作成　\n' + 
   'ボット名 selectlist リスト名    - 作成済みのリストを選択\n' + 
   'ボット名 dellist リスト名      - リストを消す\n' + 
   'ボット名 showlist     - リスト の一覧表示 \n' + 
   'ボット名 nowlist - 現在選択中のリスト\n' + 
   'ボット名 additem アイテム名-現在選択中のリストにアイテムを追加する\n' + 
   'ボット名 delitem アイテム名-アイテムを削除する\n' + 
   'ボット名 ran -リスト内のアイテムをランダムに表示する\n' + 
   'ボット名 showitem -リストの中のアイテム一覧を表示する';
}


/*

addlist('サイコロ');
addlist('献立')
console.log(listsMap.entries().next().value[0]);
//output サイコロ
console.log(listsMap.entries().next().value);
//output [ 'サイコロ', [] ]


addlist('サイコロ');
addlist('献立');
addlist('十八番');
console.log(listsMap.entries());
console.log(iterator.next().value);
console.log(iterator.next().value);
*/


module.exports = {
   addlist,
   dellist,
   showlist,
   selectlist,
   additem,
   showitem,
   delitem,
   ran,
   nowlist,
   returnHelp,
   isListExist,
   isItemExist
};