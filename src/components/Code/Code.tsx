import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import {
  dracula,
  atomOneLight
} from 'react-syntax-highlighter/dist/styles/hljs'

import ApplicationContext from 'shared/context/Application'

export interface CodeProps {
  source: string
  language: string
}

const Code = ({ source, language }: CodeProps) => {
  const { theme } = React.useContext(ApplicationContext)

  return (
    <SyntaxHighlighter
      style={theme === 'night' ? dracula : atomOneLight}
      showLineNumbers
      language={language}
    >
      {source}
    </SyntaxHighlighter>
  )
}

Code.defaultProps = {
  source: 'const name = "missing"',
  language: 'react'
}
export default Code
