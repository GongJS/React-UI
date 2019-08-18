import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/mbo.css';
import 'codemirror/theme/neo.css';
require('codemirror/mode/jsx/jsx');
import './CodeEditor.scss';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/dracula.css';
interface IProps {
  value: string;
  setRawCode?: (value: string) => void;
  scaleMultiple?: number;
}
const CodeEditorRef = React.createRef<HTMLDivElement>()
let height: string
const CodeEditor = (props: IProps) => {
  return (
    <div
      style={{
        fontSize: '1em',
        lineHeight: 1.4,
        background: '#e9f0f8',
        fontFamily: 'Hack, monospace'
      }}
    >
       <CSSTransition
        in={props.scaleMultiple === 1}
        timeout={300}
        unmountOnExit
        onEnter={(el: HTMLDivElement) => {
          let childCurrent: HTMLDivElement | null = CodeEditorRef.current
          if (childCurrent) {
            const { top, bottom } = childCurrent.getBoundingClientRect()
            height = bottom - top + 'px'
            el.style.opacity = '0'
            el.style.height = '0'
          }
        }}
        onEntering={(el: HTMLDivElement) => {
          el.style.height = height
          el.style.marginTop = '20px'
          el.style.opacity = '1'
          el.style.transition = 'all 0.3s ease'
        }}
        onExit={(el: HTMLDivElement) => {
          el.style.height = height
          el.style.opacity = '1'
        }}
        onExiting={(el: HTMLDivElement) => {
          el.style.height = '0'
          el.style.marginTop = '0'
          el.style.opacity = '0'
          el.style.transition = 'all 0.3s ease'
        }}
      >
        <div ref={CodeEditorRef} >
        <CodeMirror
        onBeforeChange={(editor, data, value) => {}}
        value={props.value}
        options={{
          mode: 'jsx',
          theme: 'neo',
          keyMap: 'sublime',
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {

        }}
      />
        </div>
      </CSSTransition>
     
    </div>
  )
}

export default CodeEditor;