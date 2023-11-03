export let dBusuarios = [
  {
    id: 1,
    user: "Alejandro",
    pass: "123456",
    admin: true,
  },
];

/* Trata de obtener la clave del local storage, si es la primera vez que nosotros 
recargamos la pagina va a salir un null entonces automaticamente se crea la segunda
parte del OR*/

JSON.parse(localStorage.getItem("usuarios")) ||
  localStorage.setItem("usuarios", JSON.stringify(dBusuarios));
