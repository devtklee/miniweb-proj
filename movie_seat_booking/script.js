const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();
let ticketPrice = +movieSelect.value;

//Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
   localStorage.setItem('selectedMovieIndex', movieIndex);
   localStorage.setItem('selectedMoviePrice', moviePrice);
}

//Update total and count set
function updateSelectedCount(){
   const selectedSeats = document.querySelectorAll('.row .seat.selected');
   
   // Copy selected seats into array
   // Map through array
   // Return a new array indexes

   const seatsindex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

   //Save Array into Local
   localStorage.setItem('selectedSeats', JSON.stringify(seatsindex));

   const selectedSeatCount = selectedSeats.length;

   count.innerText = selectedSeatCount;
   total.innerText = selectedSeatCount * ticketPrice;
}

//Get data from local storage and populate UI
function populateUI(){
   const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

   console.log(selectedSeats);

   if(selectedSeats !== null && selectedSeats.length > 0){
      seats.forEach((seat, index) => {
         if (selectedSeats.indexOf(index) > -1){
            seat.classList.add('selected');
         }
      });
   }

   const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

   if(selectedMovieIndex !== null){
      movieSelect.selectedIndex = selectedMovieIndex;
   }


}

//Movie Select Event
movieSelect.addEventListener('change', e=> {
   ticketPrice= +e.target.value;
   setMovieData(e.target.selectedIndex, e.target.value);
   updateSelectedCount();
});

//Seat click event
container.addEventListener('click', e => {
   if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
      e.target.classList.toggle('selected');
      
      updateSelectedCount();
   }
});

//Initial Count and total set
updateSelectedCount();