const data = {
    playlists: [
        {
            playlistInfo: {
                id: "1-0",
                title: "Hip-Hop Hits",
                coverImgUrl: "img/cardImage/image1.jpeg",
                trackCount: 4,
            },
            tracks: [
                {
                    trackId: "1",
                    artistName: "Eminem",
                    traskTitle: "Rap God",
                    isHot: true,
                    trackFileUrl: "audio/Eminem - Rap God.mp3",
                    trackCoverImgUrl: "img/cardImage/trackList/track1.jpeg",
                },
                {
                    trackId: "2",
                    artistName: "50 cent",
                    traskTitle: "In da Club",
                    isHot: false,
                    trackFileUrl: "audio/50cent%20-%20In%20da%20club.mp3",
                    trackCoverImgUrl: "img/cardImage/trackList/track2.jpeg",
                }
            ]
        },
        {
            playlistInfo: {
                id: "1-1",
                title: "Rap Hits 1990s",
                coverImgUrl: "img/cardImage/image2.jpeg",
                trackCount: 4,
            },
            tracks: [
                {
                    trackId: "5",
                    artistName: "Public Enemy",
                    traskTitle: "Fight The Power",
                    isHot: true,
                    trackFileUrl: "audio/Public%20Enemy%20-%20Fight%20The%20Power.mp3",
                    trackCoverImgUrl: "img/cardImage/trackList/track5.jpeg",
                },
                {
                    trackId: "6",
                    artistName: "Vanila Ice",
                    traskTitle: "Ice Ice Baby",
                    isHot: false,
                    trackFileUrl: "audio/Vanila%20Ice%20-%20Ice%20Baby.mp3",
                    trackCoverImgUrl: "img/cardImage/trackList/track6.jpeg",
                },
            ]
        },
    ]
}

function App() {
    const container = document.createElement("div");
    container.classList.add("App")
    // ..app...

    container.append(
        Header(),
        // Main()
    )

    return container
}

//
/* 
<header>
<div class="header-container">
    <img src="img/logo/logo.svg" alt="logo">
    <div class="logo-name">InPlayer</div>
</div>
</header> */


function Header() {
    const header = document.createElement("header")

    const headerContainer = document.createElement("div")
    headerContainer.classList.add("header-container")

    const headerImg = document.createElement("img")
    headerImg.src = "img/logo/logo.svg";

    const headerLogo = document.createElement("div")
    headerLogo.innerText =  "InPlayer"
    headerLogo.classList.add("logo-name")

    headerContainer.append(headerImg, headerLogo)
    header.append(headerContainer)


    return header 
}


const root = document.getElementById("root");

root.append(
    App() // => container
)