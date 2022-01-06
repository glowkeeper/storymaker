export class LocalRoutes {
    static home = "/"
    static about = "/about"
    static settings = "/settings"
    static images = "/images"
    static imageObjects = "/image-objects"
    static text = "/text"
}

export class RemoteAPI {
    // static flickrGetRecentAPI = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent'
    static flickrSearchAPI = 'https://api.flickr.com/services/rest/?method=flickr.photos.search'
    static flickrPhotoServer = 'https://live.staticflickr.com/'
    
    static nlpGeneration = 'https://api.nlpcloud.io/v1/gpt-j/generation'

    static openAIGeneration = 'https://api.openai.com/v1/engines/davinci/completions'
}

export class System {
    static numSelectedImages = 10
}

export class FlickrAPI {
    static numPages = 100
    static tags = "flowers,trees,river,dog,food,landscape,garden,people,street,park,city,bird,nature,sea,family,house,car,cat,beach,lake"
}

export class OpenAI {
    static temperature = 0.9
    static maxTokens = 1024
}

export class UIText {
    static appTabTitle = "storymaker"
    static appTitle = 'storymaker'
    static appCopyright = "2021, Dr Steve Huckle"
    static appCatchphrase = 'ai-based text generation'
    static poweredBy = 'powered by'
    static appTitleHome = "home"
    static appTitleAbout = "about"
    static appTitleSettings = "settings"
    static appTitleImages = "images"
    static appTitleImageObjects = "classification"
    static appTitleText = "text"

    static appTextHome = ''
    static appTextAbout = 'is an ai-based app that uses ai image classification to find image objects, then uses ai text generation to generate text from one of those objects.'
    static appTextImages = 'please wait - finding images'
    static appTextImageObjects = 'please wait - classifying images'
    static appTextFoundObjects = 'found objects'
    static appTextText = 'please wait - generating text for '

    static appLandingButtonText = 'go...'
    static appImagesButtonText = "choose 10 images..."
    static appNewButtonText = "get new..."
    static appMoreButtonText = "get more..."
    static appResetButtonText = "reset"
    static appRemoveLastButtonText = "remove last"
    static appSaveButtonText = "save text"

    static linkHome = "home"
    static linkAbout = "about"
    static linkSettings = "settings"
    static linkImages = "get images"
    static linkImageObjects = "images objects"
    static linkText = "text"

    static inputFlickrKey = "Flickr API Key"
    static inputOpenAIKey = "Open AI Key"
    static inputNLPToken = "NLP Cloud Token"

    static buttonSubmit = "submit"
    static buttonClear = "clear"
    static buttonInit = "init"
}

