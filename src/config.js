export class LocalRoutes {
    static home = '/storymaker'
    static login = `${LocalRoutes.home}/login`
    static app = `${LocalRoutes.home}/maker`
    static images = `${LocalRoutes.app}/images`
    static imageObjects = `${LocalRoutes.app}/image-objects`
    static news = `${LocalRoutes.app}/news`
    static newsHeadlines = `${LocalRoutes.app}/news-headlines`
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

export class OpenAI {
    static imageSystemPrompt = "Acting as a short story writer, create a story from the objects listed below."
    static moreSystemPrompt = "Acting as a short story writer, create a story from the text below."
    static newsSystemPrompt = "Acting as a blogger, create a blog based on the headline below."
}

export class UIText {
    static appTabTitle = "storymaker"
    static appTitle = 'storymaker'
    static appCopyright = '&copy; 2022, <a href="https://glowkeeper.github.io/">Dr Steve Huckle</a>, all rights reserved'
    static appCatchphrase = 'ai-based text generation'
    static poweredBy = 'powered by'
    static appTitleHome = "home"
    static appTitleLogin = "login"
    static appTitleImages = `${UIText.appTitle} | images`
    static appTitleImageObjects = `${UIText.appTitle} | classification`
    static appTitleNews = `${UIText.appTitle} | news topics`
    static appTitleNewsHeadlines = `${UIText.appTitle} | news headlines`
    static appTitleText = `${UIText.appTitle} | text`

    static appTextHome = ''
    static appTextAbout = 'is an ai-based app that uses news stories and ai image classification to find image objects, then uses ai text generation to generate text from those stories or one of those image objects.'
    static appTextImages = 'please wait - finding images'
    static appTextImageObjects = 'please wait - classifying images'
    static appTextHeadlines = 'please wait - getting headlines'
    static appTextFoundObjects = 'found objects'
    static appTextFoundHeadlines = 'found headlines'
    static appTextText = 'please wait - generating text'

    static appLandingButtonText = 'make...'
    static appImagesButtonText = "choose 10 images"
    static appNewsButtonText = "pick a news story"
    static appNewButtonText = "get new..."
    static appMoreButtonText = "get more..."
    static appResetButtonText = "reset"
    static appRemoveLastButtonText = "remove last"
    static appSaveButtonText = "save text"

    static login = "Login"
    static logOut = "Logout"
    static loginForm = {
        email: 'Email',
        password: 'Password',
        requiredError: 'a value is required',
        emailError: 'a valid email is required',
        passwordError: 'password is required',
    }
    static loginFeedbackOk = "Welcome!"
    static loginFeedbackError = `Unfortunately, your login was unsuccessful this time. If you have an account, please try again. Otherwise, if you'd like an account, please contact <a href="https://glowkeeper.github.io/">Dr Steve Huckle</a> at steve.huckle@gmail.com</p>`
    static tokenError = 'User session expired - please login again'

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

