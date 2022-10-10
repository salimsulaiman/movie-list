let data = [
  {
    title: "End Game",
    rating: 9.8,
    date: {
      month: "Apr",
      date: 06,
      year: 2020,
    },
  },
  {
    title: "Wakanda Forever",
    rating: 9.7,
    date: {
      month: "Apr",
      date: 09,
      year: 2022,
    },
  },
  {
    title: "What If",
    rating: 9.8,
    date: {
      month: "Dec",
      date: 20,
      year: 2021,
    },
  },
  {
    title: "She Hulk",
    rating: 8,
    date: {
      month: "Apr",
      date: 30,
      year: 2022,
    },
  },
  {
    title: "No Way Home",
    rating: 9.9,
    date: {
      month: "Nov",
      date: 23,
      year: 2021,
    },
  },
];
let search = document.getElementById("search").value;
let container = document.getElementById("container");

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
  container.innerHTML += `
  <div class="col-md-3">
  <div class="card my-3">
    <img
      src="assets/img/pict-icon.png"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <div class="card-text">
        <div class="d-flex justify-content-between">
          <p>${data[i].title}</p>
          <p><b>${data[i].rating}</b></p>
        </div>
      </div>
      <p>${data[i].date.month}, ${data[i].date.date} ${data[i].date.year}</p>
    </div>
  </div>
</div>
  `;
}
