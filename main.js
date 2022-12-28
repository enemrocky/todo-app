const input = document.querySelector('#todoInfo');
const addBtn = document.querySelector('#add-btn');
const listContainer = document.querySelector('#todolist');
const key = document.querySelector('.key');


listContainer.style.width = '100%';
listContainer.style.padding = '0 auto';

const keyItem = document.createElement('p');
const keyItem2 = document.createElement('p');
keyItem.innerText = 'click ToDo to line through'
keyItem2.innerText = 'double click ToDo to delete from list'
key.append(keyItem,keyItem2)


addBtn.addEventListener('click', function(){
    const listItem = document.createElement('p');
    // listContainer.innerHTML = `<div class="d-flex justify-content-between"></div>`
    listItem.innerHTML = `${input.value}`;
    if(input.value === ''){
        listItem.innerHTML.remove();
    }
    listContainer.append(listItem);
    input.value = '';
    
    listItem.addEventListener('click', function(){
        listItem.style.textDecoration = 'line-through';
    })
    listItem.addEventListener('dblclick', function(){
        listItem.remove();
    })

})

// put checkmark for line through
