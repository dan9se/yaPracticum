import "./style.css"

export default `
  <div class="input__group">
    <input type="{{ input }}" class="input__field" placeholder="{{ label }}" name="{{ id }}" id="{{ id }}" required />
    <label for="{{ id }}" class="input__label"> {{ label }} </label>
  </div>
`
