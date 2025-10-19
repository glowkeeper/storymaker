export class LocalRoutes {
    static home = '/storymaker'
    static login = `${LocalRoutes.home}/login`
    static app = `${LocalRoutes.home}/maker`
    static freestyle = `${LocalRoutes.app}/freestyle`
    static images = `${LocalRoutes.app}/images`
    static imageObjects = `${LocalRoutes.app}/image-objects`
    static news = `${LocalRoutes.app}/news`
    static newsHeadlines = `${LocalRoutes.app}/news-headlines`
    static genre = `${LocalRoutes.app}/genre`
    static text = `${LocalRoutes.app}/text`
}

export class Remote {
    static login = '/auth/login'
    static logout = '/auth/logout'
    static flickr = '/storymaker/flickr'
    static openai = '/storymaker/openai'
    static nyt = '/storymaker/nyt'

    static flickrPhotoServer = 'https://live.staticflickr.com/'
}

export class RemoteErrors {
    static userError = {
        tokenExpired: 'Token expired.'
    }
}

export class System {
    static numSelectedImages = 10
}

export class NYT {
    static newsTopics = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "magazine", "movies", "politics", "science", "sports", "technology", "theater", "travel", "world"]
}

export class Genres {
   
    static genres = ["Action", "Adventure", "Autobiography", "Biography", "Comedy", "Drama", "Essay", "Fable", "Fantasy", "Fiction in Verse", "Folklore", "Historical fiction", "Horror", "Legend", "Magical realism", "Memoir", "Mystery", "Narrative nonfiction", "Poetry", "Religion", "Romantic fiction", "Science fiction", "Self-help", "Short story", "Speech", "Tall Tale", "Thriller", "Tragedy", "Travel", "True crime", "Western", "Young adult fiction"]
}

export class OpenAI {
    static imageSystemPrompt = "Acting as a short story writer, create a story from the objects listed below."
    static moreSystemPrompt = "Acting as a short story writer, create a story from the text below."
    static newsSystemPrompt = "Acting as a blogger, create a blog based on the headline below."
    static freestyleSystemPrompt = "Acting as a short story writer, create a story from the text below."
}

export class UIText {
    static appTabTitle = "storymaker"
    static appTitle = 'storymaker'
    static appCopyright = '&copy; 2022 <a href="https://huckle.studio/">Dr Steve Huckle</a>, all rights reserved'
    static appCatchphrase = 'ai-based story generation'
    static poweredBy = 'powered by'
    static appTitleHome = "home"
    static appTitleLogin = "login"
    static appTitleFreestyle = "freestyle"
    static appTitleImages = `${UIText.appTitle} | images`
    static appTitleImageObjects = `${UIText.appTitle} | classification`
    static appTitleNews = `${UIText.appTitle} | news topics`
    static appTitleNewsHeadlines = `${UIText.appTitle} | news headlines`
    static appTitleGenre = `${UIText.appTitle} | genre`
    static appTitleText = `${UIText.appTitle} | text`

    static appTextHome = ''
    static appTextAbout = 'uses AI, news headlines and image classification to generate text.'
    static appTextAccount = `You will need an account to use <span id="title">${UIText.appTitle}</span>; if you would like one, please contact <a href="https://huckle.studio/">Dr Steve Huckle</a>.`
    static appTextNoAccount = `If you have an account, please login. If you do not have an account, but would like one, please contact <a href="https://huckle.studio/">Dr Steve Huckle</a>.`
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
    static appGenerateStory = 'pick a way of generating a story'
    static appGenerateBlog = 'pick a way of generating a blog'

    static login = "login"
    static logOut = "logout"
    static loginForm = {
        email: 'email',
        password: 'password',
        passwordText: 'password',
        requiredError: 'a value is required',
        emailError: 'a valid email is required',
        passwordError: 'password is required',
    }
    static loginFeedbackOk = "welcome!"
    static loginFeedbackError = `unfortunately, your login was unsuccessful this time. If you have an account, please try again. Otherwise, if you'd like an account, please contact <a href="https://huckle.studio/">Dr Steve Huckle</a>.</p>`

    static userPrompt = 'story synopsis'
    static userPromptError = 'user prompt is required'

    static tokenError = 'user session expired - please login again'

    static linkHome = "home"
    static linkStoryMaker = "maker"
    static linkAbout = "about"
    static linkSettings = "settings"
    static linkLogin = "login"
    static linkLogout = "logout"
    static linkImages = "get images"
    static linkImageObjects = "images objects"
    static linkText = "text"

    static newsTopics = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "magazine", "movies", "politics", "science", "sports", "technology", "theater", "travel", "world"]

    static buttonSubmit = "submit"
    static buttonClear = "clear"
    static buttonInit = "init"
}

