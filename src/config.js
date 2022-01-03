

export const numSelectedImages = 10

export class LocalRoutes {
    static home = "/"
    //static about = `${LocalRoutes.home}/about`
    static about = "/about"
    static images = "/images"
    static imageObjects = "/image-objects"
    static text = "/text"
}

export class RemoteAPI {
    static flickrAPIKey = process.env.REACT_APP_FLICKRAPIKEY
    
    // static flickrGetRecentAPI = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent'
    static flickrSearchAPI = 'https://api.flickr.com/services/rest/?method=flickr.photos.search'
    static flickrPhotoServer = 'https://live.staticflickr.com/'
    
    static nlpCloudAPIToken = process.env.REACT_APP_NLPCLOUDAPITOKEN
    static nlpGeneration = 'https://api.nlpcloud.io/v1/gpt-j/generation'

    static openAPIKey = process.env.REACT_APP_OPENAPIKEY
    static openAPIGeneration = 'https://api.openai.com/v1/engines/davinci/completions'
    /* Input
    curl "https://api.nlpcloud.io/v1/<model_name>/generation" \
    -H "Authorization: Token <token>" \
    -H "Content-Type: application/json" \
    -X POST -d '{
        "text":"GPT-J is a powerful NLP model",
        "min_length":10,
        "max_length":50
    }'

    Output
    {
        "generated_text":"GPT-J is a powerful NLP model for text generation. 
        This is the open-source version of GPT-3 by OpenAI. It is the most 
        advanced NLP model created as of today.",
        "nb_generated_tokens": 33
    }
    */

}

export class FlickrAPI {
    static numPages = 100
    static tags = "flowers,trees,river,dog,food,landscape,garden,people,street,park,city,bird,nature,sea,family,house,car,cat,beach,lake"
}

export class OpenAPI {
    static temperature = 0.9
    static maxTokens = 1024
}

export class UIText {
    static appTabTitle = "storymaker"
    static appTitle = 'storyMaker>'
    static appCatchphrase = 'ai-based text generation'
    static poweredBy = 'powered by flickr, TensorFlow and OpenAI'
    static appTitleHome = "home"
    static appTitleAbout = "about"
    static appTitleImages = "images"
    static appTitleImageObjects = "image objects"
    static appTitleText = "text"

    static appTextHome = ''
    static appTextAbout = 'this is an ai-based app that uses ai image classification to find image obejcts, then uses ai text generation to generate text from one of those objects' 
    static appTextImages = 'please wait - finding images'
    static appTextImageObjects = 'please wait - generating image objects'
    static appTextFoundObjects = 'found objects'
    static appTextText = 'please wait - generating text for '

    static appLandingButtonText = 'go...'

    static linkHome = "home"
    static linkAbout = "about"
    static linkImages = "get images"
    static linkImageObjects = "images objects"
    static linkText = "text"

    static buttonSubmit = "submit"
    static buttonClear = "clear"
    static buttonInit = "init"
}

