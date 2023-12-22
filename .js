const niveles = [
        
    {
      titulo: "El Gato con Botas se va a buscar su amigos",
      pregunta: "¿Qué debería hacer el Gato con Botas para encontrar sus amigos?",
      opciones: ["Buscar en el bosque", "Buscar los amigos", "Quedarse en casa"],
      respuesta: 0
    },
    {
      titulo: "El Gato con Botas encuentra a un leñador",
      pregunta: "¿Qué debería hacer el Gato con Botas al encontrarse con el leñador?",
      opciones: ["Pedirle ayuda para encontrar su flecha", "Decirle que no necesita su ayuda", "Correr"],
      respuesta: 0
    },
    {
      titulo: "El Gato con Botas encuentra su flecha",
      pregunta: "¿Qué debería hacer el Gato con Botas después de encontrar su flecha?",
      opciones: ["Dar las gracias al Leñador", "Dejarle su flecha", "Robarle su hacha"],
      respuesta: 0
    },
    {
      titulo: "El Gato con Botas se va a la montaña",
      pregunta: "¿Cuál camino debería tomar el Gato con Botas para atrapar al Lobo?",
      opciones: ["Tomar un camino corto", "Tomar un camino largo", "No ir a la montaña"],
      respuesta: 0
    },
    {
      titulo: "El Gato con Botas encuentra un puente roto",
      pregunta: "¿Qué debería hacer el Gato con Botas al encontrarse con un puente roto?",
      opciones: ["Cruzar el puente", "Buscar un camino alternativo", "Volver a casa"],
      respuesta: 1
    },
    {
      titulo: "El Gato con Botas encuentra una cueva",
      pregunta: "¿Qué debería hacer el Gato con Botas al encontrarse con una cueva?",
      opciones: ["Entrar en la cueva", "Buscar otro camino", "Volver a casa"],
      respuesta: 0
    },
    {
      titulo: "El Gato con Botas encuentra al Lobo",
      pregunta: "¿Qué debería hacer el Gato con Botas al encontrarse con el Lobo?",
      opciones: ["Pedirle ayuda al Lobo", "Empezar a pelear con el Lobo", "Correr"],
      respuesta: 0
    },
    {
      titulo: "El Gato con Botas engaña al Lobo",
      pregunta: "¿Qué debería hacer el Gato con Botas para engañar al Lobo?",
      opciones: ["Rírse del Lobo", "Dejarle en el árbol", "Ayudar al Lobo a bajar del árbol"],
      respuesta: 0
    },
    {
      titulo: "El Gato con Botas regresa a casa",
      pregunta: "¿Qué debería hacer el Gato con Botas al regresar a casa?",
      opciones: ["Vivir feliz para siempre", "Buscar una nueva aventura", "Volver a perder su flecha"],
      respuesta: 0
    },
    {
      titulo: "Fin",
      pregunta: "¿Qué debería hacer el Gato con Botas después de vivir feliz para siempre?",
      opciones: ["Jugar de nuevo", "Salir del juego", "Nada"],
      respuesta: 0
    }
  ];

  function calcularEdad() {
    const añoActual = new Date().getFullYear();
    const añoNacimiento = prompt("Ingresa tu año de nacimiento");
    
    const edad = añoActual - añoNacimiento;

    if (edad > 12)
     {
      alert("¡Bienvenido al juego del Gato con Botas! Ayúdalo a completar su aventura.");
      alert("Instrucciones: En cada nivel, se te hará una pregunta y deberás seleccionar la opción correcta. Si respondes correctamente, pasarás al siguiente nivel. Si te equivocas, deberás intentarlo de nuevo.");

      const modal = document.getElementById("modal");
      const texto = document.getElementById("texto");

      const nivel = 0;
      while (nivel < niveles.length) {
        const opcionSeleccionada = menuOpciones(niveles[nivel].pregunta, niveles[nivel].opciones);
        

        if (opcionSeleccionada === niveles[nivel].respuesta) {
          texto.textContent = "¡Respuesta correcta!";
          modal.style.display = "block";
          nivel++;
        } else {
          texto.textContent = "Respuesta incorrecta. Sigue intentando.";
          modal.style.display = "block";
        }
      }

      texto.textContent = "¡Felicidades! Has completado el juego.";
      modal.style.display = "block";
    }  else {
alert("Lo siento, este juego es para mayores de 12 años. ¡Vuelve cuando tengas la edad suficiente para jugar!");
}
  }
  

  const btn = document.getElementById("btn");
  const close = document.getElementsByClassName("close")[0];
  const modal = document.getElementById("modal");

  btn.onclick = function() {
    modal.style.display = "block";
    calcularEdad();  
  }

  close.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }