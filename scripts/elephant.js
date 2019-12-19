const text1 = document.querySelector('.text1')
const text2 = document.querySelector('.text2')
const text3 = document.querySelector('.text3')
const text4 = document.querySelector('.text4')
const indicationsContainer = document.querySelector('.indicationsContainer')



let text = 1

const apparitionInstruction = setTimeout(apparition,4000)
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
    }
    if(text==3 && indicationsContainer.style.display=='flex'){
      aigle.classList.add('animationMoving')
      text3.style.display='none'
      indicationsContainer.style.display='none'
      text4.classList.add('animationDefile')
      let apparitionInstruction = setTimeout(apparition,3000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      text++
    }
    if(text==2 && indicationsContainer.style.display=='flex'){
      text2.style.display='none'
      indicationsContainer.style.display='none'
      text3.classList.add('animationDefile')
      let apparitionInstruction = setTimeout(apparition,3000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      text++
    }
    if(text==1 && indicationsContainer.style.display=='flex'){
      text1.style.display='none'
      indicationsContainer.style.display='none'
      text2.classList.add('animationDefile')
      let apparitionInstruction = setTimeout(apparition,3000)
      function apparition(){
        indicationsContainer.style.display='flex'
      }
      text++
    }
  }
)