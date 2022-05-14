const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const alertTrigger = document.getElementById('liveAlertBtn')
const reset = document.getElementById('reset')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Você já está logado no sistema!', 'success')
  })
}

reset.onclick = (event) => {
    liveAlertPlaceholder.innerHTML = ``;
  };

