import "./style.css"

export default `
  <div class="profile-element">
    <span>{{ label }}</span>
    <input style="color: #999999" type="{{ input }}" placeholder="{{ value }}" name="{{ id }}" id="{{ id }}" required />
  </div>
`