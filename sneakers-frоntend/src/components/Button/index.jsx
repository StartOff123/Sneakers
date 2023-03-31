import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { ArrowRightShort, ArrowLeftShort } from 'react-bootstrap-icons'

import './Button.scss'

const Button = ({ width, type, content, action }) => {
  return (
    <button style={width && { width }} onClick={action} className={classnames('button', {
        'button-back': type === 'back',
        'button-next': type === 'next'
    })}>
        {type === 'back' ? <ArrowLeftShort /> : <ArrowRightShort />}
        {content}
    </button>
  )
}

Button.propTypes = {
    type: PropTypes.string,
    content: PropTypes.string,
    action: PropTypes.func,
    width: PropTypes.string
}

export default Button