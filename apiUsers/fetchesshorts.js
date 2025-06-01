/* The API Key Fetched From Google Cloud YouTube API Project */
const APIKey1 = "AIzaSyAq0CDie8uFZxlpeXx27n3mEUrY5HbARDA";

/* Channel ID Fetched From YouTube Account */
const id1 = "UC4tc3mENwycOyU5USqMiJjg";

/* The API URL Specifies:
    - Snippet (Ensures The Basic Information Like Views Is Fetched)
    - Type (Ensures A Video Is Being Fetched)
    - maxResults (Ensures The Top 5 Videos Are Chosen)
    - order = viewCount (Ensures The Videos Are Chosen On The Basis Of View Counts)
    - videoDuration (Ensures The Video Is A Short)
*/
const apiUrl1 = "https://www.googleapis.com/youtube/v3/search?key=" + APIKey1 +
             "&channelId=" + id1 +
             "&part=snippet&type=video&maxResults=5&order=viewCount&videoDuration=short";

/* The Container Contains All The Videos */
const container1 = document.getElementById("shorts-container");

/*Fetches Data From YouTube API */
fetch(apiUrl1)
    .then(function(response) {
        /* Converts The Response To A Temperorary JSON File */
        return response.json();
    })
    .then(function(data) {
        /* Get The List Of Shorts */
        const shorts = data.items;

        /* Loop Through Each Video And Write The HTML Code For Each Video */
        shorts.forEach(function(short) {
            const shortID = short.id.videoId;
            const iframe = document.createElement("iframe");
            iframe.width = "200";
            iframe.height = "350";
            /* The Short Is Accessed Through The ShortID Fetched Through API */
            iframe.src = "https://www.youtube.com/embed/" + shortID
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media";
            iframe.allowFullscreen = true;
            iframe.style.margin = "10px"

            /* Add The Styled iframe To The Container Of Shorts */
            container1.appendChild(iframe); 
        });
    });