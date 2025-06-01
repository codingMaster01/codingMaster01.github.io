// Your YouTube API Key
const apiKey3 = "AIzaSyAq0CDie8uFZxlpeXx27n3mEUrY5HbARDA";

// Your Channel ID
const channelId3 = "UC4tc3mENwycOyU5USqMiJjg";

//API Call To Access The Different Statistics About The Channel
const apiUrl3 = "https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=" + channelId3 + "&key=" + apiKey3;

document.addEventListener("DOMContentLoaded", function() {
    fetch(apiUrl3)
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            // The First Item In The Called Data Holds All The Statistics
            const stats = data.items[0];

            // Storing All Desired Stats
            const publishedAt = new Date(stats.snippet.publishedAt).toLocaleDateString();
            const subscriberCount = stats.statistics.subscriberCount;
            const viewCount = stats.statistics.viewCount;
            const videoCount = stats.statistics.videoCount;
            const avgViews = Math.floor(viewCount / videoCount);

            // The HTML Code (Formatting Data In A Two Column Table)
            let html = "";
            html = html + "<tr><td>Channel Created</td><td>" + publishedAt + "</td></tr>"
            html = html + "<tr><td>Subscribers</td><td>" + subscriberCount + "</td></tr>";
            html = html + "<tr><td>Total Views</td><td>" + viewCount + "</td></tr>";
            html = html + "<tr><td>Total Videos</td><td>" + videoCount + "</td></tr>";
            html = html + "<tr><td>Avg. Views Per Video</td><td>" + avgViews + "</td></tr>";

            // Store the HTML Code
            const tableBody = document.getElementById("stats-body");
            tableBody.innerHTML = html;
        })

        // In Case Of Errors
        .catch(function(error) {
            console.error("Error Fetching Channel Stats: ", error)
        })
})