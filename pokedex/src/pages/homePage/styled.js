import styled from "styled-components";

const ContainerConteudo = styled.div`
  max-width: 100%;
  width: 1160px;
  padding: 0 15px;
  margin: 0 auto;
  min-height: 100vh;
  h1{
    color: white;

    @media (max-width: 420px){
      margin: 60px 0 20px 0;
      text-align: center;
    }
  }
`

const HeaderContainer = styled.div`
  background-color: #0a0a0a;
  padding: 15px 0;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.4);
`

const ConteudoDiv = styled.div`
  max-width: 100%;
  width: 57.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 420px){
    flex-direction: column-reverse;
    width: 100%;
  }

  div{
    margin-left: 62px;

    @media (max-width: 420px){
      margin-left: 0;
    }
  }
`

const LogoPokemon = styled.img`
  max-width: 100%;
  width: 200px;
  cursor: pointer;

  @media (max-width: 420px){
    margin-bottom: 20px;
  }
`

const ConatinerCards = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 420px){
    justify-content: center;
  }
`

const ContainerSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 28px  60px 15px;
`

export {
  ContainerConteudo,
  HeaderContainer,
  LogoPokemon,
  ConteudoDiv,
  ConatinerCards,
  ContainerSearch
};
