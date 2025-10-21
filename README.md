# StoryMaker

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

ai-based app' that uses ai image classification to find image obejcts, then uses ai text generation to generate text from one of those objects.

## Table of Contents

- [StoryMaker](#storymaker)
  - [Table of Contents](#table-of-contents)
  - [Built Using](#built-using)
  - [Install](#install)
  - [Run](#run)
  - [Maintainer](#maintainer)
  - [Contributing](#contributing)
  - [License](#license)

## Built Using

- [node](https://nodejs.org/en/)
- [react](https://reactjs.org/)
- [TensorFlow](https://www.tensorflow.org/)
- [OpenRouter](https://openrouter.ai/)
- [flickr API](https://www.flickr.com/services/api/)
- [New York Times News API](https://developer.nytimes.com/apis)

## Install

This project uses [node](http://nodejs.org/) and [npm](https://npmjs.com/). If you've not done so, please install those first (you should have the [Active LTS](https://nodejs.org/en/about/releases/) version of node installed). Then clone this repository, switch to its root directory, and type `npm install`.

## Run

You will need to create a `.env` file in the root directory, with the following four variables:

1. REACT_APP_NYT
2. REACT_APP_FLICKR
3. REACT_APP_FLICKRSECRET
4. REACT_APP_OPENROUTER

Where `REACT_APP_NYT` is the API key for the New York Times, REACT_APP_FLICKR and REACT_APP_FLICKRSECRET are the Flickr API key and secret, and REACT_APP_OPENROUTER is the OpenRouter API key.

From the repo's root directory, type `npm run start`.

## Maintainer

[Steve Huckle](https://huckle.studio/).

## Contributing

Contributions welcome - please email the maintainer.

## License

Creative Commons [Attribution 4.0 International Deed (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

![CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)
