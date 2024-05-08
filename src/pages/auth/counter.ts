export function loginValue(element: HTMLInputElement) {
  if(!element) return

  let login = ""

  const logValue = (value: string) => {
    login = value
    console.log(login);
  }

  element.addEventListener('input', () => logValue(element.value))
}


