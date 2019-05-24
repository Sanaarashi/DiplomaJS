import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import {present} from './parts/present';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    present();
});