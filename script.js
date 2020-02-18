let arr = [
    'Hi',
    'My name is Jhon',
    'nice to meet you',
];

const body = document.body;
for (let i = 0; i < arr.length; i++) {
   const div = document.createElement('div');
   div.innerHTML = i + 1 + '. ' + arr[i];
   body.appendChild(div);
}