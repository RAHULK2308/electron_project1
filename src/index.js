//requiring
const ipc = require('electron').ipcRenderer
const path = require('path');

const ul=document.querySelector('ul')

document.addEventListener('drop', (event) => {
    event.preventDefault();
    event.stopPropagation();
 
    for (const f of event.dataTransfer.files) {
        // Using the path attribute to get absolute file path
        console.log('File Path of dragged files: ', f.path)

        const li=document.createElement('li');
        const img=document.createElement('img');
        li.style.listStyleType='none'
       
        img.setAttribute('src',f.path)
        img.style.width='250px'
        li.appendChild(img)
        ul.appendChild(li);
      }
      
});
 
document.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
 
document.addEventListener('dragenter', (event) => {
    console.log('File is in the Drop Space');
});
 
document.addEventListener('dragleave', (event) => {
    console.log('File has left the Drop Space');
});