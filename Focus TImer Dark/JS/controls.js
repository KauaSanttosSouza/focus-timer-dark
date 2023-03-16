


export default function control({
   buttonPlay,
   buttonPause,
   buttonStop,
   buttonSet,
   buttonFlorestPlay,
   buttonFlorestPause,
   buttonRainPlay,
   buttonRainPause,
   buttonCoffePlay,
   buttonCoffePause,
   buttonFirePlay,
   buttonFirePause,
   body,
   letters,
   inpFlorest,
   inpRain,
   inpCoffe,
   inpFire,
   imgFlorest,
   imgFlorestDarkMode,
   imgRain,
   imgRainDarkMode,
   imgCoffe,
   imgCoffeDarkMode,
   imgFire,
   imgFireDarkMode,
   imgButtonPlay,
   imgButtonPause,
   imgButtonStop,
   imgButtonSet,
   imgButtonUp,
   imgButtonDown,
   imgButtonPlayDarkMode,
   imgButtonPauseDarkMode,
   imgButtonStopDarkMode,
   imgButtonSetDarkMode,
   imgButtonUpDarkMode,
   imgButtonDownDarkMode,
   buttonSun,
   buttonMoon
}) {

   function darkMode(){
      buttonSun.classList.add("hide")
      buttonMoon.classList.remove("hide")

      body.classList.add("DarkMode")

      buttonFlorestPlay.classList.add("DarkMode")
      buttonFlorestPause.classList.add("DarkMode")
      buttonRainPlay.classList.add("DarkMode") 
      buttonRainPause.classList.add("DarkMode")  
      buttonCoffePlay.classList.add("DarkMode")      
      buttonCoffePause.classList.add("DarkMode")      
      buttonFirePlay.classList.add("DarkMode")      
      buttonFirePause.classList.add("DarkMode")

      letters.classList.add("DarkMode")  

      inpFlorest.classList.add("DarkMode")
      inpRain.classList.add("DarkMode")
      inpCoffe.classList.add("DarkMode")
      inpFire.classList.add("DarkMode")

      imgFlorest.classList.add("hide")
      imgFlorestDarkMode.classList.remove("hide")
      imgRain.classList.add("hide")
      imgRainDarkMode.classList.remove("hide")
      imgCoffe.classList.add("hide")
      imgCoffeDarkMode.classList.remove("hide")
      imgFire.classList.add("hide")
      imgFireDarkMode.classList.remove("hide")

      imgButtonPlay.classList.add("hide")
      imgButtonPlayDarkMode.classList.remove("hide")
      imgButtonPause.classList.add("hide")
      imgButtonPauseDarkMode.classList.remove("hide")
      imgButtonStop.classList.add("hide")
      imgButtonStopDarkMode.classList.remove("hide")
      imgButtonSet.classList.add("hide")
      imgButtonSetDarkMode.classList.remove("hide")
      imgButtonUp.classList.add("hide")
      imgButtonUpDarkMode.classList.remove("hide")
      imgButtonDown.classList.add("hide")
      imgButtonDownDarkMode.classList.remove("hide")
      
   }

   function darkModeReset(){
      buttonSun.classList.remove("hide")
      buttonMoon.classList.add("hide")
      
      body.classList.remove("DarkMode")

      buttonFlorestPlay.classList.remove("DarkMode")
      buttonFlorestPause.classList.remove("DarkMode")
      buttonRainPlay.classList.remove("DarkMode") 
      buttonRainPause.classList.remove("DarkMode")  
      buttonCoffePlay.classList.remove("DarkMode")      
      buttonCoffePause.classList.remove("DarkMode")      
      buttonFirePlay.classList.remove("DarkMode")      
      buttonFirePause.classList.remove("DarkMode")

      letters.classList.remove("DarkMode")  

      inpFlorest.classList.remove("DarkMode")
      inpRain.classList.remove("DarkMode")
      inpCoffe.classList.remove("DarkMode")
      inpFire.classList.remove("DarkMode")

      imgFlorest.classList.remove("hide")
      imgFlorestDarkMode.classList.add("hide")
      imgRain.classList.remove("hide")
      imgRainDarkMode.classList.add("hide")
      imgCoffe.classList.remove("hide")
      imgCoffeDarkMode.classList.add("hide")
      imgFire.classList.remove("hide")
      imgFireDarkMode.classList.add("hide")

      imgButtonPlay.classList.remove("hide")
      imgButtonPlayDarkMode.classList.add("hide")
      imgButtonPause.classList.remove("hide")
      imgButtonPauseDarkMode.classList.add("hide")
      imgButtonStop.classList.remove("hide")
      imgButtonStopDarkMode.classList.add("hide")
      imgButtonSet.classList.remove("hide")
      imgButtonSetDarkMode.classList.add("hide")
      imgButtonUp.classList.remove("hide")
      imgButtonUpDarkMode.classList.add("hide")
      imgButtonDown.classList.remove("hide")
      imgButtonDownDarkMode.classList.add("hide")
   }

   function reset(){
      buttonStop.classList.add("hide")
      buttonSet.classList.remove("hide")
      buttonPause.classList.add("hide")
      buttonPlay.classList.remove("hide")
   }

   function FlorestPlayPause() {
      buttonFlorestPlay.classList.toggle("hide")
      buttonFlorestPause.classList.toggle("hide")
   }
   function RainPlayPause() {
      buttonRainPlay.classList.toggle("hide")
      buttonRainPause.classList.toggle("hide")
   }
   function CoffePlayPause() {
      buttonCoffePlay.classList.toggle("hide")
      buttonCoffePause.classList.toggle("hide")
   }
   function FirePlayPause() {
      buttonFirePlay.classList.toggle("hide")
      buttonFirePause.classList.toggle("hide")
   }
 
   function play() {
      buttonPlay.classList.add("hide")
      buttonPause.classList.remove("hide")
      buttonSet.classList.add("hide")
      buttonStop.classList.remove("hide")
   }
   function pause() {
      buttonPause.classList.add("hide")
      buttonPlay.classList.remove("hide")
   }
   function stop() {
      reset()
   }
   function getMinutes() {
      let newMinutes = prompt('Qual é o tempo?')
      return newMinutes
   }

   return {
      reset,
      FlorestPlayPause,
      RainPlayPause,
      CoffePlayPause,
      FirePlayPause,
      play,
      pause,
      stop,
      getMinutes,
      darkMode,
      darkModeReset
   }
}