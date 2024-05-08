import '@/public/base/base.css'
import './style.css'

import templButton from '@/components/button/button'
import templInput from '@/components/input_box/input'
import Handlebars from 'handlebars'
import { loginValue } from "./modules/inputValue" 

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')
  if(!root) return

  const tmpButton = Handlebars.compile(templButton)
  const tmpInput = Handlebars.compile(templInput)

  const template = `
    <div class="login-screen">
      <h2>Вход</h2>

      <div class="block">
        ${tmpInput({label: 'Логин', id: 'login'})}
        ${tmpInput({label: 'Пароль', id: 'password'})}
      </div>

      <div class="block">
        ${tmpButton({label: 'Авторизоваться', id: 'login-button', class: "button login-button" })}
        ${tmpButton({label: 'Нет аккаунта?', id: 'register-button', class: "button register-button" })}
      </div>
    </div>
  `

  root.innerHTML = template

  loginValue(document.querySelector<HTMLInputElement>('#login')!)

  const register = document.querySelector<HTMLButtonElement>('#register-button')!
  const login = document.querySelector<HTMLButtonElement>('#login-button')!

  register.addEventListener('click', () => window.location.href = '/pages/register/index.html')
  login.addEventListener('click', () => window.location.href = '/pages/chat/index.html')
})




