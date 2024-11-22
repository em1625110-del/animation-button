let rippleButton = document.querySelector('.btn')

rippleButton.addEventListener('click', function() {
   let a = event.clientX - event.target.offsetLeft;
   let b = event.clientY - event.target.offsetTop;
   let c = document.createElement('span')
   c.classList.add('clicked');
   c.style.left = a + 'px';
   c.style.top = b + 'px';
   rippleButton.appendChild(c)
   setTimeout(() => c.remove()  ,1000)
});