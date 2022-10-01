function PetForm() {
    return (
        
        <form>
             <input type="text" placeholder="Insira o nome do pet"/>
             <input type="number" placeholder="Insira a idade do pet"/> 
             <input type="text" placeholder="Insira a raça do pet"/>
             <input type="number" placeholder="Insira o tamanho do pet"/> 
             <input type="text" placeholder="Insira o nome do dono"/>
             <input type="tel" placeholder="Insira o telefone para contato"/>
             <input type="file" placeholder="Insira a imagem do pet"/> 
             <input type = "text" placeholder="Insira uma observação"/>
             <input type="submit" value= "Cadastrar" />     
    
        </form>
    )
}

export default PetForm