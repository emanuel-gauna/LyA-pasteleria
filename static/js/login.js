//ingreso y logeo
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm'); // formulario de inicio de sesión
    const loginError = document.getElementById('loginError'); // mensaje de error

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // evita que se envíe el formulario automáticamente

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('https://pasteleria-api-rest-python.onrender.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Almacena el token o la sesión en el almacenamiento local del navegador
                localStorage.setItem('user', JSON.stringify(data));
                window.location.href = 'crud.html'; // Redirige a la página de productos
            } else {
                loginError.style.display = 'block';
                loginError.textContent = data.message;
            }
        } catch (error) {
            loginError.style.display = 'block';
            loginError.textContent = 'Error al intentar iniciar sesión. Inténtalo de nuevo más tarde.';
        }
    });
});
