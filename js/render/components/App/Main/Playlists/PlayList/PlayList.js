export function PlayList(somePlaylist) {

    const {playlistInfo, tracks} = somePlaylist;

    const container = document.createElement("article");
    container.classList.add("playlist");
    container.append(
        PlaylistInfo(playlistInfo),
        Tracklist(tracks)
    )

    return container;
}
