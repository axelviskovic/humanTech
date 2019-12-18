const text1 = document.querySelector('#text1')
const text2 = document.querySelector('#text2')
const text3 = document.querySelector('#text3')
const text4 = document.querySelector('#text4')
const text5 = document.querySelector('#text5')
const text6 = document.querySelector('#text6')
const text7 = document.querySelector('#text7')
const text8 = document.querySelector('#text8')
const indicationsContainer = document.querySelector('.indicationsContainer')
const antilope = document.querySelector('#antilope')
const lionroi = document.querySelector('#lionroi')
const lionennemi = document.querySelector('#lionennemi')
const lionnes = document.querySelector('#lionnes')


let text = 1

const apparitionInstruction = setTimeout(apparition,4000)
function apparition(){
  indicationsContainer.style.display='flex'
}

// Premier message affiché


window.addEventListener(
  'keypress',
  ()=>{
    if(text==8 && indicationsContainer.style.display=='flex'){
      text8.style.display='none'
      indicationsContainer.style.display='none'
      text++
    }
    if(text==7 && indicationsContainer.style.display=='flex'){
      text7.style.display='none'
      indicationsContainer.style.display='none'
      text8.classList.add('animationDefile')
      lionnes.style.transform='scale(1)'
      lionnes.style.opacity='.8'
      let apparitionInstruction = setTimeout(apparition, 2000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      text++
    }
    if(text==6 && indicationsContainer.style.display=='flex'){
      text6.style.display='none'
      indicationsContainer.style.display='none'
      text7.classList.add('animationDefile')
      lionennemi.style.transform='scale(1)'
      lionennemi.style.opacity='0.8'
      let apparitionInstruction = setTimeout(apparition, 2000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      let waiterGuetteur = setTimeout(waitGuetteur,1000)
      function waitGuetteur(){
        lionnes.style.transform='scale(1.5)'
        lionnes.style.opacity='1'
      }
      text++
    }
    if(text==5 && indicationsContainer.style.display=='flex'){
      text5.style.display='none'
      text6.classList.add('animationDefile')
      indicationsContainer.style.display='none'
      lionroi.style.transform='scale(1)'
      lionroi.style.opacity='0.8'
      let waiterGuetteur = setTimeout(waitGuetteur,1000)
      function waitGuetteur(){
        lionennemi.style.transform='scale(1.5)'
        lionennemi.style.opacity='1'
      }
      let apparitionInstruction = setTimeout(apparition, 2000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      text++
    }
    if(text==4 && indicationsContainer.style.display=='flex'){
      text4.style.display='none'
      text5.classList.add('animationDefile')
      indicationsContainer.style.display='none'
      antilope.style.transform='scale(1)'
      antilope.style.opacity='0.8'
      let waiter = setTimeout(waitSuricate,1000)
      function waitSuricate(){
        lionroi.style.transform='scale(1.5)'
        lionroi.style.opacity='1'
      }
      let apparitionInstruction = setTimeout(apparition, 2000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      text++
    }
    if(text==3 && indicationsContainer.style.display=='flex'){
      text3.style.display='none'
      indicationsContainer.style.display='none'
      text4.classList.add('animationDefile')
      antilope.style.transform='scale(1.5)'
      antilope.style.opacity='1'
      let apparitionInstruction = setTimeout(apparition, 2000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      text++
    }
    if(text==2 && indicationsContainer.style.display=='flex'){
      text2.style.display='none'
      indicationsContainer.style.display='none'
      text3.classList.add('animationDefile')
      let apparitionInstruction = setTimeout(apparition, 2000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      text++
    }
    if(text==1 && indicationsContainer.style.display=='flex'){
      text1.style.display='none'
      indicationsContainer.style.display='none'
      text2.classList.add('animationDefile')
      let apparitionInstruction = setTimeout(apparition, 2000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      text++
    }
  }
)

// SOUND

const musiqueSavane = document.querySelector('#musiqueSavane')
const soundButton = document.querySelector('#soundButton')
const audioOff=document.querySelector('.audioOff')

let musicPlaying=false

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
