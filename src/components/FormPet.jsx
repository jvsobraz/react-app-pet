import React, { useState } from "react";
import PetCadastro from "./PetCadastro";

const PetForm = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState();
  const [raca, setRaca] = useState("");
  const [tamanho, setTamanho] = useState();
  const [nomeDono, setNomeDono] = useState("");
  const [telefone, setTelefone] = useState();
  const [imagem, setImagem] = useState();
  const [observacoes, setObservacoes] = useState("");

  const [novoPet, setNovoPet] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newObject = {
      nome: nome,
      idade: idade,
      raca: raca,
      tamanho: tamanho,
      nomeDono: nomeDono,
      telefone: telefone,
      imagem: imagem,
      observacoes: observacoes,
    };
    setNovoPet([newObject, ...novoPet]);
  };

  console.log(novoPet);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <label>
        Idade:
        <input
          type="number"
          name="idade"
          onChange={(e) => setIdade(e.target.value)}
        />
      </label>
      <label>
        Raça:
        <input
          type="text"
          name="raca"
          onChange={(e) => setRaca(e.target.value)}
        />
      </label>
      <label>
        Tamanho:
        <input
          type="number"
          name="tamanho"
          onChange={(e) => setTamanho(e.target.value)}
        />
      </label>
      <label>
        Nome do dono:
        <input
          type="text"
          name="nomeDono"
          onChange={(e) => setNomeDono(e.target.value)}
        />
      </label>
      <label>
        Telefone do dono:
        <input
          type="tel"
          name="telefone"
          onChange={(e) => setTelefone(e.target.value)}
        />
      </label>
      <label>
        Imagem:
        <input
          type="file"
          name="imagem"
          onChange={(e) => setImagem(e.target.value)}
        />
      </label>
      <label>
        Observações:
        <input
          type="text"
          name="observacoes"
          onChange={(e) => setObservacoes(e.target.value)}
        />
      </label>
      <button type="submit" value="Cadastrar" />

      {novoPet.map((pet) => (
        <PetCadastro
          nome={pet.nome}
          idade={pet.idade}
          raca={pet.raca}
          tamanho={pet.tamanho}
          nomeDono={pet.nomeDono}
          telefone={pet.telefone}
          imagem={pet.imagem}
          observacoes={pet.observacoes}
        />
      ))}
    </form>
  );
};

export default PetForm;
