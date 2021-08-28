import React from 'react'
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineFacebook, AiFillTwitterSquare } from 'react-icons/ai'
import {
    FooterDiv,
    SobreDiv,
    Logo,
    Pokebola,
    Icone,
    RedeSocial,
    SiteDiv,
    ConteudoFooter
} from './styled'

const Footer = () => {
    return (
        <FooterDiv>
            <ConteudoFooter>
                <SobreDiv>
                    <Logo src={"https://bit.ly/3wD8P6d"} />

                    <h3>Pokedex</h3>
                    <p>Pokedex desenvolvida por: Igor Artagnan, João Pedro Lopes Rodrigues, Larissa Menezes e Raphael Nicolini da Silva, utilizando a API pública <a href={"https://pokeapi.co/"} target={'_blank'} rel="noopener noreferrer">PokéAPI</a>.
                    </p>
                </SobreDiv>

                <SiteDiv>
                    <a href={"https://www.pokemon.com/br/"} target={'_blank'} rel="noopener noreferrer"> <Pokebola src={"https://bit.ly/2T5Y1jf"} /> </a>
                    <h3>Site oficial</h3>

                </SiteDiv>

                <div>
                    <div>
                        <h3>Nossas redes sociais</h3>
                    </div>
                    <RedeSocial>
                        <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer"> <Icone ><AiOutlineInstagram /></Icone></a>
                        <a href='https://www.youtube.com' target='_blank' rel="noopener noreferrer"><Icone ><AiOutlineYoutube /></Icone></a>
                        <a href='https://www.facebook.com' target='_blank' rel="noopener noreferrer"> <Icone ><AiOutlineFacebook /></Icone></a>
                        <a href='https://www.twitter.com' target='_blank' rel="noopener noreferrer"><Icone ><AiFillTwitterSquare /></Icone></a>
                    </RedeSocial>
                </div>
            </ConteudoFooter>
        </FooterDiv>
    )
}

export default Footer
