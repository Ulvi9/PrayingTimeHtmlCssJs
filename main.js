let date = document.getElementById("date");
let btn = document.getElementById("btn");
let div = document.getElementById("div");
btn.addEventListener("click", function () {
  event.preventDefault();
  let arr = date.value.split("-");
  let url = `http://api.aladhan.com/v1/calendar?latitude=49&longitude=40&method=2&month=${arr[1]}&year=${arr[0]}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data.data;
    })
    .then(function (data) {
      let dateValue = date.value.split("-").reverse().join("-");
      let object = data.filter((d) => d.date.gregorian.date === dateValue)[0];
      div.innerHTML = `
    <p><h1>${object.date.readable}</h1></p>
     <p><h3>Fajr:</h3><span>${data[0].timings.Fajr}</span</p>
     <p><h3>Sunrise:</h3>${data[0].timings.Sunrise}</span</p>
     <p><h3>Dhuhr:</h3>${data[0].timings.Dhuhr}</span</p>
     <p><h3>Asr:</h3>${data[0].timings.Asr}</span</p>
     <p><h3>Sunset:</h3>${data[0].timings.Sunset}</span</p>
     <p><h3>Maghrib:</h3>${data[0].timings.Maghrib}</span</p>
     <p><h3>Isha:</h3>${data[0].timings.Isha}</span</p>
     <p><h3>Midnight:</h3>${data[0].timings.Midnight}</span</p>    
    `;
      date.value = "";
    });
});
