import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    padding: 7px 12px;
    width: 20%;
    border-radius: 10px;
    border: none;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.50);
`

const Search = ({onChange}) => {
    return (
        <Input
            type='text'
            placeholder='Pesquisar...'
            onChange={onChange}
        />
    )
}

export default Search
