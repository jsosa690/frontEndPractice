function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
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
    } else {
        dropzone.parentElement.appendChild(draggableElement);
    }
    event.dataTransfer.clearData();
}


window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );