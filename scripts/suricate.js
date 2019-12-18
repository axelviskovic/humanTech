const text1 = document.querySelector('#text1')
const text2 = document.querySelector('#text2')
const text3 = document.querySelector('#text3')
const text4 = document.querySelector('#text4')
const text5 = document.querySelector('#text5')
const text6 = document.querySelector('#text6')
const text7 = document.querySelector('#text7')
const text8 = document.querySelector('#text8')
const indicationsContainer = document.querySelector('.indicationsContainer')
const couple = document.querySelector('#couple')
const enfants = document.querySelector('#enfants')
const guetteur = document.querySelector('#guetteur')
const chercheur = document.querySelector('#chercheur')


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
      chercheur.style.transform='scale(1)'
      chercheur.style.opacity='.8'
      text++
    }
    if(text==7 && indicationsContainer.style.display=='flex'){
      text7.style.display='none'
      indicationsContainer.style.display='none'
      text8.classList.add('animationDefile')
      chercheur.style.transform='scale(1)'
      chercheur.style.opacity='.8'
      let apparitionInstruction = setTimeout(apparition,1000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      text++
    }
    if(text==6 && indicationsContainer.style.display=='flex'){
      text6.style.display='none'
      indicationsContainer.style.display='none'
      text7.classList.add('animationDefile')
      guetteur.style.transform='scale(1)'
      guetteur.style.opacity='0.8'
      let apparitionInstruction = setTimeout(apparition,1000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      let waiterGuetteur = setTimeout(waitGuetteur,1000)
      function waitGuetteur(){
        chercheur.style.transform='scale(1.5)'
        chercheur.style.opacity='1'
      }
      text++
    }
    if(text==5 && indicationsContainer.style.display=='flex'){
      text5.style.display='none'
      text6.classList.add('animationDefile')
      indicationsContainer.style.display='none'
      enfants.style.transform='scale(1)'
      enfants.style.opacity='0.8'
      let waiterGuetteur = setTimeout(waitGuetteur,1000)
      function waitGuetteur(){
        guetteur.style.transform='scale(1.5)'
        guetteur.style.opacity='1'
      }
      let apparitionInstruction = setTimeout(apparition,1000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      text++
    }
    if(text==4 && indicationsContainer.style.display=='flex'){
      text4.style.display='none'
      text5.classList.add('animationDefile')
      indicationsContainer.style.display='none'
      couple.style.transform='scale(1)'
      couple.style.opacity='0.8'
      let waiter = setTimeout(waitSuricate,1000)
      function waitSuricate(){
        enfants.style.transform='scale(1.5)'
        enfants.style.opacity='1'
      }
      let apparitionInstruction = setTimeout(apparition,1000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      text++
    }
    if(text==3 && indicationsContainer.style.display=='flex'){
      text3.style.display='none'
      indicationsContainer.style.display='none'
      text4.classList.add('animationDefile')
      couple.style.transform='scale(1.5)'
      couple.style.opacity='1'
      let apparitionInstruction = setTimeout(apparition,1000)
      function apparition(){
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
