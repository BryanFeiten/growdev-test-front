const lista = document.getElementById('lista');
     
async function loadUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    response.data.forEach(user => {
        lista.innerHTML += `
            <li>${user.name}</li>
        `;
    });
}

loadUsers();