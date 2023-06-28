const misProductos = [
  {
    id: "1",
    nombre: "Yerba con Limón",
    precio: 500,
    img: "../src/images/yerba-limon.jpg",
    idCat: "3",
  },
  {
    id: "2",
    nombre: "Arroz",
    precio: 200,
    img: "../src/images/arroz.jpg",
    idCat: "3",
  },
  {
    id: "3",
    nombre: "Fideos Mostachol",
    precio: 120,
    img: "../src/images/fideos-mostachol.jpg",
    idCat: "3",
  },
  {
    id: "4",
    nombre: "Aceite de Girasol",
    precio: 900,
    img: "../src/images/AceiteGirasol900.jpg",
    idCat: "3",
  },
  {
    id: "5",
    nombre: "Aceto balsámico",
    precio: 500,
    img: "../src/images/AcetoBalsamico500ml_0.jpg",
    idCat: "3",
  },
  {
    id: "6",
    nombre: "Bizcochuelo Chocolate",
    precio: 200,
    img: "../src/images/BiscochueloChocolate.jpg",
    idCat: "3",
  },
  {
    id: "7",
    nombre: "Bizcochuelo Chocolate",
    precio: 120,
    img: "../src/images/BiscochueloChocolate2.jpg",
    idCat: "3",
  },
  {
    id: "8",
    nombre: "Bizcoschuelo Vainilla",
    precio: 900,
    img: "../src/images/BiscochueloVainilla2.jpg",
    idCat: "3",
  },
  {
    id: "9",
    nombre: "Biscochuelo Vainilla",
    precio: 500,
    img: "../src/images/BiscochueloVainilla3.jpg",
    idCat: "3",
  },
  {
    id: "10",
    nombre: "Botella de ???",
    precio: 200,
    img: "../src/images/botellas-42028129.jpg",
    idCat: "2",
  },
  {
    id: "11",
    nombre: "Botella de ???",
    precio: 120,
    img: "../src/images/botellas-32.jpg",
    idCat: "2",
  },
  {
    id: "12",
    nombre: "Aceite de Girasol",
    precio: 900,
    img: "../src/images/AceiteGirasol30002.jpg",
    idCat: "3",
  },
  {
    id: "13",
    nombre: "Botella ???",
    precio: 500,
    img: "../src/images/botellas-520281293.jpg",
    idCat: "2",
  },
  {
    id: "14",
    nombre: "Vinagre",
    precio: 200,
    img: "../src/images/vinagre-3.jpg",
    idCat: "3",
  },
  {
    id: "15",
    nombre: "Vinagre",
    precio: 120,
    img: "../src/images/vinagre-23.jpg",
    idCat: "3",
  },
  {
    id: "16",
    nombre: "Yerba Mate Tradicional",
    precio: 900,
    img: "../src/images/YerbaMateTradicional-500gr2.jpg",
    idCat: "3",
  },
  {
    id: "17",
    nombre: "Yerba Mate Tradicional",
    precio: 500,
    img: "../src/images/YerbaMateTradicional-500gr.jpg",
    idCat: "3",
  },
  {
    id: "18",
    nombre: "Lentejas",
    precio: 200,
    img: "../src/images/Lentejas3403.jpg",
    idCat: "3",
  },
  {
    id: "19",
    nombre: "Porotos Alubia",
    precio: 120,
    img: "../src/images/PorotosAlubia2.jpg",
    idCat: "3",
  },
  {
    id: "20",
    nombre: "Aceto Balsámico",
    precio: 900,
    img: "../src/images/AcetoBalsamico500ml_03.jpg",
    idCat: "3",
  },
  {
    id: "21",
    nombre: "Fideos Cabello de Angel",
    precio: 500,
    img: "../src/images/CabelloAngel500g.jpg",
    idCat: "3",
  },
  {
    id: "22",
    nombre: "Cacao",
    precio: 200,
    img: "../src/images/cacao.jpg",
    idCat: "3",
  },
  {
    id: "23",
    nombre: "Cacao",
    precio: 120,
    img: "../src/images/cacao2.jpg",
    idCat: "3",
  },
  {
    id: "24",
    nombre: "Cacao",
    precio: 900,
    img: "../src/images/cacao3.jpg",
    idCat: "3",
  },
  {
    id: "25",
    nombre: "Fideos Nido",
    precio: 500,
    img: "../src/images/fideos-nido.jpg",
    idCat: "3",
  },
  {
    id: "26",
    nombre: "Fideos Nido",
    precio: 200,
    img: "../src/images/fideos-nido2.jpg",
    idCat: "3",
  },
  {
    id: "27",
    nombre: "Jugo de Limón",
    precio: 120,
    img: "../src/images/limon.jpg",
    idCat: "3",
  },
  {
    id: "28",
    nombre: "Jugo deLimón",
    precio: 900,
    img: "../src/images/limon2.jpg",
    idCat: "3",
  },
  {
    id: "29",
    nombre: "Jugo de Limón",
    precio: 500,
    img: "../src/images/limon3.jpg",
    idCat: "3",
  },
  {
    id: "30",
    nombre: "Mayonesa",
    precio: 200,
    img: "../src/images/mayonesa.jpg",
    idCat: "3",
  },
  {
    id: "31",
    nombre: "Mayonesa",
    precio: 120,
    img: "../src/images/mayonesa2.jpg",
    idCat: "3",
  },
  {
    id: "32",
    nombre: "Mayonesa",
    precio: 900,
    img: "../src/images/mayonesa3.jpg",
    idCat: "3",
  },
  {
    id: "33",
    nombre: "Crema de Leche",
    precio: 320,
    img: "../src/images/lact_cremaDeLeche.jpg",
    idCat: "1",
  },
  {
    id: "34",
    nombre: "Cerveza Heineken",
    precio: 480,
    img: "../src/images/beb-cerveza.jpg",
    idCat: "2",
  },
  {
    id: "35",
    nombre: "Leche Nido",
    precio: 1420,
    img: "../src/images/lact_lecheNido.jpg",
    idCat: "1",
  },
  {
    id: "36",
    nombre: "Amarula",
    precio: 1300,
    img: "../src/images/beb_amarula.jpg",
    idCat: "2",
  },
  {
    id: "37",
    nombre: "Leche en sachet",
    precio: 350,
    img: "../src/images/lact_lecheSachet.jpg",
    idCat: "1",
  },
  {
    id: "38",
    nombre: "Coca Cola",
    precio: 620,
    img: "../src/images/beb_cocaCola.jpg",
    idCat: "2",
  },
  {
    id: "39",
    nombre: "Yogurt Ideal",
    precio: 200,
    img: "../src/images/lact_yogurth.jpg",
    idCat: "1",
  },
  {
    id: "40",
    nombre: "Gaseosa en lata",
    precio: 300,
    img: "../src/images/beb_gaseosa.jpg",
    idCat: "2",
  },
  {
    id: "41",
    nombre: "Yogurt Colun",
    precio: 240,
    img: "../src/images/lact_yogurth2.jpg",
    idCat: "1",
  },
  {
    id: "42",
    nombre: "Gin",
    precio: 780,
    img: "../src/images/beb_gin.jpg",
    idCat: "2",
  },
  {
    id: "43",
    nombre: "Yogurt Griego",
    precio: 320,
    img: "../src/images/lact_yogurth3.jpg",
    idCat: "1",
  },
  {
    id: "44",
    nombre: "Wisky Jack Daniels",
    precio: 2950,
    img: "../src/images/beb_wisky.jpg",
    idCat: "2",
  },
]

// esta funcion se utiliza para gestionar TODOS los productos
export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos)
    }, 2000)
  })
}

// esta funcion se utilzia pra gestionar SOLO UN producto
export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => prod.id === id)
      resolve(producto)
    }, 2000)
  })
}

//Creamos una funcion que retorne TODA UNA categoria
export const getCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.filter((prod) => prod.idCat === idCategoria)
      resolve(producto)
    }, 2000)
  })
}
