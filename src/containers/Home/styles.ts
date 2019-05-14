import styled from 'styled-components'

import Toast from 'components/Toast'
import Text from 'components/Text'
import Button from 'components/Button'

const WelcomeToast = styled(Toast)`
  padding: 10px;
`

const Label = styled(Text)`
  color: #f8f8f8;
`

const ToastButton = styled(Button)`
  background: #f8f8f8;
  color: #383838;
  padding: 5px 10px;
  margin-left: 15px;
  border-radius: 5px;
`

export { WelcomeToast, Label, ToastButton }
