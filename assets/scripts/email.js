$(document).ready(function () {

  $("#submit_contact").click(function() {
    var name = $("#contact_name").val();
    var email = $("#contact_email").val();
    var message = $("#contact_message").val();
    var contact = $("#contact_phone").val();
    $("#returnmessage").empty(); // To empty previous error/success message.
    // Checking for blank fields.
    if (name == '' || email == '' || contact == '') {
      alert("Please Fill Required Fields");
    } else {
      // Returns successful data submission message when the entered information is stored in database.
      $.ajaxSetup({async: true});
      $.post("contact_form.php", {
        async: true,
        name1: name,
        email1: email,
        message1: message,
        contact1: contact
      }, function(data) {
        $("#returnmessage").append(data); // Append returned message to message paragraph.
        if (data == "Your Query has been received, We will contact you soon.") {
          $("#contact_form")[0].reset(); // To reset form fields on success.
        }
      });
    }
  });

});
