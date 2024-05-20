let audioElement = new Audio("song/1.mp3")
let songIndex = 0

let masterPlay = document.querySelector("#masterPlay")
const back = document.querySelector(".fa-backward")
const next = document.querySelector(".fa-forward")
let gif = document.querySelector("#gif")
let animal = document.querySelector("#Animal")
let myProgressBar = document.querySelector("#myProgressBar")
let songItem = Array.from(document.querySelector(".songItem"))
console.log(songItem);

let songs = [
    { songName: "salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "salam-e-Ishq", filePath: "song/2.mp3", coverPath: "covers/1.jpg" },
    { songName: "salam-e-Ishq", filePath: "song/3.mp3", coverPath: "covers/1.jpg" },

]



songItem.forEach((element, i) => {
    element.querySelector("img")[0].src = songs[i].coverPath;
});
// audioElement.Play();

// Handle play/pause click
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime < 0) {
        audioElement.play()
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause()
        masterPlay.classList.remove("fa-circle-pause")
        masterPlay.classList.add("fa-circle-play")
        gif.style.opacity = 0;
    }
})
// listen to event

audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress

})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100
})
// Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element) => {
//     element.addEventListener("click", (e) => {
//         console.log(e.target);
//     })
// })

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play")
        e.target.classList.add("fa-circle-pause")
        audioElement.src = `song/${songIndex}.mp3`
        animal.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0
        audioElement.play()
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")

    })
})

next.addEventListener("click", () => {
    if (songIndex >= 3) {
        songIndex = 1
    }
    else {
        songIndex += 1
    }
    audioElement.src = `song/${songIndex}.mp3`
    animal.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0
    audioElement.play()
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause")
})
back.addEventListener("click", () => {
    if (songIndex <= 1) {
        songIndex = 1
    }
    else {
        songIndex -= 1
    }
    audioElement.src = `song/${songIndex}.mp3`
    animal.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0
    audioElement.play()
    masterPlay.classList.remove("fa-circle-play")
    masterPlay.classList.add("fa-circle-pause")

})