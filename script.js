document.getElementById('studentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    // You can send this data to the server or perform additional actions here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Course:', course);
});
