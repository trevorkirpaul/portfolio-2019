import React, { Dispatch, SetStateAction } from 'react'

import * as S from '../styles'

export interface WelcomeToastProps {
  visible: boolean
  toggleVisibility: Dispatch<SetStateAction<boolean>>
}

const WelcomeToast = ({ visible, toggleVisibility }: WelcomeToastProps) => (
  <S.WelcomeToast visible={visible} domNodeID='toast-root'>
    <S.Label>This site uses localStorage to save your theme settings</S.Label>
    <S.ToastButton onClick={() => toggleVisibility(!visible)}>
      Okay!
    </S.ToastButton>
  </S.WelcomeToast>
)

export default WelcomeToast
