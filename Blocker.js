let lastVideoId = null;

function getVideoId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("v");
}

function checklastvideoId(currentid, lastVideoId) {
    return (currentid == lastVideoId);
}


function ModifyUrl() {
    let currentID = getVideoId();
     if (checklastvideoId(currentID, lastVideoId)){
        return 
     }
     
     lastVideoId = currentID;

     const newUrl = window.location.href.replace(
        "www.youtube.com",
        "www.youtube.com."
    );

    window.location.replace(newUrl);
    return
}

function isYouTube() {
    return window.location.hostname.includes("youtube.com");
}

if (isYouTube){
    ModifyUrl();
}
