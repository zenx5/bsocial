import React from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components/native'

// const Placeholder = styled.Text`
//   border-bottom: 1px;
//   width: 100%;
//   outline: none;
//   &:focus {
//     outline: none
//   }
// `

const Container = styled.View`
  border-bottom-width: 1px;
  

`

const Input = (props) => {
  return (
    <Container>
      <TextInput
        style={{ fontSize: 14, borderBottomWidth: 1, borderBottomColor: '#707070', paddingBottom: 5 }} placeholder={props.placeholder}
      />
    </Container>
  )
}

export default Input
