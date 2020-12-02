ScrollReveal().reveal('header >*, section >*, footer >*', {
    delay: 10,
    duration: 1000,
    reset: true,

    /* especifica 0-1 cuanto debe ppasar
     del elemento para ser visible o no */
    viewFactor: .1
});

// se puede deshabilitar en celular


//  -----------------
// manejando el scroll combinado con css para generar portada
let pepe = document.querySelector("header");
pepe.addEventListener('wheel',
    function (e) {
        console.log(e.deltaY,e.deltaY > 0,document.querySelector("header div:last-child"))
        if (e.deltaY > 0){
            // si quiero bajar muestro bottom y oculto 
            document.querySelector("header div:last-child").style.opacity = '1';
        }else{
            // sino quito mostrar bottom
            document.querySelector("header div:last-child").removeAttribute('style');
        }
    });