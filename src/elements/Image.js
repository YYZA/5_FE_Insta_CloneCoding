import React from 'react'
import styled from 'styled-components'

const Image = (props) => {
  const { shape, src, size, alt, width, height } = props
  const styles = {
    src: src,
    size: size,
  }

  if (shape === 'circle') {
    return <ImageCircle {...styles}></ImageCircle>
  }
  if (shape === 'rectangle') {
    return (
      <SqureOutter>
        <SqureInner {...styles}></SqureInner>
      </SqureOutter>
    )
  }
  return (
    <>
      <ImageDefault {...styles}></ImageDefault>
    </>
  )
}

Image.defaultProps = {
  shpae: 'circle',
  src: 'https://kimkong2.s3.ap-northeast-2.amazonaws.com/ff.png',
  size: 45,
  alt: 'My Image',
  width: 'false',
  height: 'false',
}

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-position: center;
`

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  border: 0.5px solid lightslategray;
  background-position: center;
  margin: 5px;
`

const SqureOutter = styled.div`
  width: 100%;
`
const SqureInner = styled.div`
  position: relative;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  width: 100%;
  height: 100%;
`

export default Image
