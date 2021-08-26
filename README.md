# Lahko.ba
Quiz website where you can learn a lot more about Bosina itself. This website is made during COVID-19 pandemic, to ensure that students/people are still learning about their beloved country

# Why it is made?

Here is why: 
* Improving knowledge about Bosnia and Herzegovina
* Making sure that during pandemic people are still learning
* Fun way of learning - You earn trophies by doing good!

# How to use the app
In this paragraph I will try to describe you how to use the app, if you want to work on it.

## Prerequisites

First, when you clone the repository, you need to install npm

```npm install```

After that, you need to run ```npm run dev``` in order to run the both client and "backend" servers 

### Important

Before all of this, you need to add PORT, JWT Secret, JWT Expire. Also, you need to connect your MongoDB and add the url in the .env file. If you want to use the "forgot password" option
then you need to also make account on Sendgrid, and add those important information in .env file. Make sure you have the correct information in the .env file since it won't work properly if you do not

# Usage

There are three sections on this website:
* Main screen
* Quiz screen
* Answering question screen

### Main screen 

On the main screen you can see why was this website made in the first place, and register and login button
![](https://media.giphy.com/media/BplHPRyzeg8V5ewcgq/giphy.gif)


### Quiz screen
On this screen, you can see what you can get by playing on this website, as well as choosing between three quizes

![](https://media.giphy.com/media/hadGkvvjRfeXJ1Gdy5/giphy.gif)


### Answering question screen
Well, name says it all! If you answer all of the question you will get award.

![](https://media.giphy.com/media/uoer0Iw5PSCOqITHPd/giphy.gif)

# Built with

Here is the list of technologies used to make this website

* HTML/CSS
* JavaScript
* React JS
* Redux
* Framer Motion
* MDB Bootstrap
* MongoDB
* Node, Express

# Fork it!

If you want to work on this website, make sure to fork it, make your own branch, and then push it make pull request and everything that goes with it. 

# Update v1.1

* Fixed problem with security. Normalize-url was outdated

# Update v.1.2

* Fixed problem with dependencies. Parse-bot was outdated. Version is updated!
