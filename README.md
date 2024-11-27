# Dodecs Website v2

This is the second iteration of the Dodecs website and can be viewed at [dodecs.com](dodecs.com). The first version of the website is [here](https://github.com/Dodecaphonics/dodecs).

The list of members can be edited in *src/content/members*. Tour info can be edited in *src/data/tour.ts*.

This website was made with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). Check out the documentation to learn how to make changes.

**About Astro:**

Astro is a web framework that makes building static websites with content easy. In the repo folder, under *src*, you'll find the following layout of folders:
* components
* data
* images
* layouts
* pages
* styles

In *components*, you'll see pieces that are resuable, like the website footer. In *layouts* is *layout.astro*, which is essentially a page template that every page in the website uses to have a standard nav bar and structure. *pages* is a directory where each file creates a page where the url is the file name.

In a *.astro* file, you have the header where you can import files, and after the header is JSX code, which is like HTML with the functionality of Javascript. 

**About Tailwind CSS:**

Tailwind CSS is a CSS framework that provides pre-defined classes to style elements directly in HTML. Tailwind CSS allows you to not create custom CSS for each style. When you create a new HTML element, you can define the styles through the element's class name. Search up styling in the Tailwind CSS documentation to see what the class names to use are.



## Getting started
**How to run the website locally:**

1. Clone the repo by entering this in to your terminal

```
git clone https://github.com/Dodecaphonics/dodecs2.git
```

2. Within the repo directory, install NPM packages ([install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) first if you haven't)

```
npm i
```

3. Run website locally

```
npm run dev
```

## Deployment
The website is deployed through [Render](onrender.com). To manage the website's deployment, log in to Render through the Dodecs gmail and find the dodecs website project in the dashboard. Every time a commit is pushed to this depo, the website will automatically deploy again in Render. The website domain is managed through [GoDaddy](godaddy.com).

## Contact
For questions related to this website, contact Annie at annierqiu@gmail.com.
