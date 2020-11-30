const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

//Update total and count set
function updateSelectedCount(){
   const selectedSeats = document.querySelectorAll('.row .seat.selected');
   
   const selectedSeatCount = selectedSeats.length;

   count.innerText = selectedSeatCount;
   total.innerText = selectedSeatCount * ticketPrice;
}

//Movie Select Event
movieSelect.addEventListener('change', e=> {
   ticketPrice= +e.target.value;
   updateSelectedCount();
});

//Seat click event
container.addEventListener('click', e => {
   if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
      e.target.classList.toggle('selected');
      
      updateSelectedCount();
   }

});