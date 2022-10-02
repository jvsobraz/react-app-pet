import React from "react";

const PetCadastro = (props) => {
  return (
    <>
      <h2>Nome: <span>{props.nome}</span></h2>
      <h2>Idade: <span>{props.idade}</span></h2>
      <h2>Raça: <span>{props.raca}</span></h2>
      <h2>Tamanho: <span>{props.tamanho}</span></h2>
      <h2>Nome do Dono: <span>{props.nomeDono}</span></h2>
      <h2>Telefone do Dono: <span>{props.telefone}</span></h2>
      <h2>Imagem do Pet: <span>{props.imagem}</span></h2>
      <h2>Observações: <span>{props.observacoes}</span></h2>
    </>
  );
};

export default PetCadastro;
