const btnTooggle = document.querySelector('.toggle-btn');
const sidebar = document.getElementById('sidebar');
let marcador = true;

btnTooggle.addEventListener('click', function (){
    if(marcador){
        sidebar.classList.add('active');//esto es para el slide del menu
        btnTooggle.classList.add('des');//esto no se para que cojones es jsjsjs
        document.getElementById('time').style.display = 'block'//esto es para la x
        btnTooggle.classList.add('media')//esto es para mostrar el menu hamburguesa
        document.getElementById('otro').style.display ='none'//esto es para el menu
        marcador = false //esto es para que siempre se abra  y se cierre el menu lateral
    } else{
        sidebar.classList.remove('active');
        btnTooggle.classList.remove('des');
        document.getElementById('time').style.display = 'none'
        btnTooggle.classList.remove('media'); 
        document.getElementById('otro').style.display ='block'
        marcador = true;
    }
})
//inicializacion de la libreria de animaciones (esta es para texto)
const typed = new Typed('.typed', {
    strings: [
        '<i class="idioma">Francés</i>',
        '<i class="idioma">Italiano</i>',
        '<i class="idioma">Portugués</i>'
    ],
    stringsElement: '#cadenas-texto',//ID del elemento que contiene cadenasde texto a mostrar
    typeSpeed:75,//velocidad en milisegundos para poner una letra.
    startDelay: 300,//Tiempo de retraso  en iniciar la animacion. Aplica tambien cuanto termina y vuelve a iniciar.
    smartBackspace: true,//eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false,//Alterar el orden en el que se escribe las palabras.
    backDelay: 1500,//Tiempo de espera despues de que termine de escribir una palabra.
    loop: true,//repetir el array de strings
    loopCount:false,//cantidad de veces a repetir el array. false = infinito.
    showCursos:true,//mostrar cursor palpitando.
    cursorChar: '|',//caracter para el cursor.
    contentType: 'html',//'html' o 'null' para textos sin formato
});

