const product = [
    {
        name:"Almendras",
        id:"1",
        image: "../img/almendras1.jpg",
        category:"Fruto Seco",
        price:500,
        gram:100,
        stock:10,
        description:"Almendras sin cascaras Origen Argentina, Provincia de Buenos Aires",
    },
    {
        name:"Castañas de Caju",
        id:"2",
        image: "../img/castañas-de-caju2.jpg",
        category:"Fruto Seco",
        price:470,
        gram:100,
        stock:20,
        description:"Castañas de Caju sin cascaras Origen Argentina, Provincia de Mendoza",
    },
    {
        name:"Nueces",
        id:"3",
        image: "../img/nueces3.jpg",
        category:"Fruto Seco",
        price:450,
        gram:100,
        stock:15,
        description:"Nueces sin cascaras Origen Argentina, Provincia de Mendoza",
    },
    {
        name:"Mani con Cascaras",
        id:"4",
        image: "../img/mani-con-cascara4.jpg",
        category:"Fruto Seco",
        price:200,
        gram:100,
        stock:30,
        description:"Mani con Cascaras Origen Argentina, Provincia de Mendoza",
    },
    {
        name:"Mani Pelado",
        id:"5",
        image: "../img/mani-sin-cascara5.jpg",
        category:"Fruto Seco",
        price:250,
        gram:100,
        stock:20,
        description:"Mani Pelado cascaras Origen Argentina, Provincia de Mendoza",
    },
    {
        name:"Pistacho",
        id:"6",
        image: "../img/pistachos6.jpg",
        category:"Fruto Seco",
        price:650,
        gram:100,
        stock:40,
        description:"Pistacho con cascaras Origen Argentina, Provincia de San Juan",
    },
    {
        name:"Avellana",
        id:"7",
        image: "../img/avellanas7.jpg",
        category:"Fruto Seco",
        price:600,
        gram:100,
        stock:20,
        description:"Avellana sin cascaras Origen Argentina, Provincia de Rio Negro",
    },
    {
        name:"Granola",
        id:"8",
        image: "../img/granola8.jpg",
        category:"Cereal Mix",
        price:450,
        gram:100,
        stock:10,
        description:"  Esta hecho con frutos secos (almendras y nueces), avena, mezclado con miel y horneado hasta quedar crujiente. Tambien cuenta con semillas (girasol, zapallo, lino, sésamo) y frutas deshidratadas (pasas y plátano) Origen Argentina, Provincia de Buenos aires",
    },
    {
        name:"Avena",
        id:"9",
        image: "../img/avena9.jpg",
        category:"Cereal",
        price:300,
        gram:100,
        stock:19,
        description:"  Avena suelta Origen Argentina, Provincia de Buenos aires",
    },
    {
        name:"Mix Frutos Secos",
        id:"10",
        image: "../img/mix-frutos-secos10.jpg",
        category:"Frutos Secos Mix",
        price:550,
        gram:100,
        stock:15,
        description:"Mix Frutos Secos sin cascaras Origen Argentina, Provincia de Mendoza",
    },
    {
        name:"Mix de Semillas",
        id:"11",
        image: "../img/mix-de-semillas11.jpeg",
        category:"Mix de Semillas",
        price:300,
        gram:100,
        stock:30,
        description:"Mix de Semillas sin cascaras Origen Argentina, Provincia de Buenos Aires",
    },
    {
        name:"Mix Cervecero",
        id:"12",
        image: "../img/mix-salado12.jpeg",
        category:"Mix Cervecero",
        price:400,
        gram:100,
        stock:40,
        description:"Mix Cervecero sin cascaras frito con sal agregado Origen Argentina, Provincia de Buenos Aires",
    },
    {
        name:"Mix Tropical",
        id:"13",
        image: "../img/mix-tropical13.jpg",
        category:"Mix Tropical",
        price:450,
        gram:100,
        stock:20,
        description:"Mix Tropical sin cascaras con frutas desecadas y frutos secos Origen Argentina, Provincia de Buenos Aires",
    },
    {
        name:"Frutas Desecadas",
        id:"14",
        image: "../img/frutas-desecadas14.jpg",
        category:"Frutas Desecadas",
        price:500,
        gram:100,
        stock:10,
        description:"Frutas Desecadas kiwi, banana, cereza, anana, frutillas Origen Argentina, Provincia de Buenos Aires",
    },
    {
        name:"Pasas de Uvas",
        id:"15",
        image: "../img/pasas-de-uvas15.jpg",
        category:"Pasas de Uvas",
        price:250,
        gram:100,
        stock:12,
        description:"Pasas de Uvas Violetas Origen Argentina, Provincia de Buenos Aires",
    },
    {
        name:"Pasas de Uvas Rubias",
        id:"16",
        image: "../img/pasas-de-uvas-rubias16.jpg",
        category:"Pasas de Uvas Rubias",
        price:250,
        gram:100,
        stock:18,
        description:"Pasas de Uvas Rubas Origen Argentina, Provincia de Buenos Aires",
    }
  ]

  export const getProducts = () =>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(product)
        },1000)
    })
  }

  export const getOneProduct = (id) =>{
    return new Promise((resolve)=>{
        let oneproduct = product.find((item)=> item.id === id)
       
        setTimeout(()=>{
            resolve(oneproduct)
        },1000)
    })
  }