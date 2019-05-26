import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import {calculate} from './parts/calc';
import {sizes} from './parts/sizes';
import {showAllModals} from './parts/modals';
import {moreBlocks} from './parts/moreBlocks';
import {mainSlider} from './parts/mainSlider';
import {feedbackSlider} from './parts/feedbackSlider';
import {accordeon} from './parts/accordeon';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    accordeon();
    calculate();
    sizes();
    showAllModals();
    moreBlocks();
    mainSlider();
    feedbackSlider();  
});