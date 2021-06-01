import styled from 'styled-components'

export const Stats = styled.div`
  padding: 2rem 0;
  font-size: 2rem;
  color: white;
  font-family: 100;

`
export const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

export const Label = styled.div`
  min-width: 200px;
  @media (min-width: 978px){
    min-width: 300px;
  }
`
export const Value = styled.div`
  min-width: 50px;
  margin: 0 2rem;
`
export const Bar = styled.div<{value: number}>`
  display: none;
  border: 1px solid ${props => props.theme.colors.primary};
  flex-grow: 1;
  border-radius: 4px;
  padding: 0.5rem;
  position: relative;
  color: back;
  @media (min-width: 978px){
    display: block;
  }
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top:0;
    bottom: 0;
    width: ${props => `${props.value}%`};
    background-color: ${props => props.theme.colors.primary};
  }
`
