import React, { FC } from 'react'
import styled from 'styled-components'
import { TPropsFormVuzByEge } from './types'

const Block = styled.div``

/** Форма выбора вуза по предметам егэ */
const FormVuzByEge: FC<TPropsFormVuzByEge> = ({ children, ...props }) => {
  return <Block {...props}>{children}</Block>
}

FormVuzByEge.defaultProps = {}

export default FormVuzByEge
