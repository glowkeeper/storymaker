export class LocalRoutes {
    static home = "/storymaker"
    static about = `${LocalRoutes.home}/about`
    static settings = `${LocalRoutes.home}/settings`
    static images = `${LocalRoutes.home}/images`
    static imageObjects = `${LocalRoutes.home}/image-objects`
    static news = `${LocalRoutes.home}/news`
    static newsHeadlines = `${LocalRoutes.home}/news-headlines`
    static text = `${LocalRoutes.home}/text`
}

export class RemoteAPI {
    // static flickrGetRecentAPI = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent'
    static flickrSearchAPI = 'https://api.flickr.com/services/rest/?method=flickr.photos.search'
    static flickrPhotoServer = 'https://live.staticflickr.com/'

    static nYTTopStoriesAPI = 'http://api.nytimes.com/svc/topstories/v2'
    
    static nlpGeneration = 'https://api.nlpcloud.io/v1/gpt-j/generation'

    //static openAIGeneration = 'https://api.openai.com/v1/engines/davinci/completions'
    static openAIGeneration = 'https://api.openai.com/v1/completions'


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
    static maxTokens = 2048
    static model = "text-davinci-003"
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
    static appTitleNews = "news topics"
    static appTitleNewsHeadlines = "news headlines"
    static appTitleText = "text"

    static appTextHome = ''
    static appTextAbout = 'is an ai-based app that uses news stories and ai image classification to find image objects, then uses ai text generation to generate text from those stories or one of those image objects.'
    static appTextImages = 'please wait - finding images'
    static appTextImageObjects = 'please wait - classifying images'
    static appTextHeadlines = 'please wait - getting headlines'
    static appTextFoundObjects = 'found objects'
    static appTextFoundHeadlines = 'found headlines'
    static appTextText = 'please wait - generating text'

    static appLandingButtonText = 'create a story...'
    static appImagesButtonText = "choose 10 images"
    static appNewsButtonText = "pick a news story"
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

    static newsTopics = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "magazine", "movies", "politics", "science", "sports", "technology", "theater", "travel", "world"]

    static inputFlickrKey = "Flickr API Key"
    static inputOpenAIKey = "OpenAI API Key"
    static inputNYTKey = "NYT API Key"
    static inputNLPToken = "NLP Cloud Token"

    static buttonSubmit = "submit"
    static buttonClear = "clear"
    static buttonInit = "init"
}

