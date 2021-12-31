import { compose, prop } from 'ramda'

import { StoreActions } from '../store'

import { IO } from '../../utils/iO'

export const getStory = async (dispatch, predictions) => {

    const get = async (url) => {

        IO.getJSON( async (response) => {
            //blah
        }, null, url)
    }    
}