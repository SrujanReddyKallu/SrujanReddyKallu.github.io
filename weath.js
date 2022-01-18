// // function searchToggle(obj, evt){
// //   var container = $(obj).closest('.search-wrapper');
// //       if(!container.hasClass('active')){
// //           container.addClass('active');
// //           evt.preventDefault();
// //       }
// //       else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
// //           container.removeClass('active');
// //           // clear input
// //           container.find('.search-input').val('');
// //       }
// // }
// const api = {
//   key: "c7ce8d86e864cb872c65b5bc7b3e628b",
//   base: "https://api.openweathermap.org/data/2.5/"
// }

// const searchbox = document.querySelector('.search-bar');
// searchbox.addEventListener('keypress', setQuery);
// function getvalue(){

// const searchbox1 = document.querySelector('.search-bar');
//  getResults(searchbox1.value);
// }
// function setQuery(evt) {
//   if (evt.keyCode == 13 ) {
//     getResults(searchbox.value);
//   }
// }

// function getResults (query) {
//   fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//     .then(weather => {
//       return weather.json();
//     }).then(displayResults);
// }

// function displayResults (weather) {
//   let city = document.querySelector('.city');
//   city.innerText = `${weather.name}, ${weather.sys.country}`;

//   let now = new Date();
//   let date = document.querySelector('.location .date');
//   date.innerText = dateBuilder(now);

//   let temp = document.querySelector('.current .temp');
//   temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

//   let weather_el = document.querySelector('.current .weather');
//   weather_el.innerText = weather.weather[0].main;

//   let hilow = document.querySelector('.hi-low');
//   hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

//   document.body.style.backgroundImage =
//       "url('https://source.unsplash.com/1600x900/?" + weather.weather[0].main + "')";
// }

// function dateBuilder (d) {
//   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   let day = days[d.getDay()];
//   let date = d.getDate();
//   let month = months[d.getMonth()];
//   let year = d.getFullYear();

//   return `${day} ${date} ${month} ${year}`;
// }
   


const searchbox = document.querySelector('.search-ba');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13 ) {
    getvalue();
  }
}

function getvalue() {
    const val = document.querySelector('input').value;
    document.getElementById('se').value=" ";
    
        let request = new XMLHttpRequest()
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + val + '&units=metric&appid=c7ce8d86e864cb872c65b5bc7b3e628b';
        request.open('GET', url, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                console.log("Success")
                let we = JSON.parse(request.responseText);
                console.log(we);
                let wea=document.querySelector('.current .temp')
                // wea.innerHTML=` ${we.main.temp}`
                wea.innerHTML = `${Math.round(we.main.temp)}<span>°c</span>`;
                let imgsrc = 'https://openweathermap.org/img/w/' + we.weather[0].icon + '.png';
                document.getElementById('myimg').src = imgsrc;
                document.getElementById("332").innerHTML=`${Math.round(we.main.temp_min)}°c / ${Math.round(we.main.temp_max)}°c`;
                document.getElementById("1").innerHTML=`${we.name}, ${we.sys.country}`;
                document.getElementById("2").innerHTML=we.weather[0].main
                let now = new Date();
                let date = document.querySelector('.location .date');
                date.innerText = dateBuilder(now);   

                
            } else {
                console.log("Couldn't connect with the server");
            }
        }
        request.onerror = function() {
            console.log("Error")
        }
        request.send();

    }
     function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
