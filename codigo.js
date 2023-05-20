

//funcionalidad buscardor del input//







/*validacion sesion*/
  
  let formSesion = document.querySelector('.cajainputs');
  let  correo = document.querySelector('.cajainputs__inputuno');
  let  contraseña =  document.querySelector('.cajainputs__inputdos');



  formSesion.addEventListener('submit', (x) =>{
    x.preventDefault();
    registro();
   
  })

  function registro(){
     const usuarioCorreo = correo.value.trim();
     const usuarioContraseña = contraseña.value.trim();


     /*validacion correo*/
    
    if ( usuarioCorreo === "edwar.poveda@hotmail.com" && usuarioContraseña === "1234") {
      window.location = "index(2).html";
      validacionBienc(correo);
      validacionBienpass(contraseña);
  
    }else{
    }

    if( usuarioCorreo === "edwar.poveda@hotmail.com"){
       validacionBienc(correo);

    }else{
      
    }

    if (usuarioCorreo != "edwar.poveda@hotmail.com"){
      registroErrorc(correo,'Correo incorrecto');

    }else{
    }
    if( usuarioCorreo === ''){
       registroErrorc(correo,'Campo vacio');

    }else{

    }


    /*validacion contraseña*/
   

    if (usuarioContraseña != "1234"){
      registroErrorp(contraseña,'Contraseña incorrecta');

    }else{
    }

    if( usuarioContraseña === ''){
       registroErrorp(contraseña,'Campo vacio');

    }else{
      
    }

    if( usuarioContraseña === "1234"){
       validacionBienpass(contraseña);

    }else{
      
    }


   }
 


   const registroErrorc = (input,mjs) => {
      const formControl = input.parentElement;
      
      const avisoError =formControl.querySelector('.error--correo');
      avisoError .innerText=mjs;

      correo.className = 'ingresofallido__correo';


    }

     const registroErrorp = (input,mjs) => {
      const formControl = input.parentElement;
      
      const avisoError =formControl.querySelector('.error--contraseña');
      avisoError .innerText=mjs;

      contraseña.className = 'ingresofallido__correo';


    }





    const validacionBienc= (input) => {
      const formControl = input.parentElement;
      const avisoError =formControl.querySelector('.error--correo');
      avisoError.innerText='';


      correo.className='ingresoExito__input--c';


      
    }



    const validacionBienpass= (input) => {
      const formControl = input.parentElement;
      const avisoError =formControl.querySelector('.error--contraseña');
      avisoError.innerText='';


      contraseña.className='ingresoExito__input--Pass';


      
    }


 


/*validacion nombre mensaje*/

window.addEventListener('load',()=>{
  const form = document.querySelector('.footercontacto__formulario');
  const nombre = document.querySelector('.footercontactoformulario__inputuno');
  const mensaje = document.querySelector('.footercontactoformulario__inputdos');

 



  form.addEventListener('submit', (e) =>{
    e.preventDefault();
    validacion();
  })
  
  const validacion =()=>{
    const usuario =nombre.value.trim();
    const usuarioMjs =mensaje.value.trim();




   /*validacion nombre*/

    if (usuario === '') {
      validaErrorn(nombre,'Campo requerido');
    }else{
      validacionBienn(nombre);
    }


   
    if (usuarioMjs === '') {
      validaErrorm(mensaje,'Campo requerido');

    }else{
      validacionBienm(mensaje);
    }



  }



  const validaErrorn = (input,mjs) => {
      const formControl = input.parentElement;
      
      const avisoError =formControl.querySelector('.error');
      avisoError .innerText=mjs;

      nombre.className = 'ingresofallido__input';


    }


  const validacionBienn = (input) => {
      const formControl = input.parentElement;

      const avisoError =formControl.querySelector('.error');
      avisoError .innerText='';

      nombre.className='ingresoExito__input';


      
    }

    const validaErrorm = (input,mjs) => {
      const formControl = input.parentElement;
      
      const avisoError =formControl.querySelector('.error--mensaje');
      avisoError.innerText=mjs;

      mensaje.className = 'ingresofallido__input--M';


    }


  const validacionBienm = (input) => {
      const formControl = input.parentElement;
      const avisoError =formControl.querySelector('.error--mensaje');
      avisoError.innerText='';


      mensaje.className='ingresoExito__input--M';


      
    }
})

