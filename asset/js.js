const scriptURL =
  "https://script.google.com/d/1eQbMrEbDWLQyfmO9bHsESYgXsAC8wmzTMwhxGsCM-qJMXFH_9F82rg3o/edit?usp=sharing";
const form = document.forms["portofolio-contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

// Fungsi memanggil data ketika sukses
function handleGetFormData() {
  return {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
  };
}

function validateFormData({ name, email, subject } = {}) {
  return name && email && subject;
}

function submit() {
  const formData = handleGetFormData();

  if (validateFormData(formData)) {
    swal({
      title: "Good job!",
      text: "Data berhasil dikirim!",
      icon: "success",
      button: "Aww yess!",
    });

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
});
