import React from 'react'
import styled from 'styled-components/native'

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => (props.disable ? '#EBEBEB' : props.bgColor)};
  padding: 16px;
  border:${props => ('1px', props.borderColor) || 'none'};
  border-radius: ${props => props.borderRadius};
  width: 100%;
  margin-bottom: ${props => props.marginBottom}
`

const ButtonText = styled.Text`
  color: ${props => props.disable ? '#00000014' : props.textColor};
  font-size: ${props => props.fontSize || '18px'};
  font-weight: ${props => props.fontWeight};
  text-align: center;
  text-transform: uppercase;
`

const Button = ({ bgColor, borderColor, borderRadius, marginBottom, disable, text, textColor, fontSize, fontWeight }) => {
  return (
    <ButtonContainer bgColor={bgColor} borderColor={borderColor} borderRadius={borderRadius} marginBottom={marginBottom} disable={disable}>
      <ButtonText textColor={textColor} font={fontSize} fontWeight={fontWeight}>{text}</ButtonText>
    </ButtonContainer>
  )
}

export default Button
