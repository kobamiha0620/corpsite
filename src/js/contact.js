import { setupDrawer, resetDrawerOnResize } from "./module/drawer";
setupDrawer();
resetDrawerOnResize();

import {countTxt} from "./module/textcount";
countTxt();

import {setupAgreeCheckboxListener} from "./module/agree";
setupAgreeCheckboxListener();

import { initializeValidation } from './module/confirm.js';
initializeValidation();