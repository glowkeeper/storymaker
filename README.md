# StoryMaker

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

ai-based app' that uses ai image classification to find image obejcts, then uses ai text generation to generate text from one of those objects.

## Table of Contents

- [Built Using](#built-using)
- [Install](#install)
- [Application Dependencies](#application-dependencies)
- [Run](#run)
- [Maintainer](#maintainer)
- [Contributing](#contributing)
- [License](#license)

## Built Using

- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [react](https://reactjs.org/)
- [TensorFlow](https://www.tensorflow.org/)
- [OpenAI](https://openai.com/)
- ([NLP Cloud](https://nlpcloud.io/))
- [flickr API](https://www.flickr.com/services/api/)

## Install

This project uses [node](http://nodejs.org/) and [npm](https://npmjs.com/). If you've not done so, please install those first (you should have the [Active LTS](https://nodejs.org/en/about/releases/) version of node installed). Then clone this repository, switch to its root directory, and type `npm install`.

## Application Dependencies

To successfully [run](#run) the application, you must create a `.env` file in the repo's root directory. That should specify the following variables:

```bash
GENERATE_SOURCEMAP=false
REACT_APP_FLICKRAPIKEY="<flickrapikey>"
REACT_APP_OPENAPIKEY="<openapikey>"
REACT_APP_NLPCLOUDAPITOKEN=""
```

- `REACT_APP_FLICKRAPIKEY` is your [flickr api key](https://www.flickr.com/services/api/misc.api_keys.html)
- `REACT_APP_OPENAPIKEY` is your [open api key](https://beta.openai.com/signup)
- `REACT_APP_NLPCLOUDAPITOKEN` is currently unused, so it's okay to declare an empty string, for now

## Run

From the repo's root directory, type `npm run start`.

## Maintainer

[Steve Huckle](https://glowkeeper.github.io/).

## Contributing

Contributions welcome - please email the maintainer.

## License

![CC BY-NC-ND](https://licensebuttons.net/l/by-nc-nd/3.0/88x31.png)

Creative Commons [Attribution-NonCommercial-NoDerivatives 4.0 International](https://creativecommons.org/licenses/by-nc-nd/4.0/)
