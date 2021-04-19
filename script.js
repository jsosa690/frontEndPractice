function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
    if (event.target.parentElement.className === 'dropzone-1') {
      updateTotal(event.target.id, 'total-1');
    } else if (event.target.parentElement.className === 'dropzone-2') {
      updateTotal(event.target.id, 'total-2');
    }
  }

function updateTotal(value, dropzone) {
  let startValue = Number(document.getElementById(dropzone).innerHTML);
  document.getElementById(dropzone).innerHTML = startValue - Number(value);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    if(!dropzone.draggable) {
        dropzone.appendChild(draggableElement);
        updateSum(draggableElement.id, dropzone)
    } else {
        dropzone.parentElement.appendChild(draggableElement);
        updateSum(draggableElement.id, dropzone.parentElement)
    }
    event.dataTransfer.clearData();
}

function updateSum(value, dropzone) {
  if (dropzone.className === 'dropzone-1') {
    let startValue = Number(document.getElementById("total-1").innerHTML);
    document.getElementById("total-1").innerHTML = startValue + Number(value);
  } else if (dropzone.className === 'dropzone-2') {
    let startValue = Number(document.getElementById("total-2").innerHTML);
    document.getElementById("total-2").innerHTML = startValue + Number(value);
  }
  
}

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);