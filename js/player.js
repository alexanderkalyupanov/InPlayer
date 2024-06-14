const data = {
    playlists: [
      {
        playlistInfo: {
          id: "1-0",
          title: "Hip-Hop Hits",
          coverImgUrl: "img/cardImage/image1.jpeg",
          tracksCount: 4,
        },
        tracks: [
          {
            trackId: "1",
            artistName: "Eminem",
            trackTitle: "Rap God",
            isHot: true,
            trackFileUrl: "audio/Eminem - Rap God.mp3",
            trackCoverImgUrl: "img/cardImage/trackList/track1.jpeg",
          },
          {
            trackId: "2",
            artistName: "50 cent",
            trackTitle: "In da Club",
            isHot: false,
            trackFileUrl: "audio/50cent%20-%20In%20da%20club.mp3",
            trackCoverImgUrl: "img/cardImage/trackList/track2.jpeg",
          },
          {
            trackId: "3",
            artistName: "DMX",
            trackTitle: "X Gon' Give It To Ya",
            isHot: true,
            trackFileUrl: "audio/DMX%20-%20X%20Gon'%20Give%20It%20To%20Ya.mp3",
            trackCoverImgUrl: "img/cardImage/trackList/track3.jpeg",
          },
          {
            trackId: "4",
            artistName: "Eminem",
            trackTitle: "feat 50 Cent, Cashis, Lloyd Banks - You Don't Know",
            isHot: false,
            trackFileUrl:
              "audio/Eminem%20-%20You%20Don't%20Know%20(feat.%2050%20cent,%20Lloyd%20Banks%20and%20Cashis).mp3",
            trackCoverImgUrl: "img/cardImage/trackList/track4.jpeg",
          },
        ],
      },
      {
        playlistInfo: {
          id: "1-1",
          title: "Rap Hits 1990s",
          coverImgUrl: "img/cardImage/image2.jpeg",
          tracksCount: 4,
        },
        tracks: [
          {
            trackId: "5",
            artistName: "Public Enemy",
            trackTitle: "Fight The Power",
            isHot: true,
            trackFileUrl: "audio/Public Enemy - Fight The Power.mp3",
            trackCoverImgUrl: "img/cardImage/trackList/track5.jpeg",
          },
          {
            trackId: "6",
            artistName: "Vanila Ice",
            trackTitle: "Ice Ice Baby",
            isHot: false,
            trackFileUrl: "audio/Vanila Ice - Ice Baby.mp3",
            trackCoverImgUrl: "img/cardImage/trackList/track6.jpeg",
          },
          {
            trackId: "7",
            artistName: "MC Hammer",
            trackTitle: "You Can’t Touch This",
            isHot: true,
            trackFileUrl:
              "audio/Mc%20Hammer%20-%20You%20Can't%20Touch%20This.mp3",
            trackCoverImgUrl: "img/cardImage/trackList/track7.jpeg",
          },
          {
            trackId: "8",
            artistName: "Brand Nubian",
            trackTitle: "Brand Nubian",
            isHot: false,
            trackFileUrl: "audio/Brand%20Nubian%20-%20Brand%20Nubian.mp3",
            trackCoverImgUrl: "img/cardImage/trackList/track8.jpeg",
          },
        ],
      },
    ],
  };
  
function App(someData) {
    const container = document.createElement("div");
    container.classList.add("App")
    // ..app...

    container.append(
        Header(),
        Main(someData)
    )

    return container
}

//

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

// Main

function Main(someData) {
    const container = document.createElement("main");

    container.append(
        AddPlaylistPanel(),
        Playlists(someData)
    )

    return container
}

// AddPlayListPanel

function  AddPlaylistPanel() {
    const container = document.createElement("div");
    container.classList.add("add-playlist-panel");

    const appHeader = document.createElement("h1")
    appHeader.innerText = "My playlists";
    appHeader.classList.add("title")

    const addButton = document.createElement("button");
    addButton.innerText = "Add Playlist";
    addButton.classList.add("button")

    container.append(
        appHeader,
        addButton
    )

    return container
}

// Playlists

function Playlists(someData) {
    const container = document.createElement("div");
    container.classList.add("playlists");

    for (let i = 0; i < someData.playlists.length; i++) {
        container.append(Playlist(data.playlists[i]))
    }

    return container;
}

// Playlist

function PlayList(somePlaylist) {

    const {playlistInfo, tracks} = somePlaylist;

    const container = document.createElement("article");
    container.classList.add("playlist");
    container.append(
        PlaylistInfo(playlistInfo),
        Tracklist(tracks)
    )

    return container;
}

// PlaylistInfo, Tracklist

function PlaylistInfo(somePlaylistInfo) {
    const {coverImgUrl, title, tracksCount} = somePlaylistInfo;

    const container = document.createElement("div")
    container.classList.add("playlist-info")

    const img = document.createElement("img")
    img.classList.add("playlist-cover-image")
    img.src = coverImgUrl;

    const wrapper = document.createElement("div");

    const titleElement = document.createElement("h2");
    titleElement.classList.add("title");
    titleElement.innerText = title

    const tracksCountElement = document.createElement("div");
    tracksCountElement.classList.add("tracks-count")
    tracksCountElement.innerText = tracksCount + " tracks"

    wrapper.append(titleElement, tracksCountElement)

    // ButtonsEditDelete
    // const buttonsContainer = document.createElement("div");
    // buttonsContainer.classList.add("buttons-container");

    // const editBtn = document.createElement("button");
    // const editBtnImg = document.createElement("img")
    // editBtnImg.src = "img/icons/edit.svg";
    // editBtn.append(editBtnImg);

    // const delBtn = document.createElement("button");
    // const delBtnImg = document.createElement("img")
    // delBtnImg.src = "img/icons/basket.svg";
    // delBtn.append(delBtnImg);

    // buttonsContainer.append(
    //     editBtn,
    //     delBtn
    // )

    container.append(img, wrapper, ButtonsEditDelete());

    return container;
}

function Tracklist(someTracks) {
    const container = document.createElement("div")
    container.classList.add("tracklist")

    container.append(
        AddTrackPanel(),
        List(someTracks)
    )

    return container;
}

// AddTrackPanel

function AddTrackPanel() {
    const container = document.createElement("div");
    container.classList.add("add-track-panel");

    const title = document.createElement("h3");
    title.innerText = "Tracks";
    title.classList.add("tracklist-title");

    const addTrackButton = document.createElement("button");
    addTrackButton.classList.add("button-add-track")

    const addTrackButtonImg = document.createElement("img");
    addTrackButtonImg.src = "img/icons/add.svg"

    addTrackButton.append(addTrackButtonImg, "Add Track")
    container.append(title, addTrackButton)

    return container
}

// List

function List(someTracks) {
    const container = document.createElement("ul");
    container.classList.add("list");

    for (let i = 0; i < someTracks.length; i++) {
        container.append(Track(someTracks[i]))
    }

    return container

}

// Track

{/* <img class="track-cover-image" src="img/cardImage/trackList/track1.jpeg"
alt="track-cover"> */}

function Track(someTrack) {
    const {trackCoverImgUrl, ...restTrackData} = someTrack;

    const container = document.createElement("li");
    container.classList.add("track-element");

    const trackCoverImg = document.createElement("img");
    trackCoverImg.classList.add("track-cover-image");
    trackCoverImg.src = trackCoverImgUrl;

    container.append(
        trackCoverImg,
        TrackDetails(restTrackData)
    )

    return container

}

// TrackDetails

function TrackDetails(someRestTrackData) {
    const { trackFileUrl, ...restTrackData } = someRestTrackData

    const container = document.createElement("div");
    container.classList.add("track-details");

    const audio = document.createElement("audio");
    audio.src = trackFileUrl;
    audio.controls = true;

    container.append(
        TrackTopLine(restTrackData),
        audio
    )

    return container

}

// TrackTopLine

function TrackTopLine(someRestTrackData) {

    const { isHot, artistName, trackTitle } = someRestTrackData
    const container = document.createElement("div");
    container.classList.add("track-top-line");

    if (isHot) {
        const trackHotImg = document.createElement("img");
        trackHotImg.classList.add("track-status");
        trackHotImg.src = "img/icons/hot.svg"
        container.append(trackHotImg)
    }
    const trackInfo = document.createElement("div")
    trackInfo.classList.add("track-info")

    const trackName = document.createElement("div");
    trackName.classList.add("track-name")
    trackName.innerText = artistName + "-" + trackTitle;
    trackInfo.append(
        trackName, 
        ButtonsEditDelete()
    )

    container.append(trackInfo)

    return container

}

//         ButtonsEditDelete()

function ButtonsEditDelete() {
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

    const editBtn = document.createElement("button")
    const editBtnImg = document.createElement("img");
    editBtnImg.src = "img/icons/edit.svg"
    editBtn.append(editBtnImg)

    const delBtn = document.createElement("button");
    const delBtnImg = document.createElement("img");
    delBtnImg.src = "img/icons/basket.svg";
    delBtn.append(delBtnImg)

    buttonsContainer.append(editBtn, delBtn);
    return buttonsContainer;
}



// createElement - функция для создания элементов на странице

// function createElement(typeofElement, param) {
//     const container = document.createElement(typeofElement);
//     if (typeof param === "string") {
//         container.classList.add(param)
//     } else if (typeof param === "object") {
//         for (const key in param) {

//         }
//     }
//     return container
// }


// render DOM

function render(someData) {
  const root = document.getElementById("root");
    root.append(
    App(someData) // => container
)
}

render(data)

