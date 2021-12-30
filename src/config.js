export const flickrAPIKey = process.env.REACT_APP_FLICKRAPIKEY
export const nlpCloudAPIToken = process.env.REACT_APP_NLPCLOUDAPITOKEN

export const numSelectedImages = 10

export class LocalRoutes {
    static home = "/"
    //static about = `${LocalRoutes.home}/about`
    static about = `${LocalRoutes.home}/about`
}

export class RemoteAPI {
    static flickrQueryAPI = 'https://api.flickr.com/services/rest/?method=flickr.photos.search'
    static flickrPhotoServer = 'https://live.staticflickr.com/'

    static nlpGeneration = 'https://api.nlpcloud.io/v1/gpt-j/generation'
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

export class UIText {
    static appTabTitle = "portrayal"
    static appTitle = 'Portrayal'
    static appTitleAbout = "about"
    static appTitleHome = "images"

    static appTextAbout = 'this is an app that offers solutions to <a href="https://exercism.org/">exercism\'s</a> <a href="https://exercism.org/tracks/javascript/exercises/rectangles/">rectangles problem</a><br/><br/>you can input the example offered there:<br/><br/><pre>   +--+<br/>  ++  |<br/>+-++--+<br/>|  |  |<br/>+--+--+</pre><br/>but much more besides; e.g:<br/><br/><pre>+---+--+----+<br/>|   +--+----+<br/>+---+--+    |<br/>|   +--+----+<br/>+---+--+--+-+<br/>+---+--+--+-+<br/>+------+  | |<br/>          +-+</pre><br/>or perhaps (if you want to be ambitious):<br/><br/><pre>+---+--+----++---+--+----++---+--+----+<br/>|   +--+----+|   +--+----+|   +--+----+<br/>+---+--+    |+---+--+    |+---+--+    |<br/>|   +--+----+|   +--+----+|   +--+----+<br/>+---+--+--+-++---+--+--+-++---+--+--+-+<br/>+---+--+--+-++---+--+--+-++---+--+--+-+<br/>+------+  | |+------+  | |+------+  | |<br/>          +-+          +-+          +-+<br/>+---+--+----++---+--+----++---+--+----+<br/>|   +--+----+|   +--+----+|   +--+----+<br/>+---+--+    |+---+--+    |+---+--+    |<br/>|   +--+----+|   +--+----+|   +--+----+<br/>+---+--+--+-++---+--+--+-++---+--+--+-+<br/>+---+--+--+-++---+--+--+-++---+--+--+-+<br/>+------+  | |+------+  | |+------+  | |<br/>          +-+          +-+          +-+</pre><br/>...you can even just copy and paste the app\'s title from the top of this page and set the corner to \'+\' or \'-\' &#128521;<br/><br/>&copy; 2021, <a href="https://glowkeeper.github.io/">Dr Steve Huckle</a>, all rights reserved<br/><br/><a href="https://github.com/glowkeeper/rectangle-react"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Font_Awesome_5_brands_github.svg" width="16px" /></a>'

    static linkHome = "home"
    static linkAbout = "about"

    static buttonSubmit = "submit"
    static buttonClear = "clear"
    static buttonInit = "init"
}

