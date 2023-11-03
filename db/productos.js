export const productos = [
  {
    id: 1,
    nombre: "Panditas",
    precio: 35,
    imagen: "",
    categoria: "Gomitas",
  },
  {
    id: 2,
    nombre: "Mango Enchilado",
    precio: 32,
    imagen: "",
    categoria: "Enchilados",
  },
  {
    id: 3,
    name: "Gusanos de Gomita",
    precio: 20,
    imagen: "",
    categoria: "Gomitas",
  },
  {
    id: 4,
    nombre: "Pasitas de Chocolate",
    precio: 45,
    imagen: "",
    categoria: "Chocolates",
  },
  {
    id: 5,
    nombre: "Ferrero",
    precio: 45,
    imagen: "",
    categoria: "Chocolates",
  },
  {
    id: 6,
    nombre: "Toblerone",
    precio: 55,
    imagen: "",
    categoria: "Chocolates",
  },
  {
    id: 7,
    nombre: "Skwinkles",
    precio: 15,
    imagen: "",
    categoria: "Enchilados",
  },
];

JSON.parse(localStorage.getItem("productos")) ||
  localStorage.setItem("productos", JSON.stringify(productos));
