import React from 'react'
import styled from 'styled-components'

const Grid = (props) => {
  const {
    children,
    is_flex,
    is_grid,
    gridGap,
    coloumnGap,
    rowGap,
    gridTemplateColumns,
    gridTemplateRows,

    maxWidth,
    minWidth,
    width,
    height,

    padding,
    margin,

    bg,
    opacity,

    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,

    position,
    zIndex,
    overflowY,

    top,
    right,
    bottom,
    left,

    cursor,
    _onClick,
  } = props

  const styles = {
    is_flex: is_flex,
    is_grid: is_grid,
    gridGap: gridGap,
    coloumnGap: coloumnGap,
    rowGap: rowGap,
    gridTemplateColumns: gridTemplateColumns,
    gridTemplateRows: gridTemplateRows,

    maxWidth: maxWidth,
    minWidth: minWidth,
    width: width,
    height: height,

    padding: padding,
    margin: margin,

    bg: bg,
    opacity: opacity,

    border: border,
    borderTop: borderTop,
    borderRight: borderRight,
    borderBottom: borderBottom,
    borderLeft: borderLeft,

    position: position,
    zIndex: zIndex,
    overflowY: overflowY,

    top: top,
    right: right,
    bottom: bottom,
    left: left,

    cursor: cursor,
  }

  return (
    <React.Fragment>
      <Gridbox onClick={_onClick} {...styles}>
        {children}
      </Gridbox>
    </React.Fragment>
  )
}

Grid.defaultProps = {
  childrun: null,

  is_flex: false,
  is_grid: false,
  gridGap: 'false',
  coloumnGap: 'false',
  rowGap: 'false',
  gridTemplateColumns: 'false',
  gridTemplateRows: 'false',

  maxWidth: 'false',
  minWidth: 'false',
  width: '100%',
  height: '',

  padding: false,
  margin: false,

  bg: 'false',
  opacity: 1,

  border: 'false',
  borderTop: 'false',
  borderRight: 'false',
  borderBottom: 'false',
  borderLeft: 'false',

  position: 'false',
  zIndex: 0,
  overflowY: 'false',

  top: 'false',
  right: 'false',
  bottom: 'false',
  left: 'false',

  cursor: 'default',
  _onClick: () => {},
}

const Gridbox = styled.div`
  ${(props) => (props.is_flex ? `display: flex; align-items: center; justify-content: space-between;` : '')}
  ${(props) => (props.is_grid ? `display: grid; align-items: center; justify-content: space-between;` : '')}
	${(props) => (props.gridGap ? `gap: ${props.gridGap}` : '')}
	${(props) => (props.coloumnGap ? `column-gap: ${props.coloumnGap}` : '')}
	${(props) => (props.rowGap ? `row-gap: ${props.Gap}` : '')}
	${(props) => (props.gridTemplateColumns ? `grid-template-columns: ${props.gridTemplateColumns}` : '')}
	${(props) => (props.gridTemplateRows ? `grid-template-rows: ${props.gridTemplateRows}` : '')}

  ${(props) => (props.minWidth ? `min-width: ${props.minWidth};` : '')}
  ${(props) => (props.maxWidth ? `max-width: ${props.maxWidth};` : '')}
	width: ${(props) => props.width};
  height: ${(props) => props.height};

  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}

	${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
	opacity: ${(props) => props.opacity};

  ${(props) => (props.border ? `border: ${props.border};` : '')}
  ${(props) => (props.borderTop ? `border-top: ${props.borderTop};` : '')}
	${(props) => (props.borderRight ? `border-right: ${props.borderRight};` : '')}
	${(props) => (props.borderBottom ? `border-bottom: ${props.borderBottom};` : '')}
	${(props) => (props.borderLeft ? `border-left: ${props.borderLeft};` : '')}

	${(props) => (props.position ? `position: ${props.position};` : '')}
	${(props) => (props.zIndex ? `z-index: ${props.zIndex};` : '')}
	${(props) => (props.overflowY ? `overflow-y: ${props.overflowY};` : '')}

	${(props) => (props.top ? `top: ${props.top};` : '')}
	${(props) => (props.right ? `right: ${props.right};` : '')}
	${(props) => (props.bottom ? `bottom: ${props.bottom};` : '')}
	${(props) => (props.left ? `left: ${props.left};` : '')}

	cursor: ${(props) => props.cursor};
`

export default Grid
