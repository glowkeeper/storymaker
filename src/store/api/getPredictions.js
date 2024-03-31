import { compose, prop } from 'ramda'

import "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

import { StoreActions } from '../store'

import { IO } from '../../utils/iO'

export const getPredictions = async (store, imageURLs) => {

    const model = await cocoSsd.load()

    const getPrediction = async (url) => {

        const getURLData = compose(prop('large'))
        const dataURL = getURLData(url)
        if ( dataURL ) { 

            const getURLKey = compose(prop('cropped'))
            const keyURL = getURLKey(url)

            IO.getJSON( async (response) => {

                const blob = await response.blob();
                const reader = new FileReader();
                reader.readAsDataURL(blob); 
                reader.onloadend = async () => {
                    const base64data = reader.result;   
                    const img = new Image();
                    img.src = base64data
                    img.onload = async () => {
                        const width = img.width
                        const height = img.height
                        img.height = height
                        img.width = width                
                        const predictions = await model.detect(img);  
                        // console.log('Predictions: ', predictions); 
                        const thisPredictions = []
                        predictions.forEach(prediction => {
                           const thisClass = prop('class', prediction);                            
                           thisPredictions.push(thisClass)
                        })
                        // console.log('my preasdfsad', thisPredictions)
                        const myClassData = {
                            id: keyURL,
                            cropped: keyURL,
                            large: dataURL,
                            predictions: [...new Set(thisPredictions)]
                        }
                        store.dispatch({ 
                            type: StoreActions.imageObjectsUpdate,
                            payload: myClassData
                        });
                    }
                }
            }, null, dataURL, store)

        }
    }

    Object.values(imageURLs).forEach( url => {
        getPrediction(url)
    })
}