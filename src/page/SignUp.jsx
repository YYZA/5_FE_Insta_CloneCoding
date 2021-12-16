import React from 'react'
import styled from 'styled-components'
import { history } from '../redux/configureStore'
import Grid from '../elements/Grid'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const SiginUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = (data) => {
    if (data.password !== data.passwordCheck) {
      const passwordCheck = document.querySelector('#passwordCheck')
      passwordCheck.focus()
      passwordCheck.style.border = '1px solid red'
      const tempError = document.querySelector('#temp-error')
      tempError.innerHTML = '동일한 패스워드를 입력하세요.'
      passwordCheck.addEventListener('keydown', () => {
        tempError.innerHTML = ''
      })
      return
    }

    axios
      .post("http://13.125.149.78/api/userlist/register", {
        userId: data.email,
        nickname: data.nickname,
        password: data.password,
        passwordCheck: data.passwordCheck,
      })
      .then((res) => history.push("/"))
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  };

  return (
    <div
      style={{
        background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYrHPu9t5m4ShcjEtJhoMJIkYZ64fl8q2veA&usqp=CAU)',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        margin: '0px ',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Logo>Instartgram</Logo>
          <Input
            type="text"
            placeholder="이메일을 입력해주세요"
            {...register('email', {
              required: true,
              pattern: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
            })}
          ></Input>
          {errors.email?.type === 'required' && <ErrorText>이메일을 입력하세요.</ErrorText>}
          {errors.email?.type === 'pattern' && <ErrorText>이메일 형식을 지켜주세요!</ErrorText>}
          <Input
            type="text"
            placeholder="닉네임을 입력해주세요"
            {...register('nickname', {
              required: true,
              pattern: /^[A-za-z0-9_-]{4,15}$/,
            })}
          ></Input>
          {errors.interest?.type === 'required' && <ErrorText>닉네임를 입력하세요.</ErrorText>}
          {errors.nickname?.type === 'pattern' && <ErrorText>특수문자를 제외한 영어, 숫자를 입력해주세요.!</ErrorText>}
          <Input type="password" placeholder="비밀번호를 입력해주세요" {...register('password', { required: true, minLength: 4 })}></Input>
          {errors.password?.type === 'required' && <ErrorText>패스워드를 입력하세요.</ErrorText>}
          {errors.password?.type === 'minLength' && <ErrorText>패스워드를 4자 이상 입력해주세요.</ErrorText>}
          <Input id="passwordCheck" placeholder="패스워드를 확인해주세요!" name="password_repeat" type="password" {...register('passwordCheck', { required: true, minLength: 4 })}></Input>
          {errors.passwordCheck?.type === 'required' && <ErrorText>패스워드 확인을 입력하세요.</ErrorText>}
          {errors.passwordCheck?.type === 'minLength' && <ErrorText>패스워드를 4자 이상 입력해주세요.</ErrorText>}
          <ErrorText id="temp-error"></ErrorText>
          <SigninBtn type="submit">회원가입하기</SigninBtn>
        </Container>
      </form>
    </div>
  )
}

export default SiginUp
const ErrorText = styled.p`
  font-size: 12px;
  color: red;
  opacity: 0.5;
`

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
  margin: 0px 0px 0px 0px;
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

const SigninBtn = styled.button`
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
