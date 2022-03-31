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

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    if(!dropzone.draggable) {

        if((draggableElement.className == "draggable-title" && dropzone.className == "dropzone-1") 
        || (draggableElement.className == "draggable-chart" && dropzone.className == "dropzone-2"))
        {
          dropzone.appendChild(draggableElement);
          //show whether correct or not
        }
        
    } else {
      if((draggableElement.className == "draggable-title" && dropzone.parentElement.className == "dropzone-1") 
        || (draggableElement.className == "draggable-chart" && dropzone.parentElement.className == "dropzone-2"))
        {
          dropzone.parentElement.appendChild(draggableElement);
        }
    }
    event.dataTransfer.clearData();
}