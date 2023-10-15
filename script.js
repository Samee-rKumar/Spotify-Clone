let song1 = new Audio('./Songs/Afterhours - BIR.mp3')
let song2 = new Audio('./Songs/Spaceship - AP Dhillon.mp3')
var songplaying = null
var songList = document.getElementsByClassName('songCard')
var song = 'song'
var songNumber = null

Array.from(songList).forEach(function (items) {
    items.addEventListener('click', () => {
        songNumber = eval(Array.from(songList).indexOf(items) + 1)
        if (songplaying != null) {
            songplaying.pause();
            songplaying.currentTime = 0
        }
        songplaying = eval(song + songNumber)
        songplaying.play()
        document.getElementById('pause').style.display = ''
        document.getElementById('play').style.display = 'none'
    })
})

document.getElementById('pause').onclick = () => {
    songplaying.pause();
    document.getElementById('pause').style.display = 'none'
    document.getElementById('play').style.display = ''
}

document.getElementById('play').onclick = () => {
    songplaying.play();
    document.getElementById('pause').style.display = ''
    document.getElementById('play').style.display = 'none'
}

document.getElementById('volumebar').onchange = () => {
    songplaying.volume = document.getElementById('volumebar').value / 100
}
document.getElementById('volume').onclick = () => {
    document.getElementById('mute').style.display = ''
    document.getElementById('volume').style.display = 'none'
    songplaying.volume = 0
}

document.getElementById('mute').onclick = () => {
    document.getElementById('volume').style.display = ''
    document.getElementById('mute').style.display = 'none'
    songplaying.volume = document.getElementById('volumebar').value / 100
}
// if (songplaying.duration == songplaying.currentTime) {
//     eval(song + songNumber + 1).play()
// }