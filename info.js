const btnSubmit = document.querySelector('.btn-submit');
const list1 = document.querySelector('.list1');
const list2 = document.querySelector('.list2');

btnSubmit.addEventListener('click', function(){
  const input = document.querySelector('.input-text');

  if (!input.value) {
    console.log('내용을 입력해주세요');
    input.focus();
  } else {
    const li = document.createElement('li');
    const text = document.createElement('span');
    const btnMove = document.createElement('button');
    const btnRemove = document.createElement('button');
    btnMove.innerText = '이동';
    btnRemove.innerText = '삭제';
    text.innerText = input.value;
    input.value = '';
    input.focus();
    li.append(text, btnMove, btnRemove);
    list1.append(li);

    btnMove.addEventListener('click', function(e){
      const result = text.innerText;
      const li = document.createElement('li');
      e.target.parentElement.remove();
      li.innerText = result;
      list2.append(li);
    });

    btnRemove.addEventListener('click', function(e){
      e.target.parentElement.remove();
    });  
  }
});



