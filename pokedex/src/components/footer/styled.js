import styled from 'styled-components'

const FooterDiv = styled.footer`
    max-width: 100%;
    padding: 20px 0;
    color: white;
    background-color: #0a0a0a;
    margin-top: 80px;

    h3{
        margin-bottom: 15px;
        color: #ffcb04;
    }

    a{
        text-decoration: none;
        color: red;
        
    }
`

const ConteudoFooter = styled.div`
    max-width: 100%;
    width: 1160px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 420px){
        flex-direction: column;
    }
`

const SobreDiv = styled.div`
    max-width: 100%;
    width: 280px ;
    text-align: center;

    @media (max-width: 420px){
        margin-bottom: 20px;
    }
`

const Logo = styled.img`
    max-width: 100%;
    width: 150px;
`

const SiteDiv = styled.div`

    @media (max-width: 420px){
        margin-bottom: 20px;
    }
`

const Pokebola = styled.img`
    max-width: 100%;
    width: 93px;
`
const Icone = styled.span`
    font-size: 40px;
    color: white;
`

const RedeSocial = styled.div`
    display: flex;
    justify-content: space-between;
`

export {
    FooterDiv,
    SobreDiv,
    Logo,
    Pokebola,
    Icone,
    RedeSocial,
    SiteDiv,
    ConteudoFooter
}