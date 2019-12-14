

// START

const startScreen = document.querySelector('.startScreen')
const buttonStart = document.querySelector('.buttonStart')
const elementsDecorSavane = document.querySelectorAll('.backgroundSavaneContainer>img') // TOUTES LES IMAGES DE SAVANE

buttonStart.addEventListener(
  'click',
  ()=>{
    startScreen.style.display='none'
    for(let i=0; i<elementsDecorSavane.length; i++){
      elementsDecorSavane[i].classList.add('animationPop')
    }
  }
)


// ANIMATION ANIMAUX



// BALLES

const playerScreen = document.querySelector('.playerScreenContainer')
const balle1 = document.querySelector('.munitionsContainer>img:nth-child(1)')
const balle2 = document.querySelector('.munitionsContainer>img:nth-child(3)')
const balle3 = document.querySelector('.munitionsContainer>img:nth-child(5)')
const balleEmpty1 = document.querySelector('.munitionsContainer>img:nth-child(2)')
const balleEmpty2 = document.querySelector('.munitionsContainer>img:nth-child(4)')
const balleEmpty3 = document.querySelector('.munitionsContainer>img:nth-child(6)')



let nbMunitions = 3

  playerScreen.addEventListener(
    'click',
    ()=>{
      if(nbMunitions==1){
        balle3.style.display='none'
        balleEmpty3.style.display='block'
      }
      if(nbMunitions==2){
        balle2.style.display='none'
        balleEmpty2.style.display='block'
        nbMunitions=1
      }
      if(nbMunitions==3){
        balle1.style.display='none'
        balleEmpty1.style.display='block'
        nbMunitions=2
      }
    }
  )
