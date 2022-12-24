const input = document.querySelector('#todoInfo');
const addBtn = document.querySelector('#add-btn');
const listContainer = document.querySelector('#todoList');

addBtn.addEventListener('click', function(){
    const listItem = document.createElement('p');
    listItem.innerHTML = `<div class="d-flex justify-content-between">${input.value}  <i class="bi bi-trash ms-5"></i></div>`;
    listContainer.append(listItem);
    input.value = '';
    const deleteBtn = document.querySelector('.delete')
    listItem.addEventListener('click', function(){
        listItem.style.textDecoration = 'line-through';
    })
    deleteBtn.addEventListener('click', function(){
        listItem.remove();
    })

})

// put checkmark for line through
