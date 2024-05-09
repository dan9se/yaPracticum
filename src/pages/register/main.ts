import '@/public/base/base.css'
import './style.css'
import templButton from '@/components/button/button'
import templInput from '@/components/input_box/input'
import templLink from '@/components/link/link'
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
  const tmpLink = Handlebars.compile(templLink)

  const template = `
    <div class="login-screen">
      <h2 style="margin: 0; align-self: center;">Регистрация</h2>

      
      <form class="form-input" action="/pages/chat/index.html">
        <div class="block">
          ${fields.map((v) => `${tmpInput({ label: v.label, id: v.key, input: v.input})}`).join('\n')}
        </div>

        <div class="block" style="padding-top: 3em;">
          ${tmpButton({label: 'Зарегистрироваться', id: 'register-button', class: "button register-button" })}
          ${tmpLink({label: 'Войти', id: 'login-button', class: "button login-button", href: '/' })}
        </div>
      </form>

    </div>
  `

  root.innerHTML = template
})

