//Haz tú validación en javascript 

const formulario = document.getElementById('formulario-contacto');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('btn-enviar');
const errorNombre = document.getElementById('error-nombre');
const errorEmail = document.getElementById('error-email');
const errorAsunto = document.getElementById('error-asunto');
const errorMensaje = document.getElementById('error-mensaje');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  let errores = false;

  // Validación nombre
  if (nombre.value.trim() === '') {
    errorNombre.textContent = 'El campo nombre no puede estar vacío';
    errores = true;
  } else if (nombre.value.length > 50) {
    errorNombre.textContent = 'El nombre no puede tener más de 50 caracteres';
    errores = true;
  } else {
    errorNombre.textContent = '';
  }

  // Validación email
  if (email.value.trim() === '') {
    errorEmail.textContent = 'El campo email no puede estar vacío';
    errores = true;
  } else if (!/^[\w-+\.]+@[a-z]+\.[a-z]{2,}$/.test(email.value)) {
    errorEmail.textContent = 'El email no tiene un formato válido';
    errores = true;
  } else {
    errorEmail.textContent = '';
  }

  // Validación asunto
  if (asunto.value.trim() === '') {
    errorAsunto.textContent = 'El campo asunto no puede estar vacío';
    errores = true;
  } else if (asunto.value.length > 50) {
    errorAsunto.textContent = 'El asunto no puede tener más de 50 caracteres';
    errores = true;
  } else {
    errorAsunto.textContent = '';
  }

  // Validación mensaje
  if (mensaje.value.trim() === '') {
    errorMensaje.textContent = 'El campo mensaje no puede estar vacío';
    errores = true;
  } else if (mensaje.value.length > 300) {
    errorMensaje.textContent = 'El mensaje no puede tener más de 300 caracteres';
    errores = true;
  } else {
    errorMensaje.textContent = '';
  }

  if (!errores) {
    formulario.submit();
  }
});

// Activar botón enviar solo cuando todos los campos estén llenos
const camposRequeridos = document.querySelectorAll('[required]');

const validarEnvio = () => {
  btnEnviar.disabled = camposRequeridos.some((campo) => campo.value.trim() === '');
};

camposRequeridos.forEach((campo) => {
  campo.addEventListener('input', validarEnvio);
});
