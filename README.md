# Lahko.ba
Quiz website where you can learn a lot more about Bosnia itself. This website is made during COVID-19 pandemic, to ensure that students/people are still learning about their beloved country

# Why it is made?

Here is why: 
* Improving knowledge about Bosnia and Herzegovina
* Making sure that during pandemic people are still learning
* Fun way of learning - You earn trophies by doing good!

# How to use the app
In this paragraph I will try to describe you how to use the app, if you want to work on it.

## Prerequisites

First, when you clone the repository, you need to install npm

```npm install``` or ```yarn install```

After that, you need to run ```npm run dev``` or ```yarn dev``` in order to run the both client and "backend" servers 

### Important

Before all of this, you need to add PORT, JWT Secret, JWT Expire. Also, you need to connect your MongoDB and add the url in the .env file. If you want to use the "forgot password" option
then you need to also make account on Sendgrid, and add those important information in .env file. Make sure you have the correct information in the .env file since it won't work properly if you do not

# Usage

There are three sections on this website:
* Main screen - home page
* Quiz screen - screen where you can see the button for entering the question screen
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

**Frontend**: HTML, CSS, JavaScript, React JS, Redux, Framer Motion, MDB Bootstrap <br />
**Backend**: Node, Express JS <br />
**Database**: MongoDB(NoSQL Database)

# Authentication 
To secure the site I have used the JWT Authentication.

# Fork it!

If you want to work on this website, make sure to fork it, make your own branch, and then push it make pull request and everything that goes with it. 

# Update v1.1

* Fixed problem with security. Normalize-url was outdated

# Update v1.2

* Fixed problem with dependencies. Parse-bot was outdated. Version is updated!

# Update v1.3

* Problem with dependencies. Outdated. Problem is fixed

# Update v1.4

* Perfomance of the website has been significantly changed. Perfomance was around 60% now it is 90% 

# API and Routes - Info

The REST Api has been made by myself. No other API's have been used in this web app.
