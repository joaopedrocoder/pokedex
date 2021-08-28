import styled from "styled-components";

const Card = styled.div`
    overflow: hidden;
    box-shadow: 0px 5px 12px 5px rgba(0, 0, 0, 0.4);
    background-color: white;
    text-align: center;
    border-radius: 1rem;
    position: relative;
    width: 250px;
    padding-bottom: 15px;
    margin: 20px 15px;
`

const DivImg = styled.div`
    
    img{
        width: 8rem;
        clip-path: circle(60px at center);
        margin-top: 3.5rem;
        background-color: white;
    }
`

const BgCor = styled.div`
    position: absolute;
    height: 7rem;
    width: 100%;
    background-color: #E7262D;
    border-bottom: 14px solid black;

`

const DivNome = styled.div`
    margin: 3px 0;
`

const Nome = styled.p`
    font-weight: bold;
    font-size: 1rem;
    text-transform: capitalize;
`

const Info = styled.div`
    margin-top: 15px;
`

const Tipo = styled.div`
    
    p{
        font-size: 0.85em;
        text-transform: capitalize;
    }
`

const DivBotao = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: space-evenly;
`

export {
    Card,
    BgCor,
    DivNome,
    Nome,
    DivImg,
    Info,
    Tipo,
    DivBotao
}
