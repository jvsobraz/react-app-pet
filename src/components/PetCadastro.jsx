import React from "react";

const PetCadastro = (props) => {
  return (
    <>
      <h2>Nome: {props.nome}</h2>
      <h2>Idade: {props.idade}</h2>
      <h2>Raça: {props.raca}</h2>
      <h2>Tamanho: {props.tamanho}</h2>
      <h2>Nome do Dono: {props.nomeDono}</h2>
      <h2>Telefone do Dono: {props.telefone}</h2>
      <h2>Imagem do Pet: {props.imagem}</h2>
      <h2>Obserfações: {props.observacoes}</h2>
    </>
  );
};

export default PetCadastro;
