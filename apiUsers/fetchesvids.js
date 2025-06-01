// Your YouTube API Key
const apiKey = "AIzaSyAq0CDie8uFZxlpeXx27n3mEUrY5HbARDA"; // Replace with your actual key

// Your Channel ID
const channelId = "UC4tc3mENwycOyU5USqMiJjg";

// First API: Get top 5 most viewed videos
const searchUrl = "https://www.googleapis.com/youtube/v3/search" +
    "?key=" + apiKey +
    "&channelId=" + channelId +
    "&part=snippet" +
    "&type=video" +
    "&maxResults=107" +
    "&order=viewCount";

// Helper function to convert YouTube duration to minutes
function parseDuration(iso) {
    // Match hours, minutes, seconds from a string like PT1H2M30S
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const match = iso.match(regex);

    // If matched, parse the numbers. If missing, fallback to 0
    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;

    // Convert to total minutes
    return hours * 60 + minutes + seconds / 60;
}

// Run after the page has loaded
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("videos-container");
    if (!container) {
        console.error("No container with id 'videos-container' found.");
        return;
    }

    // Fetch top videos
    fetch(searchUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const videos = data.items;
            const videoIds = videos.map(function (video) {
                return video.id.videoId;
            });

            // Now fetch duration info for those videos
            const detailsUrl = "https://www.googleapis.com/youtube/v3/videos" +
                "?key=" + apiKey +
                "&id=" + videoIds.join(",") +
                "&part=contentDetails";

            return fetch(detailsUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (detailsData) {
                    // Filter video IDs that are longer than 2 minutes
                    const validIds = {};
                    detailsData.items.forEach(function(item) {
                        let  duration = parseDuration(item.contentDetails.duration);
                        if (duration >= 1.035) {
                            validIds[item.id] = true;
                        }
                    });
                    let count = 0;
                    // Show only the valid videos
                    videos.forEach(function (video) {
                        const videoId = video.id.videoId;
                        if (validIds[videoId] && count < 8) {
                            const iframe = document.createElement("iframe");
                            iframe.src = "https://www.youtube.com/embed/" + videoId;
                            iframe.width = "300";
                            iframe.height = "200";
                            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media";
                            iframe.allowFullscreen = true;
                            iframe.style.margin = "10px";
                            container.appendChild(iframe);
                            count++;
                        }
                    });
                });
        })
        .catch(function (error) {
            console.error("Error fetching or processing videos:", error);
        });
});
