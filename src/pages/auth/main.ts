import '@/public/base/base.css'
import './style.css'

import templButton from '@/components/button/button'
import templInput from '@/components/input_box/input'
import templLink from '@/components/link/link'
import Handlebars from 'handlebars'
import { loginValue } from "./modules/inputValue" 

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')
  if(!root) return

  const tmpButton = Handlebars.compile(templButton)
  const tmpInput = Handlebars.compile(templInput)
  const tmpLink = Handlebars.compile(templLink)

  const template = `
    <main class="login-screen">
      <h2>Вход</h2>

      <form class="form-input" action="/pages/chat/index.html">
        <div class="block">
          ${tmpInput({label: 'Логин', id: 'login'})}
          ${tmpInput({label: 'Пароль', id: 'password'})}
        </div>

        <div class="block">
          ${tmpButton({label: 'Авторизоваться', id: 'login-button', class: "button login-button" })}
          ${tmpLink({label: 'Нет аккаунта?', id: 'login-button', class: "button register-button", href: '/pages/register/index.html' })}
        </div>
      </form>
    </div>
  </main>
  `

  root.innerHTML = template

  loginValue(document.querySelector<HTMLInputElement>('#login')!)
})




