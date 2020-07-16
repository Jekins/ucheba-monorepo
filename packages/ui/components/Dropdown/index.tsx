import React, { FC } from 'react'
import styled from 'styled-components'
import { TPropsDropdown } from './types'

const Block = styled.div``

/** Выпадающий список */
const Dropdown: FC<TPropsDropdown> = ({ children, ...props }) => {
  return <Block {...props}>{children}</Block>
}

Dropdown.defaultProps = {}

export default Dropdown
