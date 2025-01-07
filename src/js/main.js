//TOPページのアニメーション
import { addStickyScrollListener } from "./module/topFv";
if (window.location.pathname === '/') {
addStickyScrollListener('fixLetters', 'js-homeScroll', 'js-aboutHight');
}
//ドロワーメニューの動き
import { setupDrawer, resetDrawerOnResize } from "./module/drawer";
setupDrawer();
resetDrawerOnResize();

//送信完了ページのページ遷移
import { toTopback } from './module/thanks';
toTopback();

//ENVIRONMENTページのアニメーション
import { shuffleNumberCounter } from './module/countup';

const targets = document.querySelectorAll('.number');
targets.forEach(target => {
    shuffleNumberCounter(target);
});

//入力フォーム：２０００文字のテキストカウント
import {countTxt} from "./module/textcount";
countTxt();

//入力フォームの同意するボタンの規制
import {setupAgreeCheckboxListener} from "./module/agree";
setupAgreeCheckboxListener();

//各フォームの乳力確認事項
import { initializeValidation } from './module/confirm';
initializeValidation();