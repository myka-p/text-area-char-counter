// 1. Create `textarea` variable
const textarea = document.querySelector('textarea');

// 2. Create `counter` variable
const counter = document.querySelector('.counter');

// 3. Create character `limit` variable
const limit = textarea.getAttribute('maxLength');

// 4. Create event listener to update `counter`
const counterUpdate = function() {
  const currentNumCount = textarea.value.length;
  counter.textContent = `${currentNumCount} / ${limit}`;
}

textarea.addEventListener('input', counterUpdate);