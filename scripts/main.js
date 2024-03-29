

// START

const elementsDecorSavane = document.querySelectorAll('.backgroundSavaneContainer>img') // TOUTES LES IMAGES DE SAVANE
const fusilSound = document.querySelector('#fusilSound')
const fusilEmptySound= document.querySelector('#fusilEmptySound')
const finalScreen = document.querySelector('.finalScreen')
const body=document.querySelector('body')
const playMusic=document.querySelector('.playMusic')
const containerPlayMusic=document.querySelector('.containerPlayMusic')
const musiqueSavane = document.querySelector('#musiqueSavane')
const singeContainer=document.querySelector('#singeContainer')
const resultatArgent=document.querySelector('#resultatArgent')


playMusic.addEventListener(
  'click',
  ()=>{
    singeContainer.style.display='block'
    singeContainer.classList.add('animationPop')
    musiqueSavane.play()
    containerPlayMusic.style.display='none'
    elephantContainer.classList.add('animationMoving')
    for(let i=0; i<elementsDecorSavane.length; i++){
      elementsDecorSavane[i].style.display='block'
      elementsDecorSavane[i].classList.add('animationPop')
    }
    let lionStartMove = setTimeout(lionStart,9000)
    function lionStart(){
      lionContainer.style.display='block'
      lionContainer.classList.add('animationMoving')
    }
    let oiseauStartMove = setTimeout(oiseauStart,10000)
    function oiseauStart(){
      oiseauContainer.style.display='block'
      oiseauContainer.classList.add('animationMoving')
    }
    let waiterFinalScreen=setTimeout(final,30000)
    function final(){
      body.style.opacity='1'
      finalScreen.style.display='flex'
      localStorage.setItem('animalsKilled',animalsKilled)
      // Final SCREEN


      if(animalsKilled.length==0){
        resultatArgent.innerHTML='<h3>Félicitations, vous avez un coeur en <span class="orange">or</span> et un <span class="red">amour</span> sincère pour les animaux ! À présent vous pouvez voir commnent ces animaux vivent en société.</h3>'
      }
      else{
        resultatArgent.innerHTML='<h3>Bravo...vous avez réussi à récolter <span class="orange">'+argent+'$ </span>en <span class="red">tuant</span> des animaux innocents... Mais savez-vous au moins comment ces animaux vivent en société ?</h3>'
      }
    }
  }
)

function emptyGun(){
  fusilEmptySound.play()
  fusilEmptySound.currentTime=0
}

// ARGENT JOUEUR

const argentJoueur = document.querySelector('.argentJoueur h1')

let argent = 0

function getMoney(){
  argentJoueur.innerText=argent
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
    animalsKilled=[]

    function shoot(){
      if(nbMunitions>0){
        if(musicPlaying==true){
          fusilSound.play()
          fusilSound.currentTime=0
        }
        if(nbMunitions==1){
          balle3.style.display='none'
          balleEmpty3.style.display='block'
          nbMunitions--
          body.style.opacity='0'
          body.style.transition='all 1.4s'
          let waiterFinalScreen=setTimeout(final,2000)
          function final(){
            body.style.opacity='1'
            finalScreen.style.display='flex'
            localStorage.setItem('animalsKilled',animalsKilled)
            // Final SCREEN

            const resultatArgent=document.querySelector('#resultatArgent')

            if(animalsKilled.length==0){
              resultatArgent.innerHTML='<h3>Félicitations, vous avez un coeur en <span class="orange">or</span> et un <span class="red">amour</span> sincère pour les animaux ! À présent vous pouvez voir commnent ces animaux vivent en société.</h3>'
            }
            else{
              resultatArgent.innerHTML='<h3>Bravo, vous avez réussi à récolter <span class="orange">'+argent+'$ </span>en <span class="red">tuant</span> des animaux innocents ! Mais savez-vous comment ces animaux vivent en société ?</h3>'
            }
          }

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

elephant.addEventListener(
  'click',
  ()=>{
    if(nbMunitions>0){
      shoot()
      animalsKilled.push('elephant')
      argent=argent+600
      getMoney()
      elephantContainer.style.left=elephantContainer.offsetLeft+'px'
      elephant.style.display='none'
      elephantMort.style.display='block'
      elephantContainer.classList.remove('animationMoving')
    }
    else{
      emptyGun()
    }
  }
)

oiseau.addEventListener(
  'click',
  ()=>{
    if(nbMunitions>0){
      shoot()
      animalsKilled.push('quelea')
      argent=argent+360
      getMoney()
      oiseauContainer.style.left=oiseauContainer.offsetLeft+'px'
      oiseau.style.display='none'
      oiseauMort.style.display='block'
      oiseauContainer.classList.remove('animationMoving')
      oiseauContainer.classList.add('animationMortTombe')
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
      animalsKilled.push('lion')
      argent=argent+400
      getMoney()
      lionContainer.style.left=lionContainer.offsetLeft+'px'
      lion.style.display='none'
      lionMort.style.display='block'
      lionContainer.classList.remove('animationMoving')
    }
    else{
      emptyGun()
    }
  }
)

suricate.addEventListener(
  'click',
  ()=>{
    if(nbMunitions>0){
      shoot()
      animalsKilled.push('suricate')
      suricateVie=false
      argent=argent+300
      getMoney()
      suricate.style.display='none'
      terrier.style.display='none'
      suricateMort.style.display='block'
    }
    else{
      emptyGun()
    }
  }
)

let suricateVie=true

let apparitionSuricate = setInterval(suricateApparition,6000)
function suricateApparition(){
  if(suricateVie==true){
    suricate.style.display='block'
    let wait = setInterval(waitSuricate,3200)
    function waitSuricate(){
      suricate.style.display='none'
    }
  }
}

singe.addEventListener(
  'click',
  ()=>{
    if(nbMunitions>0){
      shoot()
      animalsKilled.push('singe')
      argent=argent+200
      getMoney()
      singeContainer.style.left=singeContainer.offsetLeft+'px'
      singe.style.display='none'
      singeMort.style.display='block'
      singeContainer.classList.remove('animationMoving')
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

  // SOUND

const soundButton = document.querySelector('#soundButton')
const audioOff=document.querySelector('.audioOff')

  let musicPlaying=true

  soundButton.addEventListener(
    "click",
    ()=>{
      if(musicPlaying==false){
        musiqueSavane.play()
        musicPlaying=true
        audioOff.style.display="none"
      }
      else{
        musiqueSavane.pause()
        musicPlaying=false
        audioOff.style.display="block"
      }
    }
  )



//A
