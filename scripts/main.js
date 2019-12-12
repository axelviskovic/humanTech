// ERROR SCREEN

const errorScreen = document.querySelector('.errorScreen')

function testOrientation(){
  if((screen.width)<(screen.height)){
    errorScreen.style.display='flex'
  }
  else{
    errorScreen.style.display='none'
  }
}
testOrientation()

window.addEventListener(
  'orientationchange',
  ()=>{
    testOrientation()
  }
)

// START

const startScreen = document.querySelector('.startScreen')
const buttonStart = document.querySelector('.buttonStart')
const elementsDecorSavane = document.querySelectorAll('.backgroundSavaneContainer img') // TOUTES LES IMAGES DE SAVANE

buttonStart.addEventListener(
  'click',
  ()=>{
    startScreen.style.display='none'
    for(let i=0; i<elementsDecorSavane.length; i++){
      elementsDecorSavane[i].classList.add('animationPop')
    }
  }
)
