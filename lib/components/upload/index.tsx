import React, { useRef, useState, useImperativeHandle } from 'react'
import Icon from '../icon/Icon'
import { combineClass, uniqueId, checkClient } from '../../helpers/utils'
import './upload.scss'

export interface UploadHandles {
  upload(): void
}
interface FileListProps {
  uid?: string
  name?: string
  status?: string
  url?: string
  width?: number
  height?: number
}
interface UploadProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
  multiple?: boolean
  action: string
  method?: string
  fileList: FileListProps[]
  onFileChange: (fileList: FileListProps[]) => any
  handleImgClick?: (uid: string, index: string) => any
}

const Upload: React.RefForwardingComponent<UploadHandles, UploadProps> = (
  {
    name,
    multiple,
    method,
    action,
    fileList,
    handleImgClick,
    onFileChange,
    className,
    children,
    ...restProps
  },
  ref,
) => {
  const id = uniqueId(4)
  let input: HTMLInputElement | null = null
  const fileListRef = useRef<FileListProps[]>()
  fileListRef.current = fileList
  const [visibleAction, setvisibleAction] = useState(false)
  const [selectIndex, setSelectIndex] = useState<number | null>()

  // 触发上传事件
  const handleClickUpload = () => {
    input = document.querySelector(`#${id}`)
    if (input) {
      input.addEventListener('change', handleInputChangeCallback)
      input.click()
    }
  }

  // 准备上传文件
  const uploadFiles = (srcFiles: any) => {
    for (let i = 0; i < srcFiles.length; i++) {
      const formData = new FormData()
      formData.append(name || 'file', srcFiles[i])
      startUploadFiles(formData, srcFiles[i].uid)
    }
  }
  // 开始上传
  const startUploadFiles = (formData: FormData, uid: string) => {
    const xhr = new XMLHttpRequest()
    xhr.timeout = 5000
    xhr.open(method || 'post', action)
    xhr.onload = function() {
      if (xhr.status === 200) {
        handleUploadResult(xhr, uid, 'success')
        return
      }
      handleUploadResult(xhr, uid, 'error')
    }
    xhr.onerror = function(err) {
      handleUploadResult(xhr, uid, 'error')
    }
    xhr.ontimeout = function() {
      handleUploadResult(xhr, uid, 'error')
    }
    xhr.send(formData)
  }

  // 处理上传结果
  const handleUploadResult = (
    xhr: XMLHttpRequest,
    uid: string,
    status: 'success' | 'error',
  ) => {
    let file = fileListRef.current!.filter(f => f.uid === uid)[0]
    let index = fileListRef.current!.indexOf(file)
    if (status === 'success') {
      file.status = 'success'
      file.url = JSON.parse(xhr.response).url
      file.width = JSON.parse(xhr.response).width
      file.height = JSON.parse(xhr.response).height
    } else {
      file.status = 'error'
      // 设置默认图片样式
      file.url = 'https://i.loli.net/2019/08/27/2gBTWlfkt5EDVbi.jpg'
      file.width = 500
      file.height = 500
    }
    let fileListCopy = [...fileListRef.current!]
    fileListCopy.splice(index, 1, file)
    onFileChange(fileListCopy)
  }

  // 选中图片回调
  const handleInputChangeCallback = (e: any) => {
    let srcFiles: any = []
    input!.files ? (srcFiles = input!.files) : null
    const copyFileList = JSON.parse(JSON.stringify(fileList))
    for (let i = 0; i < srcFiles.length; i++) {
      const name = srcFiles[i].name
      const uid = uniqueId(4)
      srcFiles[i].uid = uid
      const newFlie = {
        name,
        uid,
        status: 'uploading',
        url: '',
        width: 0,
        height: 0,
      }
      copyFileList.push(newFlie)
    }
    onFileChange(copyFileList)
    srcFiles.length > 0 && uploadFiles(srcFiles)
    input!.removeEventListener('change', handleInputChangeCallback)
    input!.value = ''
  }

  // 删除图片
  const handleDelImage = (uid: any) => {
    const del = fileList.filter(f => f.uid !== uid)
    onFileChange(del)
  }

  // 预览图片
  const handlePreviewImg = (imgSrc: string, index: number) => {
    handleImgClick && handleImgClick(imgSrc, index.toString())
  }

  const handleMouseEnter = (index: number) => {
    setvisibleAction(true)
    setSelectIndex(index)
  }

  const handleMouseLeave = () => {
    setvisibleAction(false)
    setSelectIndex(null)
  }

  // 父组件直接调用
  useImperativeHandle(ref, () => ({
    upload: () => {
      handleClickUpload()
    },
  }))
  return (
    <div className={combineClass('r-upload', className)} {...restProps}>
      {fileListRef.current.map((file, index) => {
        return (
          <div
            key={index}
            className="r-upload-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {file.status !== 'uploading' ? (
              <img
                className={`${
                  visibleAction && checkClient() && index === selectIndex
                    ? 'mask'
                    : ''
                }`}
                src={file.url}
                onClick={() =>
                  !checkClient() && handlePreviewImg(file.url!, index)
                }
              />
            ) : (
              <Icon
                name="loading1"
                size="3em"
                color="#8C98AE"
                className="loading"
              />
            )}
            {visibleAction && checkClient() && index === selectIndex ? (
              <div className="pc-action">
                <Icon
                  name="attention_light"
                  color="#fff"
                  onClick={() => handlePreviewImg(file.url!, index)}
                  style={{
                    marginRight: '5px',
                  }}
                />
                <Icon
                  name="delete_light"
                  color="#fff"
                  onClick={() => handleDelImage(file.uid)}
                />
              </div>
            ) : null}
            {!checkClient() ? (
              <div className="mobile-action">
                {' '}
                <Icon
                  name="round_close_fill_light"
                  color="#f4516c"
                  onClick={() => handleDelImage(file.uid)}
                />
              </div>
            ) : null}
          </div>
        )
      })}
      <div
        onClick={handleClickUpload}
        onMouseEnter={() => setvisibleAction(true)}
        onMouseLeave={() => setvisibleAction(false)}
      >
        {children}
      </div>
      <input
        id={id}
        multiple={multiple || false}
        type="file"
        name={name || 'file'}
        style={{
          display: 'none',
        }}
      />
    </div>
  )
}

Upload.displayName = 'Upload'
export default React.forwardRef(Upload)
