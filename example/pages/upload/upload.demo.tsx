import React, { Fragment, useState} from 'react';
import ReactMarkdown from 'react-markdown'
import CodeCard from '../../CodeCard'
import Icon from '../../../lib/components/icon/Icon'
import Upload from '../../../lib/components/upload/Upload'

interface FileListProps {
  name?: string
  uid?: string
  status?: string
  url?: string
}

export default () => {
  const [fileList, setFileList] = useState<FileListProps[]>([])
  const onFileChange = (newFileList:FileListProps[]) => {
    setFileList(newFileList)
  }
  return <Fragment>
    <ReactMarkdown source={require('!!raw-loader!./upload.md').default} className="md" />
    <CodeCard
      title="照片墙"
      summary="用户可以上传图片并在列表中显示缩略图。"
      code={`
      <Upload action={'https://koa-img.herokuapp.com/upload'} fileList={fileList} onFileChange={onFileChange}>
        <Icon name="add_light" />
      </Upload>
      `
      }
    >
     <Upload action={'https://koa-img.herokuapp.com/upload'} fileList={fileList} onFileChange={onFileChange}>
       <Icon name="add_light" />
     </Upload>
    </CodeCard>
    <ReactMarkdown source={require('!!raw-loader!./api.md').default} className="md" />
  </Fragment>
}
