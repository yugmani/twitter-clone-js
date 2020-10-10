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
  API Endpoints:
  \*\*twitter API

  1. URL:https://api.twitter.com/1.1/search/tweets.json
  2. count for count of tweets.
  3. Headers:
     Authorization --> Bearer <token>
  4. Return payload:

     \*\*TASK: :star: Complete documentation for using the :small_blue_diamond:Twitter API after learning about the Twitter API\*\*

curl -u "4bCIzYkuT9OsRiMloq6eCNgqG:qRLpJ5cy1qdjpsGuRI53UxN3z8prTHfgNCWxUvD7hUPJJ3WzRe" \
 --data 'grant_type=client_credentials' \
 'https://api.twitter.com/oauth2/token'

{"token_type":"bearer","access_token":"AAAAAAAAAAAAAAAAAAAAAIjyIQEAAAAA9t61JRrPTIVCSRaLTa5hIT7TaJQ%3DTHrEDJyxZ2yxaWSdJs5gPTPvQG4CPu5nZC9kolZQEzeAcG1S5C"}

API key:

4bCIzYkuT9OsRiMloq6eCNgqG

API key secret:

qRLpJ5cy1qdjpsGuRI53UxN3z8prTHfgNCWxUvD7hUPJJ3WzRe

Bearer token:

AAAAAAAAAAAAAAAAAAAAAIjyIQEAAAAA9t61JRrPTIVCSRaLTa5hIT7TaJQ%3DTHrEDJyxZ2yxaWSdJs5gPTPvQG4CPu5nZC9kolZQEzeAcG1S5C
