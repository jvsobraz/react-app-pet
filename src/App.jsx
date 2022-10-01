import React from "react";
import PetForm from "./components/FormPet";
import PetCadastro from "./components/PetCadastro";

 const App = () => {
    return(
        <>
            <h1>Dados do Pet</h1>
            <PetCadastro/>
            <PetForm />
        </>
    )
};

export default App;