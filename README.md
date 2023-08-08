Presentation Boilerplate
=====================

_This project is a ready-to-use template for web build presentations based on React and MDX - using Spectacle._

## Usage

After cloning the repository into your workspace environment, run the following commands:

```sh
$ yarn install
$ yarn start
```

In case you want a production build, which can be published to services like Netlify, Vercel, Surge, etc - run the following commands:

```sh
$ yarn build
```

You'll be able to copy the 'dist' folder and use the production build of the website.

## Folder structure

Within the 'presentation' folder, you'll be able to write all your slide content - in MDX - within the provided index file. When changing the slides, you could use a variety of React components such as CodeSlides, LightSlides, External links and SVG's.

You could include images, svg's or mp4, by extracting them from the 'assets' folder. 