import { setupDrawer, resetDrawerOnResize } from "./module/drawer";
setupDrawer();
resetDrawerOnResize();

import { shuffleNumberCounter } from './module/countup.js';

const targets = document.querySelectorAll('.number');
targets.forEach(target => {
    shuffleNumberCounter(target);
});