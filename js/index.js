const URL = "http://localhost:3000/tweets";
 // const url = 'http://localhost:3000/tweets?q=coding&count=10';

let nextPageUrl = null;

const onEnter = (e)=>{
    if(e.key == "Enter"){
        getTwitterData();
    }
}

const onNextPage = ()=>{
   if(nextPageUrl){
       getTwitterData(true);
   }
}

/**
 * Retrive Twitter Data from API
 */
const getTwitterData = (nextPage=false) => {
    const query = document.getElementById("user-search-input").value;
    const encodedQuery = encodeURIComponent(query);
   if(query){
        let fullUrl = `${URL}?q=${encodedQuery}&count=10`;
        if(nextPage && nextPageUrl){
            fullUrl = nextPageUrl;
        }
        fetch(fullUrl).then((response)=>{
            return response.json();
        }).then((data)=>{
            // console.log(data);
            buildTweets(data.statuses, nextPage);
            saveNextPage(data.search_metadata);
            nextPageButtonVisibility(data.search_metadata);
        })
    } else {
    return;
}
}

const searchButton = document.getElementById("searchIcon");
searchButton.addEventListener("click", getTwitterData);


/**
 * Save the next page data
 */
const saveNextPage = (metadata) => {
    if(metadata.next_results){
        nextPageUrl = `${URL}${metadata.next_results}`;
    } else {
        nextPageUrl = null;
    }
}

/**
 * Handle when a user clicks on a trend
 */
const selectTrend = (e) => {
   const text = e.innerText;
   document.getElementById("user-search-input").value = text; 
    getTwitterData();
}

/**
 * Set the visibility of next page based on if there is data on next page
 */
const nextPageButtonVisibility = (metadata) => {
    if(metadata.next_results){
       document.getElementById('next-page').style.visibility = "visible";
    } else {
        document.getElementById('next-page').style.visibility = "hidden";
    }

}

/**
 * Build Tweets HTML based on Data from API
 */
const buildTweets = (tweets, nextPage) => {
    let twitterContent = "";
    tweets.map((tweet) =>{
        const created = moment(tweet.created_at);
        const createdDate = moment(created).fromNow();
        twitterContent += `
            <div class="tweet-container">
                <div class="tweet-user-info">
                    <div class="tweet-user-profile" style="background-image:url(${tweet.user.profile_image_url_https})"></div>
                    <div class="tweet-user-name-container">
                        <div class="tweet-user-fullname">
                            ${tweet.user.name}
                        </div>
                        <div class="tweet-user-username">
                            @${tweet.user.screen_name}
                        </div>
                    </div>
                </div>
                `
                if(tweet.extended_entities && tweet.extended_entities.media.length>0){
                    twitterContent += buildImages(tweet.extended_entities.media);
                    twitterContent += buildVideo(tweet.extended_entities.media);
                }
                twitterContent +=`
                <div class="tweet-text-container">
                    ${tweet.full_text}
                </div>
                <div class="tweet-date-container">
                    ${createdDate}
                </div>
            </div>
            `
    })

    if(nextPage){
        document.querySelector('.tweets-list').insertAdjacentHTML('beforeend', twitterContent);
        document.querySelector('.tweets-welcome-message').style.visibility = "hidden";
    } else {
    document.querySelector('.tweets-list').innerHTML = twitterContent;
    document.querySelector('.tweets-welcome-message').style.visibility = "hidden";
    }
}

/**
 * Build HTML for Tweets Images
 */
const buildImages = (mediaList) => {
let imageExists = false;
let imagesContent = `<div class="tweet-images-container">`
mediaList.map((media)=>{
    if(media.type=='photo'){
        imageExists = true;
        imagesContent += `<div class="tweet-image" style="background-image:url(${media.media_url_https}")></div>`
        
    }
});
imagesContent += `</div>`;
return imageExists ? imagesContent: '';

}

/**
 * Build HTML for Tweets Video
 */
const buildVideo = (mediaList) => {
    let videoExists = false;
    let videoContent = `<div class="tweet-video-container">`
    mediaList.map((media)=>{
        if(media.type=='video'){
            videoExists = true;
            const videoVariant = media.video_info.variants.find((variant)=>variant.content_type == 'video/mp4');
            videoContent += ` 
                    <video controls>
                        <source src="${videoVariant.url}" type="video/mp4">
                    </video>
                    `  
        } else if (media.type == 'animated_gif'){
            videoExists = true;
            videoContent += `
                <video loop autoplay>
                        <source src="${media.video_info.variants[0].url}" type="video/mp4">
                </video>
            `
        }
    });
    videoContent += `</div>`;
    return videoExists ? videoContent: '';
}
