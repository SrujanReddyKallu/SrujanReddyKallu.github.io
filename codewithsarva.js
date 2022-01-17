function getvalue() {
    const val = document.querySelector('input').value;
    if (val != '') {
        let request = new XMLHttpRequest()
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + val + '&appid=c7ce8d86e864cb872c65b5bc7b3e628b';
        request.open('GET', url, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                console.log("Success")
                let we = JSON.parse(request.responseText);
                console.log(we);
                document.getElementById('123').innerHTML = we.main.temp + 'F';
                // let imgsrc = 'https://openweathermap.org/img/w/' + we.weather[0].icon + '.png';
                // document.getElementById('myimg').src = imgsrc;
                
            } else {
                console.log("Couldn't connect with the server");
            }
        }
        request.onerror = function() {
            console.log("Error")
        }
        request.send();

    }
}