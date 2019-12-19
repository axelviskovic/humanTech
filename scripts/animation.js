tab = localStorage.getItem('animalsKilled')
const sangSinge = document.querySelector('.vignetteChimpanze .tacheSang')
const sangLion = document.querySelector('.vignetteLion .tacheSang')
const sangElephant = document.querySelector('.vignetteElephant .tacheSang')
const sangSuricate = document.querySelector('.vignetteSuricate .tacheSang')
const sangQuelea = document.querySelector('.vignetteQuelea .tacheSang')


if(tab.includes('singe')){
  sangSinge.style.display='block'
}
if(tab.includes('lion')){
  sangLion.style.display='block'
}
if(tab.includes('elephant')){
  sangElephant.style.display='block'
}
if(tab.includes('suricate')){
  sangSuricate.style.display='block'
}
if(tab.includes('quelea')){
  sangQuelea.style.display='block'
}

const buttonAr = document.querySelector('.buttonAr')
const qrCode = document.querySelector('#qrCode')

buttonAr.addEventListener(
  'click',
  ()=>{
    qrCode.style.display='block'
    qrCode.style.transition='all 4s'
    qrCode.style.opacity='1'
    buttonAr.style.display='none'
  }
)
