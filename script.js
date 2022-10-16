function submitted() {

    const form = document.getElementById('contactForm');
    const name = form.elements['name'];
    const email = form.elements['emailAddress'];

    // getting the element's value
    let fullName = name.value;
    let emailAddress = email.value;
    console.log(fullName + ' ' + emailAddress);
    alert("Hi!" + fullName + "Thank you for your interest. I will email you back as soon as possible. Have a great day!")
}