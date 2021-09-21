'use strict';
let listsMap = new Map();
let activeListName;
//listMap = {サイコロ: [1,2,3,4,5,6] , 献立:['卵焼き','親子丼']}

//listsMap['サイコロ'] = [1,2,3,4,5,6];
//listsMap['献立'] = ['卵焼き','親子丼'];

/**
 * リスト名の追加
 * @param {string} リスト名
 */
function addlist(listname){
    activeListName = listname;
    listsMap.set(listname,[]);
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
}



/**
 * 設定中のリストのアイテムを追加する
 * @param {string} アイテム名
 * 
 */
function additem(itemname){
    listsMap.get(activeListName).push(itemname);
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


module.exports = {
   addlist,
   dellist,
   showlist,
   selectlist,
   additem,
   showitem,
   delitem,
   ran,
   nowlist
};