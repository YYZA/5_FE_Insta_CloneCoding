import React from 'react'
import styled from 'styled-components'
import Text from '../elements/Text'
import Header from '../components/Header'

const UserProfile = (props) => {
  return (
    <div
      style={{
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrHPu9t5m4ShcjEtJhoMJIkYZ64fl8q2veA&usqp=CAU)',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        margin: '0px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Header />
        <Circle src={props.user_image}></Circle>
        <Text weight="600" size="24px">
          {props.nickname}
        </Text>
        <Rectangle src={props.user_image}></Rectangle>
      </Container>
    </div>
  )
}

UserProfile.defaultProps = {
  nickname: 'YYZAS',
  user_image: 'https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927',
}

export default UserProfile
const Rectangle = styled.img`
  width: '200px';
  height: '200px';
`

const Circle = styled.img`
  border-radius: 50%;
  margin: 100px 0 0 0;
  width: 30%;
`

const Container = styled.div`
  height: 690px;
  width: 450px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  margin: 0px auto;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`
