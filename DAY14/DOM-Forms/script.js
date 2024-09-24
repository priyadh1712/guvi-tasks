document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();


    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    
    const foodChoices = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        foodChoices.push(checkbox.value);
    });

   
    if (foodChoices.length < 2) {
        alert('Please select at least 2 food options!');
        return;
    }

    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.insertCell(0).innerText = firstName;
    newRow.insertCell(1).innerText = lastName;
    newRow.insertCell(2).innerText = email;
    newRow.insertCell(3).innerText = address;
    newRow.insertCell(4).innerText = pincode;
    newRow.insertCell(5).innerText = gender;
    newRow.insertCell(6).innerText = foodChoices.join(', ');
    newRow.insertCell(7).innerText = state;
    newRow.insertCell(8).innerText = country;

    
    document.getElementById('userForm').reset();
});
