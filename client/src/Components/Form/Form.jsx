import './Form.css'
import {useEffect, useState} from "react";
import {useTelegram} from "../../hooks/useTelegram";
import {Button} from "../Button/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {tg} = useTelegram()
  const navigate = useNavigate();

  const sendForm = async () => {
    try {
      setError('')
      const {data} = await axios.post('http://45.12.228.11:5000/api/auth', {email, password})
      window.localStorage.setItem('token', data.token)
      navigate("/");
    } catch (e) {
      console.log(e)
      setError(e.response.data.message)
    }
  }

  return <div className={'form'}>
    <h3>Авторизация</h3>
    <input onChange={(e) => setEmail(e.target.value)}
           className={'input'}
           type={'text'}
           placeholder={'email'}
           value={email}
    />
    <input onChange={(e) => setPassword(e.target.value)}
           className={'input'}
           type={'password'}
           placeholder={'password'}
           value={password}
    />
    <Button style={{marginTop: '10px', width: '100%'}} onClick={sendForm}>Отправить</Button>
    {error && <h4>{error}</h4>}
  </div>
}