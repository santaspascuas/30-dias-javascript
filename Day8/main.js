"use strict";

let estudiantes = ["Bryan", "Kilu", "Emi", "Beatriz", "Elena"];
// probamos metodos de recorrero

function recorrefor(array) {
  for (let i = 0; i < array.length; i++) {
    //console.log(estudiantes[i]);
  }
}

recorrefor(estudiantes);

//map

let asistencia = estudiantes.map((nombre) => {
  return {
    nombre: nombre,
    asistencia: false,
    //Podemos devolver un objeto por cada propiedad
  };
});

//console.log(estudiantes);
//console.log(asistencia);
//console.log(estudiantes);

let productos = [
  { nombre: "camisetas", precio: 15 },
  { nombre: "zapatillas", precio: 20 },
  { nombre: "pantalones", precio: 30 },
];
let productosImpuestos = productos.map((producto) => {
  return {
    //Retornamos un nuevo objetos
    ...producto, // Es como si copiaramos al array.
    impuesto: 0.12,
  };
});

//map es inmmutable y esta siendo modificado.

//console.log(productos);
//console.log(productosImpuestos);

//Utilizamos otro metodo map

let precios = productos.map((productos) => productos.precio);

//console.log(precios);

//Manipulcacion de arreglos con filter

let estudiantesEjemplo = [
  { nombre: "Aida", edad: 20, matricula: true },
  { nombre: "Katrina", edad: 10, matricula: true },
  { nombre: "Jorge", edad: 5, matricula: true },
  { nombre: "Gabriel", edad: 2, matricula: true },
  { nombre: "Raul", edad: 16, matricula: true },
];

//Empezamos usando el filter

let filtrado = estudiantesEjemplo.filter(
  (estudiante) => estudiante.edad >= 10 && estudiante.matricula
);
// Filter me da una especie de filtro y retorna un objeto.

//console.log(filtrado);

//Ejemplo para el 30

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  getInfo: function () {
    return `${this.country} and ${this.city}`;
  },
};

//console.log(person.getFullName());

//console.log(person.getInfo());
// Asabeneh Yetayeh
//const { firstName } = person;
//console.log(firstName);

//---Podemos modificar y añadir propierdades al objeto

person.ismarried = true; // Añadimos un nuevo atributo

//Añadimos una nueva funcion

person.getPersonInfo = function () {
  let skills = this.skills.splice(0, this.skills.length - 1).join(","); // He sacado todos menos el ultimo

  let last = this.skills.splice(this.skills.length - 1)[0];

  let skillsTotal = `${skills}, and ${last}`;

  return skillsTotal;
};
//console.log(person.getPersonInfo());

/// Metodo de copia de objetos-----assign.
const copyperson = Object.assign({}, person);
const valores = Object.values(copyperson);
const entries = Object.entries(copyperson); // Obtienes la clave y los valores en forma de array.

/// Ejercicios-----------------------------------

const enunciado = document.createElement("h2");
enunciado.id = "ejericio";
enunciado.textContent = "Ejercicios para practicar";
document.body.appendChild(enunciado);

//1-----

const objetoVacio = {};
objetoVacio.name = "Warwick";
objetoVacio.age = 6;
objetoVacio.raza = "Pastor Aleman";
objetoVacio.color = "Color lobito";
objetoVacio.ladrido = function () {
  const ladrido = "woof woof";

  return ladrido;
};

objetoVacio.getInfo = function () {
  const nombre = this.name;
  const edad = this.age;
  const color = this.color;
  const sonido = this.ladrido();
  return `${nombre}, ${edad}, ${color} y el sonido del mejor perro del mundo: ${sonido}`;
};

objetoVacio.vacunas = ["rabia", "Tetanos", "pulgitas"];

let vacunas = objetoVacio.vacunas.map((vacunas) => {
  return {
    vacunas: vacunas,
    vacunado: false,
    //Podemos devolver un objeto por cada propiedad
  };
});

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let auxiliar = 0;
let ganador = {};
let nombreGanador = "";

for (let clave in users) {
  if (auxiliar < users[clave].skills.length) {
    auxiliar = users[clave].skills.length;
    ganador = users[clave];
    ganador.name = clave;
  }
}

console.log(ganador);
let bandera = false;
for (let clave in users) {
  for (let indice of users[clave].skills) {
    if (indice === "MERN") {
      bandera = true;
    }
  }
}

if (!bandera) {
  console.log("No se ha encontrado");
}

users.obtenerinfo = function () {
  return "bryan cuadrado";
};
console.log(users.obtenerinfo());

//Obtener claves y propiedades
const entriesNew = Object.entries(users);
console.log(entriesNew);
//Obtener los valores del objeto
const valoresUsuarios = Object.values(users);
console.log(valoresUsuarios);
///---------------------------------------------------------//

const users2 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
//Estos son iterables para usar ya map

//son iterables

function compruebaEmail(array, nombre) {
  let usuariosRegistrados = array.some(
    (usuario) => usuario.username === nombre
  );
  if (!usuariosRegistrados) {
    let usuario = {
      _id: "1234",
      name: nombre,
      email: "bryan@gmail.com",
    };
    array.push(usuario);
    return "Creamos un usuario nuevo";
  }
  return `el usuario ya existe`;
}
console.log(compruebaEmail(users2, "bryan"));
console.log(users2);

function iniciarSession(array, nombre, email) {
  let usuariosRegistrados = array.some(
    (usuario) => usuario.username === nombre && usuario.email === email
  );
  if (usuariosRegistrados) {
    return "Iniciamos sesion";
  }
  return "No exiete la cuenyta";
}

console.log(iniciarSession(users2, "bryan", "cuadradobryan@gmail.com"));
