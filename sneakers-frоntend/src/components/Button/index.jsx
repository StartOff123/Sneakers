import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { ArrowRightShort, ArrowLeftShort } from 'react-bootstrap-icons'

import './Button.scss'

const Button = ({ width, padding, borderRadius, type, content, action }) => {
  return (
    <button style={{ width, padding, borderRadius }} onClick={action} className={classnames('button', {
      'button-back': type === 'back',
      'button-next': type === 'next'
    })}>
      {type && (type === 'back' ? <ArrowLeftShort /> : <ArrowRightShort />)}
      {content}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  content: PropTypes.string,
  action: PropTypes.func,
}

export default Button