import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import {present} from './parts/present';
import {calculate} from './parts/calc';
import {consult} from './parts/consult';
import {order} from './parts/order';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    present();
    calculate();
    consult();
    order();
});