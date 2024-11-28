const textHora = document.querySelector('#Hora')
const textMinutos = document.querySelector('#Minutos')
const textSegundos = document.querySelector('#Segundos')
const textMili = document.querySelector('#Mili')

const btnIniciar = document.getElementById('btnIniciar') 
const btnPause = document.getElementById('btnPausar') 
const btnContinuar = document.getElementById('btnContinua') 
const btnResert = document.getElementById('btnResert') 
let HORA = 0
let MINUTOS = 0
let SEGUNDOS = 0
let MILI = 0
let Pause = false

btnIniciar.addEventListener("click", () => {
     inter = setInterval(() => {
        console.log(`teste`);
        if(!Pause){
            MILI += 10
            if (MILI == 1000) {
                SEGUNDOS += 1
                MILI = 0                    
            }
            if (SEGUNDOS == 60) {
                MINUTOS += 1
                SEGUNDOS = 0
                
            }
            if (MINUTOS == 60) {
                HORA++;
                MINUTOS = 0
                
            }
            textHora.innerHTML = formato(HORA)
            textMinutos.innerHTML = formato(MINUTOS)
            textSegundos.innerHTML = formato(SEGUNDOS)
            textMili.innerHTML = MILI
        }

    }, 10)
    formato = (time) => {
        return time < 10 ? `0${time}` : time
    }

    btnIniciar.style.display = 'none'
   btnPause.style.display = 'inline-block'

})

btnPause.addEventListener('click', () =>{
    Pause =true
    btnPause.style.display = 'none'
    btnContinuar.style.display = 'inline-block'
    btnContinuar.style.background = `blue`


})

btnContinuar.addEventListener('click', () =>{
    Pause = false
    btnContinuar.style.display = 'none'
    btnPause.style.display = 'flex'

})
btnResert.addEventListener('click', () => {
    clearInterval(inter)
     HORA = 0
 MINUTOS = 0
 SEGUNDOS = 0
 MILI = 0
     textHora.innerHTML = '00'
     textMinutos.innerHTML = '00'
    textSegundos.innerHTML = '00'
     textMili.innerHTML = '000'  
    Pause = false
     
    btnIniciar.style.display = 'flex'
    btnContinuar.style.display = 'none'
    btnPause.style.display = 'none'

})