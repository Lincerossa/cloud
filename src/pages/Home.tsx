import { Wrapper, Padder, Background } from '../components'
import theme from '../styles/theme'

import foo from './utils/foo'

export default () => {
  const result = foo('cloud demo')

  return (
    <Padder size="large">
      <Background color="white" background={theme.colors.primary}>
        <Wrapper size="large">
          <Padder size="large">
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </Padder>
        </Wrapper>
      </Background>
    </Padder>
  )
}