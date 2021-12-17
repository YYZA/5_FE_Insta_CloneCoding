import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Grid from '../elements/Grid'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { history } from '../redux/configureStore'
import { userActions } from '../redux/modules/user'
import { getCookie } from '../shared/Cookie'

const Siginin = (props) => {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    await axios
      .post("http://13.125.149.78/api/userlist/login", {
        userId: data.email,
        password: data.password,
      })
      .then((res) => {
        document.cookie = "authCookie" + "=" + res.data.token;
        dispatch(
          userActions.setUser({
            username: data.email,
          })
        )
        console.log(res)
        history.push('/main')
      })
      .catch((err) => {
        alert('아이디 혹은 비밀번호를 확인하세요.')
      })
  }
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
        <Logo>Instartgram</Logo>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" placeholder="이메일을 입력해주세요" {...register('email')}></Input>
          <Input type="text" placeholder="비밀번호를 입력해주세요" {...register('password')}></Input>
          <LoginBtn>로그인</LoginBtn>
          <LoginBtn
            onClick={() => {
              history.push('/signup')
            }}
          >
            회원가입
          </LoginBtn>
        </form>
      </Container>
    </div>
  )
}

export default Siginin
const Logo = styled.div`
  margin-bottom: 50px;
  font-size: 50px;
  font-family: 'Lobster', cursive;
`

const Container = styled.div`
  height: 490px;
  width: 450px;
  padding: 150px 0 0 0;
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

const Input = styled.input`
  outline: none;
  height: 45px;
  width: 300px;
  margin-bottom: 10px;
  background-color: #fafafa;
  border: #efefef 1px solid;
  border-radius: 6px;
  padding-left: 10px;
`

const LoginBtn = styled.button`
  width: 315px;
  height: 35px;
  border-radius: 6px;
  border: white;
  margin-bottom: 10px;
  background-color: #0095f6;
  color: white;
  font-size: 17px;
  cursor: pointer;
`
