import React, { useEffect, useState } from 'react';
import { combineClass, uniqueId } from '../../helpers/utils';;

interface Size {
  rows: number | string
  cols: number | string
}
interface TextareaProps {
  size?: Size
  autosize?: boolean
  value?: string
  defaultValue?: string | undefined
  onChange?: (value: string) => any
  className?: string
  style?: React.CSSProperties
  id?: string
  placeholder?: string
}

const Textarea: React.FunctionComponent<TextareaProps> = ({
  size,
  autosize,
  value,
  defaultValue,
  onChange,
  style,
  placeholder,
  className,
  children,
  ...restProps
}) => {
  const id = uniqueId(4)
  const textareaRef = React.createRef<HTMLTextAreaElement>()
  const [derivedValue, setDerivedValue] = useState()
  let hasSetDefaultValue = false
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    onChange && onChange(e.target.value)
    setDerivedValue(e.target.value)
    if (autosize) {
      const { top, bottom } = textareaRef.current!.getBoundingClientRect()
      const scrollHeight = textareaRef.current!.scrollHeight
      const textHeight = bottom - top
      if (scrollHeight > textHeight) {
        textareaRef.current!.style.height = scrollHeight + 'px'
      }
    }
  }
  useEffect(() => {
    if (defaultValue && !hasSetDefaultValue) {
      setDerivedValue(defaultValue)
      hasSetDefaultValue = true
    }
  })
  return (
    <textarea
      id={id}
      value={derivedValue}
      onChange={handleChange}
      className={combineClass('r-textarea', className, `${autosize ? 'autosize' : ''}`)}
      style={style}
      ref={textareaRef}
      placeholder={placeholder}
      cols={size ? Number(size.cols) : undefined}
      rows={size ? Number(size.rows) : undefined}
    />
  )
}

Textarea.displayName = 'Textarea'
export default Textarea;