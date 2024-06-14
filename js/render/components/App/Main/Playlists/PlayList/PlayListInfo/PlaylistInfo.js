import { ButtonsEditDelete } from "../../../../../common/ButtonsEditDelete/ButtonsEditDelete.js";

 export function PlaylistInfo(somePlaylistInfo) {
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

    const buttonsContainer = ButtonsEditDelete();

    container.append(img, wrapper, buttonsContainer);

    return container;
}
