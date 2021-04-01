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