import { curry } from 'ramda'

import { fetchData, fetchJSON } from './fetch'

export const Impure = {
    getJSON: curry((callback, options, url) => fetchJSON({
        url: url, 
        cb: callback,
        options
    })),
    getData: curry((callback, options, url) => fetchData({
        url: url, 
        cb: callback,
        options
    })),
    trace: curry((tag, x) => { console.log(tag, x); return x; }),
};

export const map = curry((fn, f) => f.map(fn));