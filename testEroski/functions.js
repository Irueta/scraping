const productos=["bicicleta", "patinete", "snowboard"];

const getAll = (array)=>{
    if(array.length == 0){
        return "El array está vacio";
    }
    return array.join(", ")
    };

console.log(getAll(productos));


const getByNombre= (array,nombre)=>{
    if(array.length==0 || !nombre){
        return "Los datos introducidos son incorrectos"
    }
    const producto = array.find((element) => element == nombre);
    return producto;
};
console.log(getByNombre(productos));


const createProduct = (producto,array)=>{
    array.push(producto);
    return array;
}

console.log(createProduct("yogurt",productos));



const updateProduct = (array,productName,newName)=>{
    const index = array.indexOf(productName);
    array[index] = newName;
}

updateProduct(productos,"bicicleta","bicicletaNueva");
console.log(productos);



const removeItem = (array,producto)=>{
    const index = array.indexOf(producto);
    if (index > -1) {
      array.splice(index, 1);
    }
};

export default{
    getAll,
    getByNombre,
    createProduct,
    updateProduct,
    removeItem
}