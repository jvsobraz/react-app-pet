import React, { useState } from "react";
import PetCadastro from "./PetCadastro";
import { Container } from "../style/styled";
import { FormularioEstilizado } from "../style/styled";
import { Ficha } from "../style/styled";

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

  return (
    <Container>
    <form onSubmit={handleSubmit}>
    
      <FormularioEstilizado>
      <h1>Dados do Pet</h1>
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
      <button type="submit" value="Cadastrar">Cadastrar</button>
      </FormularioEstilizado>
      
      {novoPet.map((pet) => (
        <Ficha>
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
        </Ficha>
      ))}
      
    </form>
    </Container>
  );
};

export default PetForm;
