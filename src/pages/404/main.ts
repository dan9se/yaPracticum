import "@/public/base/base.css"
import "@/public/base/error_page.css"

import templButton from '@/components/button/button'
import Handlebars from 'handlebars'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')
  if(!root) return

  const tmpButton = Handlebars.compile(templButton)

  const template = `
    <main class="error-screen">
      <div> 
        <h1 style="margin: 0; align-self: center;">404</h1>
        <span style="margin: 0; align-self: center;">Не туда попали</span>
      </div>

      <div class="block" style="justify-content: center">
        ${tmpButton({label: 'Назад к чатам', id: 'login-button', class: "login-button" })}
      </div>
    </main>
  `

  root.innerHTML = template
  
  document.getElementById('login-button')!.addEventListener('click', () => window.location.href = '/index.html')
})




