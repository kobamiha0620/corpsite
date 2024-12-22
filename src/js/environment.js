import { setupDrawer } from "./module/drawer";
setupDrawer();

import { shuffleNumberCounter } from './module/countup.js';

const targets = document.querySelectorAll('.number');
targets.forEach(target => {
    shuffleNumberCounter(target);
});