export class LocalRoutes {
    static home = '/storymaker'
    static about = `${LocalRoutes.home}/about`
    static app = `${LocalRoutes.home}/maker`
    static freestyle = `${LocalRoutes.app}/freestyle`
    static images = `${LocalRoutes.app}/images`
    static imageObjects = `${LocalRoutes.app}/image-objects`
    static news = `${LocalRoutes.app}/news`
    static newsHeadlines = `${LocalRoutes.app}/news-headlines`
    static genre = `${LocalRoutes.app}/genre`
    static text = `${LocalRoutes.app}/text`
}

//const response = await fetch(`${Flickr.flickrSearchAPI}&api_key=${flickrKey}&tags="${Flickr.tags}"&page=${page}&format=json&nojsoncallback=1&safe_search=1&content_type=1`)
                

export class Remote {
    static nYTTopStoriesAPI = 'https://api.nytimes.com/svc/topstories/v2'

    static openRouterAPI = 'https://openrouter.ai/api/v1/chat/completions'

    static flickrSearchAPI = 'https://api.flickr.com/services/rest/?method=flickr.photos.search'
    static flickrPhotoServer = 'https://live.staticflickr.com/'
}

export class OpenRouter {

    //static model = 'deepseek/deepseek-chat-v3-0324:free'
    //static model = 'deepseek/deepseek-chat-v3.1:free'
    static model = 'openrouter/auto'
}
export class Flickr {
    static numPages = 100
    static tags = "flowers,trees,river,dog,food,landscape,garden,people,street,park,city,bird,nature,sea,family,house,car,cat,beach,lake"
}

export const storymakerRole = '16953d36-f667-4572-bfdf-210e5e72685c'

export class RemoteErrors {
    static userError = {
        tokenExpired: 'Token expired.'
    }
}

export class System {
    static numSelectedImages = 10
}

export class NYT {
    static nYTTopStoriesAPI = 'http://api.nytimes.com/svc/topstories/v2'
    static newsTopics = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "magazine", "movies", "politics", "science", "sports", "technology", "theater", "travel", "world"]
}

export class Genres {
   
    static genres = ["Action", "Adventure", "Autobiography", "Biography", "Comedy", "Drama", "Essay", "Fable", "Fantasy", "Fiction in Verse", "Folklore", "Historical fiction", "Horror", "Legend", "Magical realism", "Memoir", "Mystery", "Narrative nonfiction", "Poetry", "Religion", "Romantic fiction", "Science fiction", "Self-help", "Short story", "Speech", "Tall Tale", "Thriller", "Tragedy", "Travel", "True crime", "Western", "Young adult fiction"]
}

export class Prompts {
    static imageSystemPrompt = "Acting as a short story writer, create a story from the objects listed at the end of this message."
    static moreSystemPrompt = "Acting as a short story writer, create the follow on from the text following this: "
    static newsSystemPrompt = "Acting as a blogger, create a blog based on the headline that follows: "
    static freestyleSystemPrompt = " Acting as a short story writer, create a story from the text following the genre of the story to write."
}

export class UIText {
    static appTabTitle = "storymaker"
    static appTitle = 'storymaker'
    static appCopyright = '&copy; 2022 <a href="https://huckle.studio/">Dr Steve Huckle</a>'
    static appCatchphrase = 'ai-based story generation'
    static poweredBy = 'powered by'
    static appTitleHome = "home"
    static appTitleCreate = "create"
    static appTitleAbout = "about"
    static appTitleFreestyle = "freestyle"
    static appTitleImages = `${UIText.appTitle} | images`
    static appTitleImageObjects = `${UIText.appTitle} | classification`
    static appTitleNews = `${UIText.appTitle} | news topics`
    static appTitleNewsHeadlines = `${UIText.appTitle} | news headlines`
    static appTitleGenre = `${UIText.appTitle} | genre`
    static appTitleText = `${UIText.appTitle} | text`

    static appTextHome = ''
    static appTextAbout = 'uses AI, news headlines and image classification to generate text.'
    static appTextImages = 'please wait - finding images'
    static appTextImageObjects = 'please wait - classifying images'
    static appTextHeadlines = 'please wait - getting headlines'
    static appTextFoundObjects = 'classifying'
    static appTextFoundHeadlines = 'found headlines'
    static appTextText = 'please wait - generating story'

    static appLandingButtonText = 'create stories'
    static appFreestyleButtonText = 'freestyle'
    static appImagesButtonText = "choose 10 images"
    static appNewsButtonText = "pick a news story"
    static appNewButtonText = "get new"
    static appMoreButtonText = "get more"
    static appResetButtonText = "reset"
    static appRemoveLastButtonText = "remove last"
    static appSaveButtonText = "save text"
    static appTopicText = 'select a topic'
    static appGenerateStory = 'pick a way of generating a story or a blog'

    
    static userPrompt = 'story synopsis'
    static userPromptError = 'user prompt is required'

    static linkHome = "home"
    static linkStoryMaker = "maker"
    static linkCreate = "create"
    static linkAbout = "about"
    static linkSettings = "settings"
    static linkLogout = "logout"
    static linkImages = "get images"
    static linkImageObjects = "images objects"
    static linkText = "text"

    static newsTopics = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "magazine", "movies", "politics", "science", "sports", "technology", "theater", "travel", "world"]

    static buttonSubmit = "submit"
    static buttonClear = "clear"
    static buttonInit = "init"
}

