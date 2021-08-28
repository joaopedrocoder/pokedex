import styled from "styled-components";

const HeaderDiv = styled.header`
  background-color: #0a0a0a;
  padding: 15px 0;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.4);
`
const LogoPokemon = styled.img`
  max-width: 100%;
  width: 200px;
  cursor: pointer;

  @media (max-width: 420px){
    margin: 15px 0;
  }  
`

const ConteudoDiv = styled.div`
  max-width: 100%;
  width: 1160px;
  display: flex;
  margin: 0 auto;
  padding: 0 29px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 420px){
    flex-direction: column;
  }  
`

const ContainerConteudo = styled.div`
  margin: 0 auto;
  min-height: 100vh;
`

const DivTitulo = styled.div`
  margin: 60px 0 40px 0;
  text-align: center;

  h1{
    display: inline-block;
    font-size: 2em;
    font-weight: bold;
    color: white;
    text-transform: capitalize;
  }

  span{
    color: white;
    font-size: 2em;
    font-weight: bold;
    margin-left: 20px;
  }
`
const DivPrincipal = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const DivImg = styled.div`
  max-width: 100%;
  margin: 0 80px;

  img{
    max-width: 100%;
    width: 350px;
  }
`

const DivTipo = styled.div`
  display: flex;
  justify-content: center;
`

const DivInfo = styled.div`
  padding: 30px;
  max-width: 100%;
  width: 350px;
  margin: 0 80px;
  background-color: #E7262D;
  border-radius: 7px;
  box-shadow: 0px 5px 12px 5px rgba(0, 0, 0, 0.4);

  h2{
    margin-bottom: 5px;
    text-align: center;
  }

  h4{
    text-transform: capitalize;
    padding: 2px 8px;
    background-color: #DCDFE4;
    margin-bottom: 5px;
    border-radius: 50px;
  }

  @media (max-width: 420px){
    margin-top: 40px;
  }  
`

const Estatisticas = styled.div`
  margin-bottom: 20px;
  span{
    font-weight: normal;
  }
`

const Golpes = styled.div`

`

export {
  ContainerConteudo,
  HeaderDiv,
  LogoPokemon,
  ConteudoDiv,
  DivTitulo,
  DivPrincipal,
  DivImg,
  DivInfo,
  Estatisticas,
  Golpes,
  DivTipo
}