setTimeout(() => {
  const box = document.getElementById('box');

  // 👇️ removes element from DOM
  box.style.display = 'none';

  // 👇️ hides element (still takes up space on page)
  // box.style.visibility = 'hidden';
}, 3000);

setTimeout(() => {
  const box = document.getElementById('vbox');

  // 👇️ removes element from DOM
  box.style.display = 'block';

  // 👇️ hides element (still takes up space on page)
  // box.style.visibility = 'hidden';
}, 3000);


setTimeout(() => {
  const color =

    // 👇️ removes element from DOM
    document.getElementById('bgcolor').style.backgroundColor = 'black';

  // 👇️ hides element (still takes up space on page)
  // box.style.visibility = 'hidden';
}, 3000);

