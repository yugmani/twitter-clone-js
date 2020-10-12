# General TODOS

## TODO(Together): Create the home page structure for index.html

That involves the navigation, tweets list, and trending hashtags section.

## TODO: Create HTML and Style for Navigation

Use Mockup for styles like border

It needs to follow a class structure like this:

    class navigation

        class logo

            <i class="fab fa-twitter"></i>

        class home-link

            <i class="fas fa-home"></i>

        class profile-container

            class profile

## TODO(Together): Create HTML and Style for Input Box

## TODO(Together): Create HTML and Style for Individual Tweet

### TODO: Complete User Info HTML and Styling

It needs to follow a class structure like this:

    class tweet-user-info

        class tweet-user-profile

        class tweet-user-name-container

            class tweet-user-fullname

            class tweet-user-username

#### HINTS:

    User Profile: width: 30px; height: 30px;

    User Full Name: font-size: 10px

    User Twitter Handel: font-size: 8px

## TODO(Together): Create HTML and Style for Trending Box

### TODO: Complete styling for list of trends

#### HINTS:

    List Item: padding-left: 20px; padding-top and bottom: 8px

## TODO: Complete `getTwitterData()` function to retrieve data from our API

For now, I want you to use the following static url to get data from api:

`http://localhost:3000/tweets?q=coding&count=10`

#### HINTS:

    - Use `fetch()`
    - Call function on load of js
    - Console log response

## TODO: Get search input and use it to build a `url` like the one above

This time you are building a dynamic url that will change based on the user's search input

#### HINTS:

    - Call `getTwitterData()` function when a user clicks on search icon
    - Use string literals to build out the url
    - Console log response

### TODO(Together): Get twitter data when a user hits enter

## TODO: Complete `buildTweets()` function to show the Tweets List(only text)

#### HINTS:

    - Call `buildTweets()` function from `getTwitterData()`
    - Use List.map() to loop over the list of tweets
    - Use string literals to replace html with the text from each tweet
    - Replace html content inside `.tweets-list`

## TODO: Add abiliy to show images in the tweets

#### HNTS:

    - Use `buildImages()` function
    - Check if there is media using `.length`property to call `buildImages()` function

## TODO(Together): Add ability to show videos in the tweets

## TODO(Together): Add ability to show gifs in the tweets

## TODO: Show user info in the tweets

## TODO(Together): Use [moment.js](https://momentjs.com/) to show the date of tweet

## TODO: Complete `selectTrend()` function to allow a user to click on the trend and search for it

#### HINTS:

    - Call `selectTrend()` function from list item click
    - Get the inner text of list item
    - Set the value of input search using the text
    - Call `getTwitterData()` function

## TODO: Create HTML and Style for Next Page Button

#### HINTS:

    - Use `next-page-container` class
    - border-radius: 20px; margin-top: 20px;
    - Use arrow down font awesome icon

## TODO(Together): Showing Next Page of Tweets

### TODO: Save Next Page Url

### TODO: Load tweets when selecting the next page button

[Here](https://developer.twitter.com/en/docs/tweets/timelines/guides/working-with-timelines) is how twitter pagination works

### TODO(API): ...something that has to do with `max_id`

### TODO: Fix logic to replace tweets when searching, but append tweets when going to next page

### TODO: Show next page button only when there is a next page

## TODO: Clean Up

## WE ARE DONE!

# twitter-clone-js

## Goals: Create a twitter clone to let users search for tweets and view them.

## User Stories

**TASK: Complete User story for trending hashtags and next page functionality**

- As a user, I want to be able to input my serch so that I can search for tweets.
- As a user, I want to be able to see the tweets I searched for so that I can view them.
- As a user, I want to be able to view the text, photo, gifs or videos of the tweet so that I can view all of them contents of the tweet.

* As a user, I want to see the trending hashtags currently on twitter so that I can later use them to search for tweets.
* As a user, I want to click on the trending hashtags so that I can see the tweets for that hashtag.
* As a user, I want to click next page so that I can see the next page of the tweets.

## Flow Diagram(Swimlane)

**TASK: Complete Swimlane for next page click**
:arrow_forward:[twitter-clone-swimline-Flow](./assets/images/twitter-clone-swimline-flow)

## Business Requirements

**TASK: Complete Business Requirements for Home Page**

1. Pages:

- Home Page

2. Home Page

- Allow a user to type in and search for tweets based on what they type
- Show the list of tweets based on search
  _Show text_
  _Show images if available_
  _Show video if available_
  _Show gif if available_
  _Show how long ago this tweet was created_
  _Show the user's full name who created the tweet_
  _Show the profile of the user_
  _Show the twitter handle of the user who created this tweet_

* Show 10 tweets only at the start
* Allow a user to get the next 10 tweets or the next page of the tweets.
* Show trending hashtags in a list
* Allow a user to click on the trending hashtag and search for it
* Show the profile photo of the person using the app

## Technical Requirements

- Create a Developer Account for Twitter
- Make sure to only show the next page link when there are no more results for next page
- Use the attribute “next_results”
- Use moment.js for showing the date of the tweet from the current date
- Use the documentation here for getting Search Tweets
