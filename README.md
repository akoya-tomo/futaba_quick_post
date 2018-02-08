## futaba quick post
このUserscriptはふたば☆ちゃんねるのレス送信モードでshift+enterキーを押すとレスを送信することができます。

Firefoxの場合、[Tampermonkey](https://addons.mozilla.org/ja/firefox/addon/tampermonkey/)を先にインスールしてからスクリプトをインストールして下さい。  
(GreasemonkeyやViolentmonkeyでの動作は未確認です)  
Chromeの場合、[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo/)を先にインスールしてからスクリプトをインストールして下さい。  

※その他のUserscriptとKOSHIANアドオン改変版は[こちら](https://github.com/akoya-tomo/futaba_auto_reloader_K/wiki/)の一覧からどうぞ

## 使い方
* レス送信モード画面でコメント記入後にshift+enterキーを押してください。レスが送信されます。
* 返信フォーム内（コメント・メール欄・添付ファイルetc）にフォーカスされているときのみshift+enterキーで送信できます。

## インストール
[GreasyFork](https://greasyfork.org/ja/scripts/38262-futaba-quick-post/)　
[GitHub](https://github.com/akoya-tomo/futaba_quick_post/raw/master/futaba_quick_post.user.js)

## 注意事項
* shift+enterキーを押すと確認無しで送信するので誤操作にご注意ください。

## 既知の問題
* shift+enterキーで返信直後に他のタブがアクティブになることがある。
  - 返信自体は成功しています。現在、原因を調査中です。

## 更新履歴
* v1.0.2 2018-02-09
  - 返信ボタンクリック方法変更
* v1.0.0 2018-02-08
  - 新規リリース
