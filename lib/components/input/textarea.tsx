import React, { useMemo, useCallback } from 'react';
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
  onValueChange?: (value:string) => any
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
  onValueChange,
  style,
  placeholder,
  className,
  children,
  ...restProps
}) => {
  const id = uniqueId(4)
  const textareaRef = React.createRef<HTMLTextAreaElement>()
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    onValueChange && onValueChange(e.currentTarget.value)
    if (autosize) {
      const { top, bottom } = textareaRef.current!.getBoundingClientRect()
      const scrollHeight = textareaRef.current!.scrollHeight
      const textHeight = bottom - top
      if (scrollHeight > textHeight) {
        textareaRef.current!.style.height = scrollHeight + 'px'
      }
    }
  }
  const changeValue =useCallback((value?: string) => {
    if (value !== undefined) {
      return value;
    }
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    return ''
  }, [defaultValue])

  const derivedName = useMemo(() => changeValue(value), [changeValue,value])
  return (
    <textarea
      id={id}
      value={derivedName}
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