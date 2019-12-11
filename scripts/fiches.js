const ficheAnimal = document.querySelectorAll('.ficheAnimal')
const errorScreen = document.querySelector('.errorScreen')

// WEIGHT = HEIGHT FICHES


for(let i=0; i<ficheAnimal.length; i++){
  ficheAnimal[i].style.width=(screen.width)/2+'px'
  ficheAnimal[i].style.height=(screen.width)/2+'px'
}

// ERROR SCREEN

function testOrientation(){
  if((screen.width)<(screen.height)){
    errorScreen.style.display='flex'
  }
  else{
    errorScreen.style.display='none'
    for(let i=0; i<ficheAnimal.length; i++){
      ficheAnimal[i].style.width=(screen.width)/2+'px'
      ficheAnimal[i].style.height=(screen.width)/2+'px'
    }
  }
}
testOrientation()

window.addEventListener(
  'orientationchange',
  ()=>{
    testOrientation()
  }
)
