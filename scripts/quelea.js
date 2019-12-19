const text1 = document.querySelector('#text1')
const text2 = document.querySelector('#text2')
const text3 = document.querySelector('#text3')
const text4 = document.querySelector('#text4')
const indicationsContainer = document.querySelector('.indicationsContainer')
const aigle = document.querySelector('.aigle')
const oiseau = document.querySelectorAll(".oiseau")
const buttonRetourReplay=document.querySelector('.buttonRetourReplay')


let text = 1

const apparitionInstruction = setTimeout(apparition,2000)
function apparition(){
  indicationsContainer.style.display='flex'
}

// Premier message affiché


window.addEventListener(
  'keypress',
  ()=>{
    if(text==4 && indicationsContainer.style.display=='flex'){
      text4.style.display='none'
      indicationsContainer.style.display='none'
      text++
      let apparitionInstruction = setTimeout(apparition,6000)
      function apparition(){
        buttonRetourReplay.style.width='100%'
        buttonRetourReplay.style.height='100%'
      }
    }
    if(text==3 && indicationsContainer.style.display=='flex'){
      aigle.classList.add('animationMoving')
      text3.style.display='none'
      indicationsContainer.style.display='none'
      text4.classList.add('animationDefile')
      let apparitionInstruction = setTimeout(apparition,1000)
      function apparition(){
        for(let i=0; i<oiseau.length;i++){
          oiseau[i].style.animationDelay=Math.random()*1+'s'
          oiseau[i].setAttribute('src','../images/animaux/oiseau.gif')
          oiseau[i].classList.add('oiseauEnvol')
        }
        indicationsContainer.style.display='flex'
      }
      text++
    }
    if(text==2 && indicationsContainer.style.display=='flex'){
      text2.style.display='none'
      indicationsContainer.style.display='none'
      text3.classList.add('animationDefile')
      let apparitionInstruction = setTimeout(apparition,1000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      text++
    }
    if(text==1 && indicationsContainer.style.display=='flex'){
      text1.style.display='none'
      indicationsContainer.style.display='none'
      text2.classList.add('animationDefile')
      let apparitionInstruction = setTimeout(apparition,1000)
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
