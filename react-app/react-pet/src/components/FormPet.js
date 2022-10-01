function PetForm() {
    return (
        
        <form>
             <input class="nome" type="text" placeholder="Insira o nome do pet"/>
             <input class="idade" type="number" placeholder="Insira a idade do pet"/> 
             <input class="raca" type="text" placeholder="Insira a raça do pet"/>
             <input class="tamanho" type="number" placeholder="Insira o tamanho do pet"/> 
             <input class="dono" type="text" placeholder="Insira o nome do dono"/>
             <input class="telefone" type="tel" placeholder="Insira o telefone para contato"/>
             <input class="imagem" type="file" placeholder="Insira a imagem do pet"/> 
             <input class="obs" type = "text" placeholder="Insira uma observação"/>
             <input class="button" type="submit" value= "Cadastrar" />     
    
        </form>
    )
}

export default PetForm