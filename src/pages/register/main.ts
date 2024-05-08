import '@/public/base/base.css'
import './style.css'
import templButton from '@/components/button/button'
import templInput from '@/components/input_box/input'
import Handlebars from 'handlebars'



document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')
  if(!root) return

  const fields = [
    { key: 'email', label: 'Почта', input: 'text'},
    { key: 'login', label: 'Логин', input: 'text' },
    { key: 'first_name', label: 'Имя', input: 'text' },
    { key: 'second_name', label: 'Фамилия', input: 'text' },
    { key: 'phone', label: 'Телефон', input: 'text' },
    { key: 'password', label: 'Пароль', input: 'password' },
    { key: 'check_password', label: 'Пароль (еще раз)', input: 'password' },
  ]

  const tmpButton = Handlebars.compile(templButton)
  const tmpInput = Handlebars.compile(templInput)

  const template = `
    <div class="login-screen">
      <h2 style="margin: 0; align-self: center;">Регистрация</h2>

      <div class="block">
        ${ fields.map((v) => `${tmpInput({ label: v.label, id: v.key, input: v.input})}`).join('\n') }
      </div>

      <div class="block" style="justify-content: center; padding-top: 2em">
        ${tmpButton({label: 'Зарегистрироваться', id: 'register-button', class: "button register-button" })}
        ${tmpButton({label: 'Войти', id: 'login-button', class: "button login-button" })}
      </div>
    </div>
  `

  root.innerHTML = template

  const register = document.querySelector<HTMLButtonElement>('#register-button')!
  const login = document.querySelector<HTMLButtonElement>('#login-button')!
  

  register.addEventListener('click', () => window.location.href = '/')
  login.addEventListener('click', () => window.location.href = '/')
})




