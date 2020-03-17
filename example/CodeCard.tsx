import React, { useState } from 'react'
import Icon from '../lib/components/icon'
import { combineClass } from '../lib/helpers/utils'
import CodeEditor from './CodeEditor'
import './CodeCard.scss'
interface IProps {
  setRawCode?: (value: string) => void
  scaleY?: number
  title: string
  summary: string
  code: string
}

const CodeCard: React.FC<IProps> = ({ children, title, code, summary }) => {
  const [scaleMultiple, setScaleMultiple] = useState(0)
  const handleClick = () => {
    if (scaleMultiple === 0) {
      setScaleMultiple(1)
    } else {
      setScaleMultiple(0)
    }
  }
  return (
    <div className="r-code-card">
      <div className="content">{children}</div>

      <div className="title">
        <span>{title}</span>
      </div>
      <div className="sub-title">
        {summary}{' '}
        <Icon
          color="#596c8e"
          className={combineClass(
            'icon',
            `${scaleMultiple === 1 ? 'open' : 'close'}`,
          )}
          name="right"
          onClick={handleClick}
        />
      </div>

      <CodeEditor scaleMultiple={scaleMultiple} value={code}></CodeEditor>
    </div>
  )
}

export default CodeCard
