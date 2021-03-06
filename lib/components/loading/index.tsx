import React from 'react'
import Icon from '../icon'
import { combineClass } from '../../helpers/utils'
import './loading.scss'
interface LoadProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
  size?: string
  message?: string
  loading?: boolean
  wrapperClass?: string
}

const Loading: React.FC<LoadProps> = ({
  name,
  size,
  message,
  loading,
  wrapperClass,
  className,
  children,
  ...restProps
}) => {
  return (
    <>
      {loading ? (
        <div className={combineClass('r-loading-container', `${wrapperClass}`)}>
          <div
            className={combineClass(
              'r-loading',
              className,
              `${children ? 'r-nested-loading' : ''}`,
            )}
            {...restProps}
          >
            <Icon
              name={name || 'loading1'}
              color="#4a90e2"
              className={combineClass('r-loading-rotate ', `r-loading-${size}`)}
            />
            {message && <div className="r-loading-text">{message}</div>}
          </div>
          <div className="r-loading-children">{children}</div>
        </div>
      ) : null}
    </>
  )
}

Loading.defaultProps = {
  name: 'loading1',
  size: 'medium',
  message: '',
  loading: true,
}

export default Loading
