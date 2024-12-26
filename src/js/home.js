import { addStickyScrollListener } from "./module/topFv";
addStickyScrollListener('fixLetters', 'js-homeScroll', 'js-aboutHight');

import { setupDrawer, resetDrawerOnResize } from "./module/drawer";
setupDrawer();
resetDrawerOnResize();
