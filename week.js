// let span1 = document.getElementById("span1");
// if (span1) {
//     span1.addEventListener("click", () => {
//         window.location.href = "today.html";
//     });
// }

// let icons = {
//     "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
//     "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
//     "rain": "https://i.ibb.co/kBd2NTS/39.png",
//     "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
//     "clear-night": "https://i.ibb.co/1nxNGHL/10.png"
// };

// let defaultIcon =
//     "https://i.ibb.co/rb4rrJL/26.png";

// async function getWeekWeather(location) {
//     try {
//         let url =
//             `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`;

//         let response = await fetch(url);

//         let res = await response.json();

//         console.log(res);

//         let p1 = document.getElementById("p1");

//         if (p1) {
//             p1.innerHTML = res.address;
//         }

//         let condition = document.getElementById("condition");
//         let perc = document.getElementById("perc");
//         if (condition) {
//              condition.innerHTML = res.currentConditions.conditions;
//         }
//         if (perc) {
//             perc.innerHTML = res.currentConditions.precip + "%";
//         }
//         let uv = document.getElementById("uv");
//         let ws = document.getElementById("ws");
//         let sr = document.getElementById("sr");
//         let ss = document.getElementById("ss");
//         let h = document.getElementById("h");
//         let v = document.getElementById("v");
//         let aq = document.getElementById("aq");

//         if (uv) {
//             uv.innerHTML =  res.currentConditions.uvindex;
//         }

//         if (ws) {
//             ws.innerHTML = res.currentConditions.windspeed;  
//         }

//         if (h) {
//             h.innerHTML = res.currentConditions.humidity + "%";
//         }

//         if (v) {
//             v.innerHTML =  res.currentConditions.visibility;
//         }

//         if (aq) {
//             aq.innerHTML =  res.currentConditions.cloudcover;
//         }

//         if (sr) {
//             sr.innerHTML =  res.currentConditions.sunrise;      
//         }

//         if (ss) {
//             ss.innerHTML =  res.currentConditions.sunset; 
//         }

//         let today = res.days[0];

//         let uv1 = document.getElementById("uv1");

//         if (uv1) {

//             if (today.uvindex <= 2) {
//                 uv1.innerText = "Low";
//             }
//             else if (today.uvindex <= 5) {
//                 uv1.innerText = "Moderate";
//             }
//             else if (today.uvindex <= 7) {
//                 uv1.innerText = "High";
//             }
//             else {
//                 uv1.innerText = "Very High";
//             }
//         }

//         let ws1 = document.getElementById("ws1");

//         if (ws1) {
//             ws1.innerText = "km/hr";
//         }
//         let h1 = document.getElementById("h1");
//         if (h1) {

//             if (today.humidity >= 70) {
//                 h1.innerText = "High";
//             }
//             else if (today.humidity >= 40) {
//                 h1.innerText = "Moderate";
//             }
//             else {
//                 h1.innerText = "Low";
//             }
//         }

//         let v1 = document.getElementById("v1");

//         if (v1) {

//             if (today.visibility >= 10) {
//                 v1.innerText = "Very Clear";
//             }
//             else if (today.visibility >= 5) {
//                 v1.innerText = "Clear";
//             }
//             else {
//                 v1.innerText = "Low";
//             }
//         }

//         let aq1 = document.getElementById("aq1");

//         if (aq1) {

//             let airQuality = today.aqius;

//             if (airQuality <= 50) {
//                 aq1.innerText = "Good";
//             }
//             else if (airQuality <= 100) {
//                 aq1.innerText = "Moderate";
//             }
//             else if (airQuality <= 150) {
//                 aq1.innerText = "Bad";
//             }
//             else {
//                 aq1.innerText = "Very Bad";
//             }
//         }

//         let days = res.days;

//         let dayElements =
//             document.querySelectorAll(".day");

//         let tempElements =
//             document.querySelectorAll(".temp");

//         let images =
//             document.querySelectorAll(".wi");


//         for (let i = 0; i < 7; i++) {

//             if (!days[i]) {
//                 continue;
//             }
//             let date =
//                 new Date(days[i].datetime);

//             let dayName =
//                 date.toLocaleDateString("en-US", {
//                     weekday: "long"
//                 });

//             if (dayElements[i]) {

//                 dayElements[i].innerText = dayName;
                    
//             }

//             if (tempElements[i]) {

//                 tempElements[i].innerText =  days[i].temp.toFixed(1) + " °C";
//             }

//         }

//        let unit = "C";

// function updateCurrentWeather() {

//     let currentHour = new Date().getHours();
//     let currentWeather = days[currentHour];

//     if (currentWeather) {

//         let temp = currentWeather.temp;

//         // Temperature
//         if (unit === "C") {
//             document.getElementById("currentdeg").innerText =
//                 temp.toFixed(1) + " °C";
//         } 
//         else {
//             let fahrenheit = (temp * 9 / 5) + 32;

//             document.getElementById("currentdeg").innerText =
//                 fahrenheit.toFixed(1) + " °F";
//         }

//         // Current weather icon
//         let currentImg = document.getElementById("currentimgicon");

//         let iconName = currentWeather.icon;

//         currentImg.src = icons[iconName] || defaultIcon;
//     }
// }


// // Celsius button
// document.getElementById("cd").addEventListener("click", () => {
//     unit = "C";
//     updateCurrentWeather();
// });


// // Fahrenheit button
// document.getElementById("fd").addEventListener("click", () => {
//     unit = "F";
//     updateCurrentWeather();
// });


// // First display
// updateCurrentWeather();


// // Check current hour every minute
// setInterval(updateCurrentWeather, 60000);
// //         let currentImg = document.getElementById("currentimgicon");

// // let currentHour = new Date().getHours();

// // let currentWeather = days[currentHour];

// // if (currentWeather) {
// //     let iconName = currentWeather.icon;
// //     currentImg.src = icons[iconName] || defaultIcon;
// // }

//         let cd = document.getElementById("cd");

//         if (cd) {

//             cd.onclick = function () {

//                 for (let i = 0; i < 7; i++) {

//                     if (tempElements[i] && days[i]) {
//            tempElements[i].innerText = days[i].temp.toFixed(1) + " °C";
                           
//                     }
//                 }
//             };
//         }

//         let fd = document.getElementById("fd");

//         if (fd) {

//             fd.onclick = function () {
//                 for (let i = 0; i < 7; i++) {
//                     if (tempElements[i] && days[i]) {
//                         let celsius = days[i].temp; 
//                         let fahrenheit =  (celsius * 9 / 5) + 32;
//                         tempElements[i].innerText = fahrenheit.toFixed(1) + " °F";
//                     }
//                 }
//             };
//         }
//     }

//     catch (error) {
//         console.log("Weather error:", error);
//     }
// }
// let btn1 = document.getElementById("btn1");
// if (btn1) {
//     btn1.addEventListener("click", () => {

//         let sbtn = document.getElementById("sbtn").value.trim();
//   if (sbtn !== "") {
//             localStorage.setItem("location", sbtn );
//             getWeekWeather(sbtn);
//         }

//     });
// }
// let savedLocation = localStorage.getItem("location");
    
// if (savedLocation) {
//     getWeekWeather(savedLocation);
// }
// else {
//     getWeekWeather("Bengaluru");
// }

// let day =  document.getElementById("day");
// let date = new Date();
    

// let dayNames = [ "Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// if (day) {
//  day.innerHTML =  dayNames[date.getDay()];      
// }

// setInterval(() => {
//     let ct = document.getElementById("ct");
//     if (!ct) {
//         return;
//     }
//     let currentTime =
//         new Date();
//     let hours =
//         currentTime.getHours();
//     let minutes =
//         currentTime.getMinutes();
//     hours = hours % 12;
//     if (hours === 0) {
//         hours = 12;
//     }
//     if (minutes < 10) {
//         minutes = "0" + minutes;
//     }
//     ct.innerHTML = "," + hours + ":" + minutes;
// }, 1000);

let span1 = document.getElementById("span1");

if (span1) {
    span1.addEventListener("click", () => {
        window.location.href = "today.html";
    });
}

let icons = {
    "partly-cloudy-day": "https://i.ibb.co/PZQXH8V/27.png",
    "partly-cloudy-night": "https://i.ibb.co/Kzkk59k/15.png",
    "rain": "https://i.ibb.co/kBd2NTS/39.png",
    "clear-day": "https://i.ibb.co/rb4rrJL/26.png",
    "clear-night": "https://i.ibb.co/1nxNGHL/10.png"
};

let defaultIcon = "https://i.ibb.co/rb4rrJL/26.png";

let unit = "C";

function formatTime(time) {
    let [hours, minutes] = time.split(":");

    hours = parseInt(hours);

    let period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    return hours + ":" + minutes + " " + period;
}

async function getWeekWeather(location) {
    try {
        let url =
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`;

        let response = await fetch(url);
        let res = await response.json();

        let p1 = document.getElementById("p1");
        let condition = document.getElementById("condition");
        let perc = document.getElementById("perc");

        if (p1) {
            p1.innerText = res.resolvedAddress;
            // console.log(res.resolvedAddress)
        }

        if (condition) {
            condition.innerText = res.currentConditions.conditions;
        }

        if (perc) {
            perc.innerText = res.currentConditions.precip + "%";
        }

        let today = res.days[0];

        let uv = document.getElementById("uv");
        let ws = document.getElementById("ws");
        let sr = document.getElementById("sr");
        let ss = document.getElementById("ss");
        let h = document.getElementById("h");
        let v = document.getElementById("v");
        let aq = document.getElementById("aq");

        if (uv) {
            uv.innerText = res.currentConditions.uvindex;
        }

        if (ws) {
            ws.innerText = res.currentConditions.windspeed;
        }

        if (sr) {
            sr.innerText = formatTime(res.currentConditions.sunrise);
        }

        if (ss) {
            ss.innerText = formatTime(res.currentConditions.sunset);
        }

        if (h) {
            h.innerText = res.currentConditions.humidity + "%";
        }

        if (v) {
            v.innerText = res.currentConditions.visibility;
        }

        if (aq) {
            aq.innerText = res.currentConditions.cloudcover;
        }

        let uv1 = document.getElementById("uv1");

        if (uv1) {
            if (today.uvindex <= 2) {
                uv1.innerText = "Low";
            } else if (today.uvindex <= 5) {
                uv1.innerText = "Moderate";
            } else if (today.uvindex <= 7) {
                uv1.innerText = "High";
            } else {
                uv1.innerText = "Very High";
            }
        }

        let ws1 = document.getElementById("ws1");

        if (ws1) {
            ws1.innerText = "km/hr";
        }

        let h1 = document.getElementById("h1");

        if (h1) {
            if (today.humidity >= 70) {
                h1.innerText = "High";
            } else if (today.humidity >= 40) {
                h1.innerText = "Moderate";
            } else {
                h1.innerText = "Low";
            }
        }

        let v1 = document.getElementById("v1");

        if (v1) {
            if (today.visibility >= 10) {
                v1.innerText = "Very Clear";
            } else if (today.visibility >= 5) {
                v1.innerText = "Clear";
            } else {
                v1.innerText = "Low";
            }
        }

        let aq1 = document.getElementById("aq1");

        if (aq1) {
            let airQuality = today.aqius;

            if (airQuality <= 50) {
                aq1.innerText = "Good";
            } else if (airQuality <= 100) {
                aq1.innerText = "Moderate";
            } else if (airQuality <= 150) {
                aq1.innerText = "Bad";
            } else {
                aq1.innerText = "Very Bad";
            }
        }

        let days = res.days;
        let hours = res.days[0].hours;

        let dayElements = document.querySelectorAll(".day");
        let tempElements = document.querySelectorAll(".temp");
        let images = document.querySelectorAll(".wi");

        for (let i = 0; i < 7; i++) {
            if (!days[i]) {
                continue;
            }

            let date = new Date(days[i].datetime);

            let dayName = date.toLocaleDateString("en-US", {
                weekday: "long"
            });

            if (dayElements[i]) {
                dayElements[i].innerText = dayName;
            }

            if (tempElements[i]) {
                tempElements[i].innerText =
                    days[i].temp.toFixed(1) + " °C";
            }

            if (images[i]) {
                let iconName = days[i].icon;
                images[i].src = icons[iconName] || defaultIcon;
            }
        }

        function updateCurrentWeather() {
            let currentHour = new Date().getHours();
            let currentWeather = hours[currentHour];

            if (!currentWeather) {
                return;
            }

            let temp = currentWeather.temp;
            let currentDegree = document.getElementById("currentdeg");

            if (unit === "C") {
                currentDegree.innerText =
                    temp.toFixed(1) + " °C";
            } else {
                let fahrenheit = (temp * 9 / 5) + 32;

                currentDegree.innerText =
                    fahrenheit.toFixed(1) + " °F";
            }

            let currentImg =
                document.getElementById("currentimgicon");

            if (currentImg) {
                let iconName = currentWeather.icon;
                currentImg.src =
                    icons[iconName] || defaultIcon;
            }
        }

        let cd = document.getElementById("cd");

        if (cd) {
            cd.addEventListener("click", () => {
                unit = "C";

                updateCurrentWeather();

                for (let i = 0; i < 7; i++) {
                    if (tempElements[i] && days[i]) {
                        tempElements[i].innerText =
                            days[i].temp.toFixed(1) + " °C";
                    }
                }
            });
        }

        let fd = document.getElementById("fd");

        if (fd) {
            fd.addEventListener("click", () => {
                unit = "F";

                updateCurrentWeather();

                for (let i = 0; i < 7; i++) {
                    if (tempElements[i] && days[i]) {
                        let fahrenheit =
                            (days[i].temp * 9 / 5) + 32;

                        tempElements[i].innerText =
                            fahrenheit.toFixed(1) + " °F";
                    }
                }
            });
        }

        updateCurrentWeather();

        setInterval(updateCurrentWeather, 60000);

    } catch (error) {
        console.log("Weather error:", error);
    }
}

let btn1 = document.getElementById("btn1");

if (btn1) {
    btn1.addEventListener("click", () => {
        let sbtn = document.getElementById("sbtn");
        let location = sbtn.value.trim();

        if (location !== "") {
            localStorage.setItem("location", location);
            getWeekWeather(location);
        }
    });
}

let savedLocation = localStorage.getItem("location");

if (savedLocation) {
    getWeekWeather(savedLocation);
} else {
    getWeekWeather("Bengaluru");
}

let day = document.getElementById("day");

function updateDay() {
    let date = new Date();

    let dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    if (day) {
        day.innerText = dayNames[date.getDay()];
    }
}

function updateTime() {
    let ct = document.getElementById("ct");

    if (!ct) {
        return;
    }

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let period =
        currentTime.getHours() >= 12 ? "PM" : "AM";

    ct.innerText =
        "," + hours + ":" + minutes + " " + period;
}

updateDay();
updateTime();

setInterval(updateTime, 1000);