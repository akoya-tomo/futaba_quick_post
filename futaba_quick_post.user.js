// ==UserScript==
// @name           futaba quick post
// @namespace      https://github.com/akoya-tomo
// @description    shift+enterキーでレス送信
// @author         akoya_tomo
// @include        http://*.2chan.net/*/res/*
// @include        https://*.2chan.net/*/res/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js
// @version        1.0.0
// @grant          none
// @license        MIT
// ==/UserScript==
this.$ = this.jQuery = jQuery.noConflict(true);

(function ($) {
	/*
	 *	設定
	 */
	var enterKey = "13";		//Enterキーのキーコード
	var isWindowActive = true;	// タブのアクティブ状態
	var isFormForcus = false;	// フォームのフォーカス状態

	init();

	function init() {
		setWindowFocusEvent();
		setFormFocusEvent();
		setKeydownEvent();
	}

	// タブのアクティブ状態を取得
	function setWindowFocusEvent() {
		$(window).focus();
		$(window).bind("focus", function() {
			// タブアクティブ時
			isWindowActive = true;
		}).bind("blur", function() {
			// タブ非アクティブ時
			isWindowActive = false;
		});
	}

	// フォームのフォーカス状態を取得
	function setFormFocusEvent() {
		$("#ftbl").focusin(function() {
			// フォームフォーカス時
			isFormFocus = true;
		}).focusout(function() {
			// フォーム非フォーカス時
			isFormFocus = false;
		});
	}

	//フォーム返信ショートカットキー
	function setKeydownEvent() {
		window.addEventListener("keydown",function(e) {
			if (e.shiftKey && e.keyCode == enterKey && isWindowActive && isFormFocus) {
				e.preventDefault();
				clickSubmitButton();
			}
		}, false);
	}

	/*
	 * フォームの［返信する］ボタンをクリック
	 */
	function clickSubmitButton() {
		var submitButton = $("#ftbl input[value='返信する']");	//フォームの［返信する］ボタン取得
		if (submitButton.length) {
			var e = document.createEvent("MouseEvents");
			e.initEvent("click", false, true);
			submitButton.get(0).dispatchEvent(e);
		}
	}

})(jQuery);