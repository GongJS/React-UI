import React, { Fragment, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeCard from '../../components/code-card'
import Icon from '@components/icon'
import Upload from '@components/upload'
import Slide from '@components/slide'

interface FileListProps {
  name?: string
  uid?: string
  status?: string
  url?: string
}
interface img {
  url: string
  height?: number
  width?: number
}
export default () => {
  const [fileList, setFileList] = useState<FileListProps[]>([])
  const [failFileList, setFailFileList] = useState<FileListProps[]>([])
  const [slideList, setSlideList] = useState()
  const [slideFailList, setSlideFailList] = useState<any>()
  const [visible, setVisible] = useState(false)
  const [failVisible, setFailVisible] = useState(false)
  const [index, setIndex] = useState('0')
  const [failIndex, setFailIndex] = useState('0')
  const uploadRef = React.useRef<any>(null)
  const onFileChange = (newFileList: FileListProps[]) => {
    setFileList(newFileList)
    const slideListCopy: img[] = []
    newFileList.map(item => {
      const v = { url: '' }
      v.url = item.url!
      slideListCopy.push(v)
    })
    //@ts-ignore
    setSlideList(slideListCopy)
  }
  const onClose = () => {
    setIndex('0')
    setVisible(false)
  }
  const onFailClose = () => {
    setFailVisible(false)
  }
  const handleImgClick = (imgSrc: string, index: string) => {
    setIndex(index)
    setVisible(true)
  }
  const handleFailImgClick = (imgSrc: string, index: string) => {
    setFailIndex(index)
    setFailVisible(true)
  }
  const onFailFileChange = (newFileList: FileListProps[]) => {
    setFailFileList(newFileList)
    const slideListCopy: img[] = []
    newFileList.map(item => {
      const v = { url: '' }
      v.url = item.url!
      slideListCopy.push(v)
    })
    setSlideFailList(slideListCopy)
  }
  return (
    <Fragment>
      <ReactMarkdown
        source={require('!!raw-loader!./upload.md').default}
        className="md"
      />
      <CodeCard
        title="照片墙"
        summary="用户可以上传图片并在列表中显示缩略图。"
        code={`
      const onFileChange = (newFileList:FileListProps[]) => {
        setFileList(newFileList)
        const slideListCopy: img[] = []
        newFileList.map(item => {
          const v = {url:''}
          v.url = item.url!
          slideListCopy.push(v)
        })
        setSlideList(slideListCopy)
      }
      const onClose = () => {
        setVisible(false)
      }
      const handleImgClick = (imgSrc: string,index:string) => {
        setIndex(index)
        setVisible(true)
      }`}
      >
        <Upload
          ref={uploadRef}
          action={'https://infinite-shelf-73753.herokuapp.com/upload'}
          name="post"
          fileList={fileList}
          onFileChange={onFileChange}
          handleImgClick={handleImgClick}
        >
          <div className="r-upload-action">
            <Icon name="add_light" />
          </div>
        </Upload>
        <Slide
          list={slideList}
          visible={visible}
          onClose={onClose}
          defaultIndex={index}
        />
      </CodeCard>
      <CodeCard
        title="图片上传失败"
        summary="图片上传失败后在列表中显示缩略图。"
        code={`
      <Upload action={'/'} fileList={failFileList} onFileChange={onFailFileChange} handleImgClick={handleFailImgClick}>
        <Icon name="add_light" />
      </Upload>
      <Slide list={slideFailList} visible={failVisible} onClose={onFailClose} defaultIndex={failIndex}/>
      `}
      >
        <Upload
          action={'/'}
          fileList={failFileList}
          onFileChange={onFailFileChange}
          handleImgClick={handleFailImgClick}
        >
          <div className="r-upload-action">
            <Icon name="add_light" />
          </div>
        </Upload>
        <Slide
          list={slideFailList}
          visible={failVisible}
          onClose={onFailClose}
          defaultIndex={failIndex}
        />
      </CodeCard>
      <ReactMarkdown
        source={require('!!raw-loader!./api.md').default}
        className="md"
      />
    </Fragment>
  )
}
