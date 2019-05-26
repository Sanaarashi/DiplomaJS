import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import {calculate} from './parts/calc';
import {sizes} from './parts/sizes';
import {showAllModals} from './parts/modals';
import {moreBlocks} from './parts/moreBlocks';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    calculate();
    sizes();
    showAllModals();
    moreBlocks();
});