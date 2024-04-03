const textoSaludo = document.querySelector('.texto-saludo');
const textoSaludoDeco1 = document.querySelector('.texto-saludo-deco1');
const textoSaludoDeco2 = document.querySelector('.texto-saludo-deco2');

const decoracionSaludo1 = document.querySelector('.decoracion-saludo-1');
const decoracionSaludo5 = document.querySelector('.decoracion-saludo-5');
const decoracionSaludo6 = document.querySelector('.decoracion-saludo-6');

const elementosaobservar_seccion1 = document.querySelectorAll('.texto-saludo, .texto-saludo-deco1, .texto-saludo-deco2, .decoracion-saludo-1, .decoracion-saludo-5, .decoracion-saludo-6');

const callback1 = (entries) => {
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        
            if (entry.target.classList.contains('texto-saludo')) {
          
                textoSaludo.classList.add('texto-saludo-activado');
                textoSaludoDeco1.classList.add('texto-saludo-deco-activado');
                textoSaludoDeco2.classList.add('texto-saludo-deco-activado');

                decoracionSaludo1.style.animationName = 'seccion-saludo-deco-animacion-borde';
                decoracionSaludo5.style.animationName = 'animacion-decoracion-saludo';
                decoracionSaludo6.style.animationName = 'animacion-decoracion-saludo';


                decoracionSaludo5.style.left = '160px';
                decoracionSaludo6.style.right = '160px';
            }

            
        }
    });
};
  
const observer1 = new IntersectionObserver(callback1);
  
elementosaobservar_seccion1.forEach(elemento => {
    observer1.observe(elemento);
});
  

const textosSeccionGracias = document.querySelector('.contenedor-textos-seccion-gracias');
const seccionGraciasImagen1 = document.querySelector('.seccion-gracias-imagen1');
const seccionGraciasImagen2 = document.querySelector('.seccion-gracias-imagen2');

const elementosaobservar_seccion2 = document.querySelectorAll('.contenedor-textos-seccion-gracias, .seccion-gracias-imagen1, .seccion-gracias-imagen2');

const callback2 = (entries) => {
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        
            if (entry.target.classList.contains('contenedor-textos-seccion-gracias')) {
                textosSeccionGracias.classList.add('contenedor-textos-seccion-gracias-activado');

                seccionGraciasImagen1.classList.add('seccion-gracias-imagen1-activado');
                seccionGraciasImagen2.classList.add('seccion-gracias-imagen2-activado');
            }
        }
    });
};
  
const observer2 = new IntersectionObserver(callback2);
  
elementosaobservar_seccion2.forEach(elemento => {
    observer2.observe(elemento);
});
  
  

const parrafoMensaje = document.querySelector('.parrafo-mensaje');

const seccionMensajeImagen1 = document.querySelector('.seccion-mensaje-imagen1');
const seccionMensajeImagen2 = document.querySelector('.seccion-mensaje-imagen2');
const seccionMensajeImagen3 = document.querySelector('.seccion-mensaje-imagen3');

const decoracionMensaje3 = document.querySelector('.decoracion-mensaje-3');
const decoracionMensaje4 = document.querySelector('.decoracion-mensaje-4');



const elementosaobservar_seccion3 = document.querySelectorAll('.parrafo-mensaje, .seccion-mensaje-imagen1, .seccion-mensaje-imagen2, .seccion-mensaje-imagen3, .decoracion-mensaje-3, .decoracion-mensaje-4');

const callback3 = (entries) => {
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        
            if (entry.target.classList.contains('parrafo-mensaje')) {
                parrafoMensaje.classList.add('parrafo-mensaje-activado');
            } 
            
            if(entry.target.classList.contains('seccion-mensaje-imagen1')){
                seccionMensajeImagen1.classList.add('imagenes-mensaje-activado');
                seccionMensajeImagen2.classList.add('imagenes-mensaje-activado');
                seccionMensajeImagen3.classList.add('imagenes-mensaje-activado');
            }

            if(entry.target.classList.contains('decoracion-mensaje-3')){
                decoracionMensaje3.style.animationName = 'animacion-mensaje-1';
            }

            if(entry.target.classList.contains('decoracion-mensaje-4')){
                decoracionMensaje4.style.animationName = 'animacion-mensaje-2';
            }
        
            
        }
    });
};
  
const observer3 = new IntersectionObserver(callback3);
  
elementosaobservar_seccion3.forEach(elemento => {
    observer3.observe(elemento);
});
  
  

const decoracionFinal1 = document.querySelector('.decoracion-final-1');
const decoracionFinal2 = document.querySelector('.decoracion-final-2');

const sueloEstilos = document.querySelectorAll('.suelo-estilos');



const elementosaobservar_seccion4 = document.querySelectorAll('.decoracion-final-1, .decoracion-final-2, .suelo-estilos');

const callback4 = (entries) => {
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        
            if (entry.target.classList.contains('decoracion-final-1')) {
                decoracionFinal1.style.animationName = 'animacion-seccion-final1';
            } 

            if (entry.target.classList.contains('decoracion-final-2')) {
                decoracionFinal2.style.animationName = 'animacion-seccion-final2';
            } 
            
            if(entry.target.classList.contains('suelo-estilos')){
                sueloEstilos.forEach(estilos => {
                    estilos.style.animationName = 'seccion-final-suelo-animacion';
                });
            }
            
        }
    });
};
  
const observer4 = new IntersectionObserver(callback4);
  
elementosaobservar_seccion4.forEach(elemento => {
    observer4.observe(elemento);
});




  
let seccionAct = 1;

function scroll(){
    
    document.addEventListener('keydown', (event) => {

        event.preventDefault();

       if (event.key === 'ArrowDown') {
            seccionAct++;
            if (seccionAct == 5){
                seccionAct = 1;
            }
            
            
        }else if (event.key === 'ArrowUp'){
            seccionAct--;
            if (seccionAct == 0){
                seccionAct = 4;
            }
        }

        const seccionDestino = document.getElementById(`seccion-${seccionAct}`);
        seccionDestino.scrollIntoView({ behavior: 'smooth' });

    });
    
}

scroll();



