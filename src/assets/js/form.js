function submitForm() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const phone = document.getElementById("phone").value;
  var phoneReg = /[0-9]{3}-[0-9]{3}-[0-9]{3}/;
  if (validationForm()) {
    // Calling validation function
    document.getElementById("form").action = "formSubmit.php"; // Setting form action to "formSubmit.php" page
    document.getElementById("form").submit(); // Submitting form
  }

  // Name and Email validation Function
  function validationForm() {
    if (name === "" || phone === "" || surname === "") {
      event.preventDefault();
      alert("Please fill all fields.");
      return false;
    } else if (!phone.match(phoneReg)) {
      event.preventDefault();
      alert("Invalid phone number");
      return false;
    } else {
      event.preventDefault();
      alert(
        "Your contact details was succesfully send! We will contact you as soon as possible."
      );
      return true;
    }
  }
}
