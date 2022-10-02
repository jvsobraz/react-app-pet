import React, { useState } from "react";
import PetCadastro from "./PetCadastro";

const PetForm = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [raca, setRaca] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [nomeDono, setNomeDono] = useState("");
  const [telefone, setTelefone] = useState("");
  const [imagem, setImagem] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <label>
        Idade:
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </label>
      <label>
        Raça:
        <input
          type="text"
          value={raca}
          onChange={(e) => setRaca(e.target.value)}
        />
      </label>
      <label>
        Tamanho:
        <input
          type="number"
          value={tamanho}
          onChange={(e) => setTamanho(e.target.value)}
        />
      </label>
      <label>
        Nome do dono:
        <input
          type="text"
          value={nomeDono}
          onChange={(e) => setNomeDono(e.target.value)}
        />
      </label>
      <label>
        Telefone do dono:
        <input
          type="tel"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </label>
      <label>
        Imagem:
        <input
          type="file"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />
      </label>
      <label>
        Observações:
        <input
          type="text"
          value={observacoes}
          onChange={(e) => setObservacoes(e.target.value)}
        />
      </label>
      <input type="submit" value="Cadastrar" />
      <PetCadastro
        nome={nome}
        idade={idade}
        raca={raca}
        tamanho={tamanho}
        nomeDono={nomeDono}
        telefone={telefone}
        imagem={imagem}
        observacoes={observacoes}
      />
    </form>
  );
};

export default PetForm;
