function printValues() {
    let firstName = document.getElementById("firstName").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;

    document.getElementById("output").innerHTML =
      "<strong> Name: </strong>" +
      firstName +
      "<br> <br><strong>Email:</strong>" +
      email +
      "<br><br><strong>Address: </strong>" +
      address;
  }