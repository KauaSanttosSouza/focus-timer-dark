import { 
   inpFlorest, 
   inpRain,
   inpCoffe,
   inpFire
} from "./elements.js"

export default function sound() {
const soundFlorest = new Audio("https://github.com/KauaSanttosSouza/sounds-ambient/blob/main/Floresta.wav?raw=true")
const soundRain = new Audio("https://github.com/KauaSanttosSouza/sounds-ambient/blob/main/Chuva.wav?raw=true")
const soundCoffe = new Audio("https://github.com/KauaSanttosSouza/sounds-ambient/blob/main/Cafeteria.wav?raw=true")
const soundFire = new Audio("https://github.com/KauaSanttosSouza/sounds-ambient/blob/main/Lareira.wav?raw=true")

function FlorestPlay() {
   soundFlorest.loop = true;
   soundFlorest.play()

   inpFlorest.value = 50
   inpFlorest.addEventListener('input', () => {
      soundFlorest.volume = inpFlorest.value / 100
   })
}

function FlorestPause() {
   soundFlorest.pause()
}

function RainPlay() {
   soundRain.loop = true;
   soundRain.play()

   inpRain.value = 50
   inpRain.addEventListener('input', () => {
      soundRain.volume = inpRain.value / 100
   })
}
function RainPause() {
   soundRain.pause()
}

function CoffePlay() {
   soundCoffe.loop = true;
   soundCoffe.play()

   inpCoffe.value = 50
   inpCoffe.addEventListener('input', () => {
      soundCoffe.volume = inpCoffe.value / 100
   })
}
function CoffePause() {
   soundCoffe.pause()
}

function FirePlay() {
   soundFire.loop = true;
   soundFire.play()

   inpFire.value = 50
   inpFire.addEventListener('input', () => {
      soundFire.volume = inpFire.value / 100
   })
}
function FirePause() {
   soundFire.pause()
}

return {
   FlorestPlay,
   FlorestPause,
   RainPlay,
   RainPause,
   CoffePlay,
   CoffePause,
   FirePlay,
   FirePause,
}


}