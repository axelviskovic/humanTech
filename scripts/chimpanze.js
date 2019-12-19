const text1 = document.querySelector('#text1')
const text2 = document.querySelector('#text2')
const text3 = document.querySelector('#text3')
const text4 = document.querySelector('#text4')
const text5 = document.querySelector('#text5')
const text6 = document.querySelector('#text6')
const text7 = document.querySelector('#text7')
const text8 = document.querySelector('#text8')
const indicationsContainer = document.querySelector('.indicationsContainer')
const enfant2 = document.querySelector('#enfant2')
const femellechimpanze = document.querySelector('#femellechimpanze')
const kingchimpanze = document.querySelector('#kingchimpanze')
const femelleAmoureuse = document.querySelector('#femelleAmoureuse')
const chimpanzeAmoureux = document.querySelector('#chimpanzeAmoureux')
const fleche1 = document.querySelector('#fleche1')
const fleche2 = document.querySelector('#fleche2')
const fleche3 = document.querySelector('#fleche3')
const groupe2 = document.querySelector('#groupe2')
const buttonRetourReplay=document.querySelector('.buttonRetourReplay')



let text = 1

const apparitionInstruction = setTimeout(apparition,4000)
function apparition(){
  indicationsContainer.style.display='flex'
}

// Premier message affiché


window.addEventListener(
  'keypress',
  ()=>{
    if(text==6 && indicationsContainer.style.display=='flex'){
      text6.style.display='none'
      text7.classList.add('animationDefile')
      indicationsContainer.style.display='none'
      buttonRetourReplay.style.width='100%'
      buttonRetourReplay.style.height='100%'
      kingchimpanze.style.transform='scale(1)'
      kingchimpanze.style.opacity='1'
      fleche3.style.transform='scale(1)'
      fleche3.style.opacity='0'
      fleche1.style.transform='scale(1.3)'
      fleche1.style.opacity='0'
      fleche2.style.transform='scale(1.3)'
      fleche2.style.opacity='0'
    }
    if(text==5 && indicationsContainer.style.display=='flex'){
      text5.style.display='none'
      text6.classList.add('animationDefile')
      indicationsContainer.style.display='none'
      kingchimpanze.style.transform='scale(1.3)'
      kingchimpanze.style.opacity='1'
      femelleAmoureuse.style.transform='scale(1)'
      femelleAmoureuse.style.opacity='1'
      let apparitionInstruction = setTimeout(apparition, 2000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      text++
    }
    if(text==4 && indicationsContainer.style.display=='flex'){
      text4.style.display='none'
      indicationsContainer.style.display='none'
      text5.classList.add('animationDefile')
      indicationsContainer.style.display='none'
      femelleAmoureuse.style.transform='scale(1.3)'
      femelleAmoureuse.style.opacity='1'
      fleche3.style.transform='scale(1)'
      fleche3.style.opacity='1'
      chimpanzeAmoureux.style.transform='scale(1)'
      chimpanzeAmoureux.style.opacity='1'
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
      chimpanzeAmoureux.style.transform='scale(1.3)'
      chimpanzeAmoureux.style.opacity='1'
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
      fleche1.style.transform='scale(1.3)'
      fleche1.style.opacity='1'
      fleche2.style.transform='scale(1.3)'
      fleche2.style.opacity='1'
      groupe2.style.transform='scale(1)'
      groupe2.style.opacity='1'
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
      groupe2.style.transform='scale(1.1)'
      groupe2.style.opacity='1'
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
