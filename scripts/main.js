

// START

const startScreen = document.querySelector('.startScreen')
const buttonStart = document.querySelector('.buttonStart')
const elementsDecorSavane = document.querySelectorAll('.backgroundSavaneContainer>img') // TOUTES LES IMAGES DE SAVANE
const musicSavane = document.querySelector('#musicSavane')
const fusilSound = document.querySelector('#fusilSound')
const fusilEmptySound= document.querySelector('#fusilEmptySound')
const elementsDecorFerme = document.querySelectorAll('.backgroundFermeContainer>img') // TOUTES LES IMAGES DE SAVANE
const backgroundFermeContainer=document.querySelector('.backgroundFermeContainer')
const backgroundSavaneContainer=document.querySelector('.backgroundSavaneContainer')

buttonStart.addEventListener(
  'click',
  ()=>{
    musicSavane.play()
    elephantContainer.classList.add('animationMoving')
    startScreen.style.display='none'
    for(let i=0; i<elementsDecorSavane.length; i++){
      elementsDecorSavane[i].classList.add('animationPop')
    }
    let lionStartMove = setTimeout(lionStart,1000)
    function lionStart(){
      lionContainer.style.display='block'
      lionContainer.classList.add('animationMoving')
    }
    let changeBg=setTimeout(changeBackground,20000)
    function changeBackground(){
      for(let i=0; i<elementsDecorSavane.length; i++){
        elementsDecorSavane[i].classList.add('animationDepop')
        let apparitionFerme = setTimeout(ferme,3000)
        function ferme(){
          backgroundSavaneContainer.style.display='none'
          for(let i=0; i<elementsDecorFerme.length; i++){
            backgroundFermeContainer.style.display='block'
            elementsDecorFerme[i].classList.add('animationPop')
          }
        }
      }
    }

  }
)

function emptyGun(){
  fusilEmptySound.play()
  fusilEmptySound.currentTime=0
}

// BALLES

const zoneTir = document.querySelector('.zoneTir')
const balle1 = document.querySelector('.munitionsContainer>img:nth-child(1)')
const balle2 = document.querySelector('.munitionsContainer>img:nth-child(3)')
const balle3 = document.querySelector('.munitionsContainer>img:nth-child(5)')
const balleEmpty1 = document.querySelector('.munitionsContainer>img:nth-child(2)')
const balleEmpty2 = document.querySelector('.munitionsContainer>img:nth-child(4)')
const balleEmpty3 = document.querySelector('.munitionsContainer>img:nth-child(6)')



let nbMunitions = 3,
    currentAnimal = ''

    function shoot(){
      if(nbMunitions>0){
        fusilSound.play()
        fusilSound.currentTime=0
        if(nbMunitions==1){
          balle3.style.display='none'
          balleEmpty3.style.display='block'
          nbMunitions--
        }
        if(nbMunitions==2){
          balle2.style.display='none'
          balleEmpty2.style.display='block'
          nbMunitions--
        }
        if(nbMunitions==3){
          balle1.style.display='none'
          balleEmpty1.style.display='block'
          nbMunitions--
        }
      }
      else{
        emptyGun()
      }
    }

// ANIMALS MOVING

const elephantContainer = document.querySelector('#elephantContainer')
const elephant = document.querySelector('#elephant')
const elephantMort = document.querySelector('#elephantMort')
const lionContainer = document.querySelector('#lionContainer')
const lion = document.querySelector('#lion')
const lionMort = document.querySelector('#lionMort')

elephant.addEventListener(
  'click',
  ()=>{
    if(nbMunitions>0){
      shoot()
      elephantContainer.style.left=elephantContainer.offsetLeft+'px'
      elephant.style.display='none'
      elephantMort.style.display='block'
      elephantContainer.classList.remove('animationMoving')
      let disparition=setTimeout(opacityDecrease,2000)
      function opacityDecrease(){
        elephantContainer.style.transition='2s'
        elephantContainer.style.opacity='0'
      }
    }
    else{
      emptyGun()
    }
  }
)

lion.addEventListener(
  'click',
  ()=>{
    if(nbMunitions>0){
      shoot()
      lionContainer.style.left=lionContainer.offsetLeft+'px'
      lion.style.display='none'
      lionMort.style.display='block'
      lionContainer.classList.remove('animationMoving')
      let disparition=setTimeout(opacityDecrease,2000)
      function opacityDecrease(){
        lionContainer.style.transition='2s'
        lionContainer.style.opacity='0'
      }
    }
    else{
      emptyGun()
    }
  }
)




  zoneTir.addEventListener(
    'click',
    ()=>{
      shoot()

    }
  )







//a
