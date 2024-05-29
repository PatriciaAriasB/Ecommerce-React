//TODO: EXTRA: Continuar si no da tiempo en entrega. Recuerda volver a poner las rutas e importar
//FIXME: esto es para bugs
// import { useState, useContext } from "react";
// import { GlobalContext } from "../../../context/GlobalState";

// const AddProduct = () => {
//   const [name, setName] = useState("");
//   const { addProduct } = useContext(GlobalContext);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("name", name);
//     addProduct({ name });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         onChange={(e) => setName(e.target.value)}
//         name="name"
//       />
//       <button type="submit">Añadir producto</button>
//     </form>
//   );
// };

// export default AddProduct;