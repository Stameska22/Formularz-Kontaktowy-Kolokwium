document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    //walidacja
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    let isValid = true;

    //email
    if (!validateEmail(email)) {
      document.getElementById("emailError").classList.remove("hidden");
      isValid = false;
    } else {
      document.getElementById("emailError").classList.add("hidden");
    }

    //temat
    if (subject === "") {
      document.getElementById("subjectError").classList.remove("hidden");
      isValid = false;
    } else {
      document.getElementById("subjectError").classList.add("hidden");
    }

    //treść
    if (message.trim() === "") {
      document.getElementById("messageError").classList.remove("hidden");
      isValid = false;
    } else {
      document.getElementById("messageError").classList.add("hidden");
    }

    if (isValid) {
      //podsumowanie
      document.getElementById("summaryEmail").textContent = email;
      document.getElementById("summarySubject").textContent = subject;
      document.getElementById("summaryMessage").textContent = message;

      document.getElementById("contactForm").classList.add("hidden");
      document.getElementById("summary").classList.remove("hidden");
    }
  });

document.getElementById("editButton").addEventListener("click", function () {
  document.getElementById("summary").classList.add("hidden");
  document.getElementById("contactForm").classList.remove("hidden");
});

document.getElementById("confirmButton").addEventListener("click", function () {
  alert("Formularz został wysłany!");
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
