let nombre, apellido, usuario, correo, direccion, ciudad

let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerData()
})

function LeerData() {
    nombre = document.getElementById('firstName').value
    apellido = document.getElementById('lastName').value
    usuario = document.getElementById('username').value
    correo = document.getElementById('email').value
    direccion = document.getElementById('address').value
    ciudad = document.getElementById('city').value

    GuardarLocalStorage(nombre, apellido, usuario, correo, direccion, ciudad)

}

function GuardarLocalStorage(nombre, apellido, usuario, correo, direccion, ciudad) {
    localStorage.setItem('Nombre', nombre)
    localStorage.setItem('Apellido', apellido)
    localStorage.setItem('Usuario', usuario)
    localStorage.setItem('Correo', correo)
    localStorage.setItem('Dirección', direccion)
    localStorage.setItem('Ciudad', ciudad)
}

function ExtraerData(){
    let nom = localStorage.getItem('Nombre')
    alert ('Bienvenido', nom)
}