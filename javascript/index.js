function updateTime() {
  let kyivElement = document.querySelector("#kyiv");
  if (kyivElement) {
    let kyivDateElement = kyivElement.querySelector(".date");
    let kyivTimeElement = kyivElement.querySelector(".time");
    let kyivTime = moment().tz("Europe/Kiev");
    kyivDateElement.innerHTML = kyivTime.format("MMMM Do YYYY");
    kyivTimeElement.innerHTML = kyivTime.format("h:mm:ss [<small>]A[<small>]");
  }
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/Berlin");
    berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinTime.format(
      "h:mm:ss [<small>]A[<small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
  <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>

          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
