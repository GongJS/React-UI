import React from 'react';
import Icon from '../icon/Icon'
import { combineClass } from '../../helpers/utils';
import './loading.scss';
interface LoadProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  size?: string;
  message?: string;
  loading?: boolean;
}

const Loading: React.FC<LoadProps> = ({name, size, message,loading,className,children, ...restProps}) => {
  return (
    <div className="r-loading-container">
      {
        loading && <div className={combineClass('r-loading', className, `${children? 'r-nested-loading': ''}`)} {...restProps}>
         
            {
              name === 'spin' ? 
                <div className={combineClass( 'r-loading-spin-rotate ',`r-loading-spin`, `r-loading-${size}`)}>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div> : <Icon name={name} color="#1890ff"  className={combineClass( 'r-loading-spin-rotate ',`r-loading-${size}`)}/>
            }
          {
            message && <div className="r-loading-text">{message}</div>
          }
        </div>
      }
      <div className="r-loading-children">
        {children}
      </div>
    </div>
  )
}

Loading.defaultProps = {
  size: 'medium',
  message: '',
  loading: true
}

export default Loading;