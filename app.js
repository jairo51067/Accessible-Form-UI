// ** MOSTRAR CONTRASEÑAS **/
function mostrarPassword() {
  // Get reference to our password input field/
  // Obtenga referencia al campo de entrada de contraseña
  let passwordInput = document.getElementById("password");
  // Toggle the type of the password input field
  // Cambie el tipo de entrada de contraseña en el campo
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
function mostrarPassword2() {
  // Get reference to our password input field
  // Obtenga referencia al campo de entrada de contraseña
  let passwordInput = document.getElementById("confirmar");
  // Toggle the type of the password input field
  // Cambie el tipo de entrada de contraseña en el campo
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

//** VALIDAR LAS CONTRASEÑAS **/
function validarPassword(event) {
  const password = document.getElementById("password");
  const confirmar = document.getElementById("confirmar");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const errorElement = document.getElementById("error");

  // Check if all required fields are filled
  if (nombre.value === "" || email.value === "") {
    displayError("Please complete all required fields.");
    return false;
  }

  // Check if name has a minimum length
  if (nombre.value.length < 3) {
    displayError("The name must be at least 3 characters.");
    highlightInvalidFields(nombre);
    return false;
  }

  // Check if email is valid
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email.value)) {
    displayError("Please enter a valid email address.");
    highlightInvalidFields(email);
    return false;
  }

  // Check if passwords match
  if (password.value !== confirmar.value) {
    displayError("Passwords do not match.");
    highlightInvalidFields(password, confirmar);
    return false;
  }

  // Check password length
  if (password.value.length < 8) {
    displayError("Password must be at least 8 characters long.");
    highlightInvalidFields(password, confirmar);
    return false;
  }

  // Check for uppercase and lowercase letters
  if (!/[A-Z]/.test(password.value) || !/[a-z]/.test(password.value)) {
    displayError(
      "Password must have at least one uppercase and one lowercase letter"
    );
    highlightInvalidFields(password, confirmar);
    return false;
  }

  // Check for numbers
  if (!/\d/.test(password.value)) {
    displayError("The password must have at least one number");
    highlightInvalidFields(password, confirmar);
    return false;
  }

  // If all checks pass, submit the form and show the modal
  event.preventDefault(); // Prevent form submission
  showModal(
    "Form completed successfully! Access granted... <br> Formulario completado con éxito!. Acceso consedido..."
  );
  clearError(); // Restaurar la leyenda original

  // Redirect to the initial screen after 2 seconds
  setTimeout(function () {
    window.location.href = "./"; // or window.location.href = "index.html";
  }, 2000);

  return true;
}

function displayError(message) {
  const errorElement = document.getElementById("error");
  const fieldsetElement = document.querySelector("fieldset");
  const legendElement = fieldsetElement.querySelector("legend");
  const formularioElement = document.getElementById("formulario");
  errorElement.innerHTML = 
  `<span style="  width: 100%;
    color: #f6f6f6; 
    font-size:1rem; 
    background: #000;
    margin: 0 auto;
    padding: 9px; 
    border-radius: 7px">
    ${message}
  </span>`;
  formularioElement.style.background = "#ff2301";
  // fieldsetElement.style.background = "#ff2301";
  legendElement.innerHTML = "* Access denied *";
}

function clearError() {
  const errorElement = document.getElementById("error");
  const fieldsetElement = document.querySelector("fieldset");
  const legendElement = fieldsetElement.querySelector("legend");
  const formularioElement = document.getElementById("formulario");
  errorElement.innerHTML = "";
  formularioElement.style.background = "";
  // fieldsetElement.style.background = "";
  legendElement.innerHTML = "Login"; // Restaurar la leyenda original
}

function highlightInvalidFields(...fields) {
  fields.forEach((field) => {
    field.style.borderColor = "red";
    field.focus();
  });
}

function showModal(message) {
  const modal = document.getElementById("myModal");
  const modalBody = document.getElementById("myModalBody");
  modalBody.innerHTML = message;
  modal.style.display = "block";
}




//** GRAFICOS **/
// Get reference to our elements
// Obtenga referencias de nuestros elementos
let numero = document.getElementById("porcentajeCompletado");
// Define the initial counter value
let counter = 0;

setInterval(() => {
  if (counter == 100) {
    clearInterval(); // Stop the interval when counter reaches 25
    // Change the counter to 100% when it reaches 25
    // numero.innerHTML = "100%"; 
    return; // Exit the function immediately
  } else {
    // Increment the counter
    // Incremente el contador
    counter += 1;
    // Update the counter in the HTML
    // Actualice el contador en el HTML
    numero.innerHTML = `${counter}%`;
  }
},  1000 / 25); // Update the counter every 1000/65 milliseconds (approximately) 
