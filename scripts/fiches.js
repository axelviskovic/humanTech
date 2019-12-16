const ficheAnimal = document.querySelectorAll('.ficheAnimal')
const errorScreen = document.querySelector('.errorScreen')

// WEIGHT = HEIGHT FICHES



for(let i=0; i<ficheAnimal.length; i++){
  ficheAnimal[i].addEventListener(
    'click',
    ()=>{
      ficheAnimal[i].classList.add('current')
    }
  )
}


for(let i=0; i<ficheAnimal.length; i++){
  ficheAnimal[i].style.width=(screen.width)/2.5+'px'
  ficheAnimal[i].style.height=(screen.width)/2.5+'px'
  ficheAnimal[i].style.transform='translate('+((50*i)-50)+'%,-50%)'
  ficheAnimal[i].style.zIndex=100-i
}

// ERROR SCREEN

function testOrientation(){
  if((screen.width)<(screen.height)){
    errorScreen.style.display='flex'
  }
  else{
    errorScreen.style.display='none'
    for(let i=0; i<ficheAnimal.length; i++){
      ficheAnimal[i].style.width=(screen.width)/2.5+'px'
      ficheAnimal[i].style.height=(screen.width)/2.5+'px'
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
