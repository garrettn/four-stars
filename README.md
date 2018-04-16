# Four Stars

An unnecessary filter for your browser.

## Installation

Install from the [Firefox Add-ons site](https://addons.mozilla.org/en-US/firefox/).

## Development

[Yarn](https://yarnpkg.com) is recommended, but npm can be used as well.

Install dependencies:

```
yarn # OR npm install
```

### Development mode

```
yarn start # OR npm start
```

Open any file from the `dist` folder in `about:debugging` under ["Load Temporary Add-on"](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension#Installing).

### Production build

```
yarn build # OR npm run build
```

The zip file will be generated inside the `web-ext-artifacts` folder.

## License

This project is licensed under the terms of the [MIT License](LICENSE.txt).
