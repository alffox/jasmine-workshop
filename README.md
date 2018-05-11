# Jasmine Workshop

## Scope of the repo
This project aims to provide a starter code to build Jasmine unit tests for this app: https://alffox.github.io/cat-clicker/

## How to consume the code of this repo

- **Method 1** (recommended - required for trainees):
Download the repo on your PC locally and open jasmine-workshop/jasmine/jasmine-standalone-3.1.0/index.html?random=false with a browser of your choice (please note the ```?random=false``` appended to the URL)

- **Method 2** (demo mode):
Simply navigate to: https://alffox.github.io/jasmine-workshop/jasmine/jasmine-standalone-3.1.0/index.html?random=false

## How to use the App

The **Cat Clicker** app works simply like this: once you open the main page, click on any cat name in the left-handed side list to know more related info. Upon click, the cat's info and picture will be displayed on the right side of screen.

After the first click, the **Admin button** will also be activated. Upon click, this button will show the Admin area. Such area shows the currently clicked cat data and allows updating name, URL (full URL path e.g. http://... is supported) and clicks through the "Save and Refresh" button. The operation can be cancelled with the "Cancel" button.

## How to add Jasmine unit tests to the app

Open the file jasmine-workshop/jasmine/jasmine-standalone-3.1.0/AppHelper.js and start adding your desired specs within the suites. Hints have been provided, e.g.:

```it('ensures cats are defined', function()```

AppHelper.js will parse the logic of jasmine-workshop/jasmine/jasmine-standalone-3.1.0/src/app.js and will run tests against it.

Once done, simply open jasmine-workshop/jasmine/jasmine-standalone-3.1.0/index.html?random=false in the browser and check the test results at the bottom of the page:

![A screenshot of the starting app](https://github.com/alffox/jasmine-workshop/blob/master/jasmine/jasmine-standalone-3.1.0/images/preview.png)
*Fig. 1: Cat photo by [Mikhail Vasilyev](https://unsplash.com/@miklevasilyev) via [Unsplash](https://unsplash.com/)*

In case of red failure for a test, just click on it to get more related information

## External libraries used
- [jQuery](https://jquery.com/) - v. 3.2.1
- [Jasmine](https://jasmine.github.io/) - v. 3.1.0
- [Jasmine-Jquery](https://github.com/velesin/jasmine-jquery) - v. 2.1.1