import "@/public/base/base.css"
import './style.css'
import templAvatar from '@/components/avatar/avatar'
import templProfile from '@/components/profile_element/profile'
import templButton from '@/components/button/button'
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
  ]

  const templateAvatar = Handlebars.compile(templAvatar)
  const templateProfile = Handlebars.compile(templProfile)
  const tmpButton = Handlebars.compile(templButton)

  const template = `
    <div id="change-avatar" class="modal">
      <div class="modal-content">
        <div class="modal-avatar">
          <h3 id="info-load" style="margin: 0;">Загрузите файл</h3>

          <div class="one-file">
            <label style="cursor: pointer" for="file-1">Выбрать файл на компьютере</label>
            <input style="display: none" name="file-1" id="ile-input" type="file">
          </div>
          
          <div>
            ${tmpButton({ class: 'change-avatar', id: 'change-avatar', label: 'Поменять'})}
          </div>

        </div>
      </div>
    </div>
    

    <div class="profile-block">
      <div class="block return">
        ${tmpButton({ class: 'return-button', id: 'return', label: 'Back', icon: 'public/left-arrow.svg'})}
      </div>

      <div class="profile"> 
        ${templateAvatar({})}
        
        <h3>Name</h3>

        <div class="info block">
          <div id="profile-info">
            ${ fields.map((a) => templateProfile({ label: a.label, value: 'value', id: a.key, input: a.input })).join('\n') }
          </div>

          <div class="hidden" id="profile-password">
            ${templateProfile({ label: 'Старый пароль', value: '', id: 'oldPassword', input: 'password' })}
            ${templateProfile({ label: 'Новый пароль', value: '', id: 'newPassword', input: 'password' })}
            ${templateProfile({ label: 'Повторите новый пароль', value: '', id: 're-newPassword', input: 'password' })}
          </div>

          <div class="buttons block" id="change-block">
            ${tmpButton({ class: 'change-button', id: 'change', label: 'Изменить данные'})}
            ${tmpButton({ class: 'change-button', id: 'change-password', label: 'Изменить пароль'})}
            ${tmpButton({ class: 'exit-button', id: 'exit', label: 'Выйти'})}
          </div>

          <div class="buttons hidden" id="save-info">
            ${tmpButton({ class: 'save-button', id: 'save-info', label: 'Сохранить'})}
          </div>
          
          <div class="buttons hidden" id="save-password-button">
            ${tmpButton({ class: 'save-button', id: 'save-password', label: 'Сохранить'})}
          </div>
        </div>
      </div>

    </div>
  `

  root.innerHTML = template

  
  //#region infoBlock
  document.getElementById('change')!.addEventListener('click', () =>{ 
    document.getElementById("change-block")!.classList.add("hidden") 
    document.getElementById("save-info")!.classList.remove('hidden')
  })
  
  document.getElementById('save-info')!.addEventListener('click', () => {
    document.getElementById("change-block")!.classList.remove('hidden')
    document.getElementById("save-info")!.classList.add("hidden") 
  })
  //#endregion infoBlock

  //#region passwordBlock
  document.getElementById('change-password')!.addEventListener('click', () =>{ 
    document.getElementById("profile-info")!.classList.add("hidden") 
    document.getElementById("change-block")!.classList.add("hidden") 

    document.getElementById("profile-password")!.classList.remove('hidden')
    document.getElementById("save-password-button")!.classList.remove('hidden')
  })

  document.getElementById('save-password')!.addEventListener('click', () =>{ 
    document.getElementById("profile-password")!.classList.add("hidden") 
    document.getElementById("save-password-button")!.classList.add("hidden") 

    document.getElementById("change-block")!.classList.remove('hidden')
    document.getElementById("profile-info")!.classList.remove('hidden')
  })
  //#endregion passwordBlock


  //#region Modal
  const openModalBtn = document.getElementById("avatar")!;
  const modal = document.getElementById("change-avatar")!;

  openModalBtn.addEventListener("click", function() {
      modal.style.display = "block";
  });

  window.addEventListener("click", function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
  //#endregion Modal

  document.getElementById('exit')!.addEventListener('click', () => window.location.href = '/')
  document.getElementById('return')!.addEventListener('click', () => window.location.href = '/pages/chat/index.html')
})




