import styled from 'styled-components';

export const Container = styled.div`
font-family: 'Courier New', Courier, monospace;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
        form{
            label{
                input{
                    display:flex;
                    border: 1px solid;
                    border-radius: 0.4rem;
                    margin: 0 0 0.7rem 0 ;
                    transition: 0.2s background-color;
                   
                }
                input[type="file"]{
                    padding:0.3rem;
                    background-color:#fff;
                    font-family: 'Courier New', Courier, monospace;
                    
                }
                input:hover{
                    background-color:#eff2d5;
                }
                

                }
                
            }
            button{
                padding:0.3rem 1rem;
                border: 1px solid;
                border-radius: 1rem;
                background-color: #fff;
                transition: 0.2s background-color;
                font-family: 'Courier New', Courier, monospace;
                font-weight: bold;
                font-size:1rem;
            
        }
        button:hover{
        background-color:#eff2d5;
        }
`;


export const FormularioEstilizado = styled.div`
        border: 1px solid;
        padding: 0 1rem 1rem;
        border-radius:1rem;
        margin: 0;
        background-color: #f2f7c8;
`;

export const CorpoInteiro = styled.div`
    body{
      
    }
`;

export const Ficha = styled.div`

border: 1px solid;
padding: 0 1rem 1rem;
border-radius:1rem;
margin: 1rem 0;
background-color: #f2f7c8;
h2{
    border: 1px solid;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #fcfcf7;
    span{
        font-weight: normal;
    }
}
`;