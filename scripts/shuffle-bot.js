// Description:
//   あらゆるリストをシャッフルできるボットです
// Commands:
//   ボット名 addlist リスト名      - リストを作成
//   ボット名 selectlist     - 作成済みのリストを選択
//   ボット名 dellist リスト名      - リストを消す
//   ボット名 showlist     - リスト の一覧表示
//   ボット名 nowlist - 現在選択中のリスト
//　　ボット名 additem アイテム名-現在選択中のリストにアイテムを追加する
//　　ボット名 delitem アイテム名-アイテムを削除する
//　　ボット名 ran -リスト内のアイテムをランダムに表示する
//　　ボット名 showitem -リストの中のアイテム一覧を表示する

'use strict';
const shuffle = require('shuffleApp');
const { selectlist } = require('../shuffleApp');

module.exports = robot => {
    robot.respond(/addlist (.+)/i, msg => {
        const list = msg.match[1].trim();
        shuffle.addlist(list);
        msg.send(`リストを追加しました: ${list}`);
    });
    robot.respond(/showlist/i, msg => {
        msg.send(`現在のリスト一覧: ` + shuffle.showlist());
    });
    robot.respond(/selectlist (.+)/i, msg => {
        const list = msg.match[1].trim();
        shuffle.selectlist(list);
        if(selectlist(list) === list){
        msg.send(`${list}リストを選択しました。`);
        } else {
            msg.send(selectlist(list));
        };
    });
    robot.respond(/nowlist/i, msg => {
        msg.send(`現在選択中のリスト: ${shuffle.nowlist()}`);
    });
    robot.respond(/additem (.+)/i, msg => {
        const item = msg.match[1].trim();
        shuffle.additem(item);
        msg.send(`アイテムを追加しました: ${item}`);
    });
    robot.respond(/delitem (.+)/i, msg => {
        const item = msg.match[1].trim();
        shuffle.delitem(item);
        msg.send(`アイテムを削除しました: ${item}`);
    });
    robot.respond(/showitem/i, msg => {
        msg.send(`現在選択中のリスト内のアイテム: ${shuffle.showitem()}`);
    })
    robot.respond(/ran/i, msg => {
        msg.send(shuffle.ran());
    });
    robot.respond(/dellist (.+)/i, msg => {
        const list = msg.match[1].trim();
        shuffle.dellist(list);
        msg.send(`${list}リストを削除しました`);
    })
};