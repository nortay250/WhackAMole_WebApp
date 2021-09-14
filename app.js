const score = document.querySelector(".score span")
const holes = document.querySelectorAll(".hole")
const playBtn = document.querySelector(".buttons .play")
const stopBtn = document.querySelector(".buttons .stop")
const cursor = document.querySelector(".cursor img")
const timeLeft = document.querySelector('#time-left')

const bgSound = new Audio("bg.mp3")
const hammerSound = new Audio("hammer_sound.mp3")


window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px"
  cursor.style.left = e.pageX + "px"

  window.addEventListener("click", () => {
    cursor.style.animation = "hit 0.1s ease"
    setTimeout(() => {
      cursor.style.removeProperty("animation")
    }, 100)
  })
})

playBtn.addEventListener("click", () => {
  playBtn.style.display = "none"
  stopBtn.style.display = "inline-block"
  let hole
  let points = 0
  let currentTime = 60
  
  let countDownTimerId = setInterval(countDown, 1000)
  console.log(timeLeft)
  const startGame = setInterval(() => {
    let arrayNo = Math.floor(Math.random() * 9)
    hole = holes[arrayNo]
    


    let image = document.createElement("img")
    image.setAttribute("src", "mole.png")
    image.setAttribute("class", "mole")
    hole.appendChild(image)


    setTimeout(() => {
      hole.removeChild(image)
    }, 600)
  }, 700)

  

  window.addEventListener("click", (e) => {
    if (e.target === hole) 
    {
      score.innerText = ++points 
      hammerSound.play()
    }
    
  })

  function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
   
    if (currentTime == 0) {
      clearInterval(startGame)
      clearInterval(countDownTimerId)
      stopBtn.style.display = "none"
      playBtn.style.display = "inline-block"      
    }
   
   }


  stopBtn.addEventListener("click", () => {
    clearInterval(startGame)
    clearInterval(countDownTimerId)
    stopBtn.style.display = "none"
    playBtn.style.display = "inline-block"
    score.innerText = 0
  })

})


