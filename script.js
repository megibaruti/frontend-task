function nextStep(step) {
    document.getElementById(`step${step}`).classList.remove('active');
    document.getElementById(`step${step+1}`).classList.add('active');

    if (step==2) {
      const time = document.getElementById('time').value;
      const fname = document.getElementById('first-name').value;
      const lname = document.getElementById('last-name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;

      document.getElementById('data').innerHTML = `Time: ${time} <br><br> First Name: ${fname} <br><br> Last Name: ${lname} <br><br> Email: ${email} <br><br> Phone: ${phone}`
    }
    
}