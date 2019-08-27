import React, {useRef, useState} from 'react';
import Icon from '../icon/Icon'
import Modal from '../modal/Modal'
import {combineClass, uniqueId} from '../../helpers/utils';
import './upload.scss'
interface FileListProps {
    uid?: string
    name?: string
    status?: string
    url?: string
}
interface UploadProps extends React.HTMLAttributes < HTMLDivElement > {
    name?: string
    multiple?: boolean 
    action: string 
    method?: string 
    fileList: FileListProps[]
    onFileChange: (fileList : FileListProps[]) => any
}

const Upload : React.FC < UploadProps > = ({
    name,
    multiple,
    method,
    action,
    fileList,
    onFileChange,
    className,
    children,
    ...restProps
}) => {
    const id = uniqueId(4)
    let input : HTMLInputElement | null = null
    const fileListRef = useRef < FileListProps[] > ()
    fileListRef.current = fileList
    const [visibleAction, setvisibleAction] = useState(false)
    const [visibleModal, setVisibleModal] = useState(false)
    const [previewImgSrc, setPreviewImgSrc] = useState('')

    const startUploadFiles = (formData : FormData, uid : string) => {
        const xhr = new XMLHttpRequest()
        xhr.timeout = 5000
        xhr.open(method || 'post', action)
        xhr.onload = function () {
          handleUploadResult(xhr, uid, 'success')
        }
        xhr.onerror = function () {
          handleUploadResult(xhr, uid, 'error')
        }
        xhr.ontimeout = function (e) {
          handleUploadResult(xhr, uid, 'error')
        }
        xhr.send(formData)
    }
    const handleUploadResult = (xhr : XMLHttpRequest, uid : string, status: 'success' | 'error') => {
      let file = fileListRef.current !.filter(f => f.uid === uid)[0]
        let index = fileListRef.current !.indexOf(file)
        if (status === 'success') {
          file.status = 'success'
          file.url = JSON.parse(xhr.response).url
        } else {
          file.status = 'error'
          file.url = 'https://i.loli.net/2019/08/27/2gBTWlfkt5EDVbi.jpg'
        }
        let fileListCopy = [...fileListRef.current !]
        fileListCopy.splice(index, 1, file)
        onFileChange(fileListCopy)
    }
    const uploadFiles = (srcFiles : any) => {
        for (let i = 0; i < srcFiles.length; i++) {
            const formData = new FormData()
            formData.append(name || 'file', srcFiles[i])
            startUploadFiles(formData, srcFiles[i].uid)
        }
    }
    const handleInputChangeCallback= (e:any) => {
        let srcFiles : any = []
        input !.files ? srcFiles = input !.files: null
        const copyFileList = JSON.parse(JSON.stringify(fileList))
        for (let i = 0; i < srcFiles.length; i++) {
            const name = srcFiles[i].name
            const uid = uniqueId(4)
            srcFiles[i].uid = uid
            const newFlie = {name,uid,status: 'uploading',url: ''}
            copyFileList.push(newFlie)
        }
        onFileChange(copyFileList)
        srcFiles.length > 0 && uploadFiles(srcFiles)
        input !.removeEventListener('change', handleInputChangeCallback)
        input !.value = ''
    }
    const handleClickUpload = () => {
        input = document.querySelector(`#${id}`)
        if (input) {
            input.addEventListener('change', handleInputChangeCallback)
            input.click()
        }
    }
    const handleDelImage = (uid : any) => {
        const del = fileList.filter(f => f.uid !== uid)
        onFileChange(del)
    }
    const handlePreviewImg = (imgSrc : string) => {
        setVisibleModal(true)
        setPreviewImgSrc(imgSrc)
    }
    return (
        <div className={combineClass('r-upload', className)} {...restProps}>
            {fileListRef
                .current
                .map((file, index) => {
                    return (
                        <div
                            key={index}
                            className='r-upload-item'
                            onMouseEnter={() => setvisibleAction(true)}
                            onMouseLeave={() => setvisibleAction(false)}>
                            {file.status !== 'uploading'
                                ? <img
                                        className={`${visibleAction
                                        ? 'mask'
                                        : ''}`}
                                        src={file.url}/>
                                : <Icon name='loading1' size="3em" color="#8C98AE" className="loading"/>
}
                            {visibleAction
                                ? <div className="action">
                                        <Icon
                                            name='attention_light'
                                            color="#fff"
                                            onClick={() => handlePreviewImg(file.url !)}
                                            style={{
                                            marginRight: '5px'
                                        }}/>
                                        <Icon
                                            name='delete_light'
                                            color="#fff"
                                            onClick={() => handleDelImage(file.uid)}/>
                                    </div>
                                : null
}
                        </div>
                    )
                })
}
            <div
                className="r-upload-action"
                onClick={handleClickUpload}
                onMouseEnter={() => setvisibleAction(true)}
                onMouseLeave={() => setvisibleAction(false)}>
                {children}
            </div>
            <input
                id={id}
                multiple={multiple}
                type="file"
                name="file"
                style={{
                display: 'none'
            }}/>
            <Modal
                visible={visibleModal}
                footer={null}
                header={null}
                onCancel={() => setVisibleModal(false)}>
                <img src={previewImgSrc}/>
            </Modal>
        </div>
    )
}
Upload.defaultProps = {
    name: 'file',
    method: 'post',
    multiple: false
}
Upload.displayName = 'Upload'
export default Upload;