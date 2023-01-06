let addbtn = document.querySelector('.add');
let flag = false;
let del = false;
let modal = document.querySelector('.modal');
//  modal.style.display='none'
let colarr = ['lightpink', 'lightgreen', 'lightblue', 'black']
let ticketcont = document.querySelector('.ticket-cont');
let textarea = document.querySelector('.area');

let colors = document.querySelectorAll('.priocolor');

let filter = document.querySelectorAll('.filter')
let filtercol = 'all'

let delet = document.querySelector('.delete');
let color = 'black';

colors.forEach((colorelem) => {
  colorelem.addEventListener('click', () => {
    console.log('hi')
    color = colorelem.classList[1];
  })
})

delet.addEventListener('click', (e) => {
  del = !del
  console.log(del);
})




modal.addEventListener('keydown', (e) => {

  let key = e.key;
  if (key === 'Shift') {
    flag = false;
    createTicket(color, textarea.value, shortid());
    modal.style.display = 'none'
    textarea.value = ''

  }




})




function createTicket(color, value, id) {
  let div = document.createElement('div');
  div.setAttribute('class', 'ticket')
  div.innerHTML = `
   <div class="ticket_color ${color}"></div>
   <div class="id_no">${id}</div>
   <div class="content">${value}</div>
`

  ticketcont.appendChild(div);
  handleremoval(div);
  handlepriocol(div);
}


function handlepriocol(div) {
  let currcol = document.querySelector('.ticket_color')

  currcol.addEventListener('click', () => {
    let c = currcol.classList[1];
    let idx = colarr.findIndex((col) => {
      return c === col
    })
    currcol.classList.remove(colarr[idx])
    currcol.classList.add(colarr[(idx + 1) % 4])
  })
}

function handleremoval(div) {
  div.addEventListener('click', () => {
    if (del === true) div.remove();
  })
}

addbtn.addEventListener('click', (e) => {
  flag = !flag;
  if (flag) {
    modal.style.display = "flex";
  } else
    modal.style.display = "none";

})

filter.forEach((colorelem) => {
  colorelem.addEventListener('click', (e) => {
    let ticky = document.querySelectorAll('.ticket')
    filtercol = colorelem.classList[1]
    console.log('clk')

    ticky.forEach((tick) => {
      console.log('ji')
      let child = tick.firstElementChild;
      let c = child.classList.item(1);
      if (filtercol == c) {
        tick.style.display = 'block'
      }
      else {
        tick.style.display = 'none'
      }
    })


  })

  colorelem.addEventListener('dblclick', (e) => {
    let ticky = document.querySelectorAll('.ticket')
    console.log('dbl')
    filtercol = 'all'

    ticky.forEach((tick) => {
      tick.style.display = 'block'

    })



  })





})







