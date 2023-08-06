var website = "https://www.github.io/TotallyTrustableWebsite"
var permissions = [
    `Do you allow "${website}" to have access to your notifications?`,
    `Do you allow "${website}" to have access to your contacts?`,
    `Do you allow "${website}" to have access to your microphone?`,
    `Do you allow "${website}" to have access to your clipboard?`,
    `Do you allow "${website}" to have access to your camera?`,
    `Do you allow "${website}" to have access to your location?`,
    `Do you allow "${website}" to have access to your motion sensors?`,
    `Do you allow "${website}" to have access to automatically download files?`,
    `Do you allow "${website}" to have access to your payment methods?`,
    `Do you allow "${website}" to have access to browse your local files?`,
    `Do you allow "${website}" to have access to edit / delete local files?`,
    `Do you allow "${website}" to have access to your personal data?`,
    `Do you allow "${website}" to have access and control over your mouse and keyboard input?`,
]

var RICKTIME = false

let CurrentIteration = 0
function CreatePopup() {
    let DenyDelay = 100

    if (document.querySelector(".title").textContent == "😭 These Permisions are Neccessary! 😭") {
        document.querySelector(".title").textContent = "😡 Totally Trustable Website! 😡"
        document.querySelector(".content").textContent = "😡 To use this website, YOU HAVE TO accept these permissions. 😡"
    }

    var NewPopupOuter = document.createElement("div");
    var NewPopupTop = document.createElement("div");
    var NewPopupBottom = document.createElement("div");
    var NewPopupText = document.createElement("div");
    var NewPopupAccept = document.createElement("button");
    var NewPopupDeny = document.createElement("button");

    NewPopupOuter.classList.add("popup-outer");
    NewPopupTop.classList.add("popup-top")
    NewPopupBottom.classList.add("popup-bottom")
    NewPopupText.classList.add("popup-text")
    NewPopupAccept.classList.add("popup-accept")
    NewPopupDeny.classList.add("popup-deny")

    var RandomText = permissions[CurrentIteration]
    if (CurrentIteration != permissions.length) {
        CurrentIteration++
        NewPopupText.textContent = RandomText
        NewPopupAccept.textContent = "Accept."
        NewPopupDeny.textContent = "deny"
    
        NewPopupAccept.onclick = function() {
            document.querySelector(".popup-outer").style.left = "-35vw"
            document.querySelector(".popup-outer").style.filter = "brightness(90%)"
            setTimeout(function() {
                CreatePopup()
                setTimeout(function() {
                    document.querySelector(".popup-outer").remove()
                }, 600)
            }, 400)
        }
        NewPopupDeny.addEventListener("mouseover", function() {
            setTimeout(function() {
                if (document.querySelector(".popup-deny").classList.contains("random-position")) {
                    document.querySelector(".popup-deny").style.left = Math.floor(Math.random() * (window.innerWidth - document.querySelector(".popup-deny").clientWidth)) + "px"
                    document.querySelector(".popup-deny").style.top = Math.floor(Math.random() * (window.innerHeight - document.querySelector(".popup-deny").clientHeight)) + "px";
                }
                else {
                    document.querySelector(".popup-deny").classList.add("random-position")
                    document.querySelector(".popup-deny").style.left = Math.floor(Math.random() * (window.innerWidth - document.querySelector(".popup-deny").clientWidth)) + "px"
                    document.querySelector(".popup-deny").style.top = Math.floor(Math.random() * (window.innerHeight - document.querySelector(".popup-deny").clientHeight)) + "px";
                }
            }, DenyDelay)
        })
        NewPopupDeny.onclick = function() {
            document.querySelector(".title").textContent = "😭 These Permisions are Neccessary! 😭"
            document.querySelector(".content").textContent = "😭 These Permisions are Neccessary! 😭"
    
            document.querySelector(".popup-deny").style.width = "3%"
            document.querySelector(".popup-deny").style.transition = "0.05"
            DenyDelay = 0
        }
    
    
        NewPopupTop.appendChild(NewPopupText)
    
        NewPopupBottom.appendChild(NewPopupAccept)
        NewPopupBottom.appendChild(NewPopupDeny)
        
        NewPopupOuter.appendChild(NewPopupTop)
        NewPopupOuter.appendChild(NewPopupBottom)
    
        document.body.appendChild(NewPopupOuter)
    }
    else {
        RICKTIME = true
        document.querySelector(".content").remove()
      
        document.querySelector(".title").style.fontSize = "medium"
        document.querySelector(".title-outer").style.height = "5vh"
        document.querySelector(".content-outer").style.height = "95vh"
        
        var NewVideo = document.createElement("video")
        NewVideo.src = "RICKROLE.mp4"
        NewVideo.autoplay = true;
        NewVideo.controls = false;
        document.querySelector(".content-outer").appendChild(NewVideo)
        
        const elem = document.documentElement; // Get the root element of the document (the <html> element)
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari, Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
    }
}

CreatePopup()

document.body.onclick = function() {
    if (RICKTIME) {
        window.open("video.html", "", "width=500, height=500");
    }
}