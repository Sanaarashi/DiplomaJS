import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import {calculate} from './parts/calc';
import {sizes} from './parts/sizes';
import {showAllModals} from './parts/modals';
import {moreBlocks} from './parts/moreBlocks';
import {mainSlider} from './parts/mainSlider';
import {feedbackSlider} from './parts/feedbackSlider';
import {accordeon} from './parts/accordeon';
import {filterBlock} from './parts/filter';
import {hamburger} from './parts/burger';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    accordeon();
    calculate();
    filterBlock();
    sizes();
    showAllModals();
    moreBlocks();
    mainSlider();
    feedbackSlider();
    hamburger();  
});