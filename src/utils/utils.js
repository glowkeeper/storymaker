import { curry } from 'ramda'

export const map = curry((f, xs) => xs.map(f));