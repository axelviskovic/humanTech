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
