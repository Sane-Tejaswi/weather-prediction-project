let span1 = document.getElementById("span1");

if (span1) {
    span1.addEventListener("click", () => {
        window.location.href = "today.html";
    });
}

let span2 = document.getElementById("span2");

if (span2) {
    span2.addEventListener("click", () => {
        window.location.href = "week.html";
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

async function getWeather(location) {

    try {

        let url =
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`;

        let response = await fetch(url);

        let res = await response.json();

        console.log(res);

        let p1 = document.getElementById("p1");

        if (p1) {
            p1.innerText = res.resolvedAddress;
            // console.log(res.resolvedAddress)
        }

        let condition = document.getElementById("condition");

        if (condition) {
            condition.innerText =
                res.currentConditions.conditions;
        }

        let perc = document.getElementById("perc");

        if (perc) {
            perc.innerText =
                res.currentConditions.precip + "%";
        }

        let uv = document.getElementById("uv");
        let ws = document.getElementById("ws");
        let sr = document.getElementById("sr");
        let ss = document.getElementById("ss");
        let h = document.getElementById("h");
        let v = document.getElementById("v");
        let aq = document.getElementById("aq");

        if (uv) {
            uv.innerText =
                res.currentConditions.uvindex;
        }

        if (ws) {
            ws.innerText =
                res.currentConditions.windspeed;
        }

        if (h) {
            h.innerText =
                res.currentConditions.humidity + "%";
        }

        if (sr) {

            let sunrise =
                res.currentConditions.sunrise;

            let [hours, minutes] =
                sunrise.split(":");

            hours = parseInt(hours);

            let period =
                hours >= 12 ? "PM" : "AM";

            hours = hours % 12;

            if (hours === 0) {
                hours = 12;
            }

            sr.innerText =
                hours + ":" + minutes + " " + period;
        }

        if (ss) {

            let sunset =
                res.currentConditions.sunset;

            let [hours, minutes] =
                sunset.split(":");

            hours = parseInt(hours);

            let period =
                hours >= 12 ? "PM" : "AM";

            hours = hours % 12;

            if (hours === 0) {
                hours = 12;
            }

            ss.innerText =
                hours + ":" + minutes + " " + period;
        }

        if (v) {
            v.innerText =
                res.currentConditions.visibility;
        }

        if (aq) {
            aq.innerText =
                res.currentConditions.cloudcover;
        }

        let today = res.days[0];

        let uv1 = document.getElementById("uv1");

        if (uv1) {

            if (today.uvindex <= 2) {
                uv1.innerText = "Low";
            }
            else if (today.uvindex <= 5) {
                uv1.innerText = "Moderate";
            }
            else if (today.uvindex <= 7) {
                uv1.innerText = "High";
            }
            else {
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
            }
            else if (today.humidity >= 40) {
                h1.innerText = "Moderate";
            }
            else {
                h1.innerText = "Low";
            }
        }

        let v1 = document.getElementById("v1");

        if (v1) {

            if (today.visibility >= 10) {
                v1.innerText = "Very Clear";
            }
            else if (today.visibility >= 5) {
                v1.innerText = "Clear";
            }
            else {
                v1.innerText = "Low";
            }
        }

        let aq1 = document.getElementById("aq1");

        if (aq1) {

            let airQuality = today.aqius;

            if (airQuality <= 50) {
                aq1.innerText = "Good";
            }
            else if (airQuality <= 100) {
                aq1.innerText = "Moderate";
            }
            else if (airQuality <= 150) {
                aq1.innerText = "Unhealthy";
            }
            else {
                aq1.innerText = "Very Unhealthy";
            }
        }

        let temperatures =
            res.days[0].hours;

        let tempElements =
            document.querySelectorAll(".cd");

        let images =
            document.querySelectorAll(".wi");

        tempElements.forEach((element, index) => {

            if (temperatures[index]) {

                element.innerText =
                    temperatures[index].temp + " °C";

                let iconName =
                    temperatures[index].icon;

                if (images[index]) {

                    images[index].src =
                        icons[iconName] || defaultIcon;
                }
            }
        });

        function updateCurrentWeather() {

            let currentHour =
                new Date().getHours();

            let currentWeather =
                temperatures[currentHour];

            let currentdeg =
                document.getElementById("currentdeg");

            let currentimgicon =
                document.getElementById("currentimgicon");

            if (currentWeather) {

                if (currentdeg) {

                    currentdeg.innerText =
                        currentWeather.temp + " °C";
                }

                if (currentimgicon) {

                    let currentIcon =
                        currentWeather.icon;

                    currentimgicon.src =
                        icons[currentIcon] || defaultIcon;
                }
            }
        }

        updateCurrentWeather();

        setInterval(updateCurrentWeather, 60000);

    }
    catch (error) {

        console.log(
            "Weather error:",
            error
        );
    }
}

let btn1 =
    document.getElementById("btn1");

if (btn1) {

    btn1.addEventListener("click", () => {

        let sbtn =
            document.getElementById("sbtn");

        let location =
            sbtn.value.trim();

        if (location !== "") {

            localStorage.setItem(
                "location",
                location
            );

            getWeather(location);
        }
    });
}

let savedLocation =
    localStorage.getItem("location");

if (savedLocation) {

    getWeather(savedLocation);

}
else {

    navigator.geolocation.getCurrentPosition(

        function (position) {

            let latitude =
                position.coords.latitude;

            let longitude =
                position.coords.longitude;

            let currentLocation =
                `${latitude},${longitude}`;

            getWeather(currentLocation);
        },

        function () {

            localStorage.setItem(
                "location",
                "Bengaluru"
            );

            getWeather("Bengaluru");
        }
    );
}

let cd =
    document.getElementById("cd");

if (cd) {

    cd.addEventListener("click", () => {

        let location =
            localStorage.getItem("location") ||
            "Bengaluru";

        getWeather(location);
    });
}

let fd =
    document.getElementById("fd");

if (fd) {

    fd.addEventListener("click", async () => {

        let location =
            localStorage.getItem("location") ||
            "Bengaluru";

        let url =
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`;

        let response =
            await fetch(url);

        let res =
            await response.json();

        let temperatures =
            res.days[0].hours;

        let tempElements =
            document.querySelectorAll(".cd");

        tempElements.forEach((element, index) => {

            if (temperatures[index]) {

                let celsius =
                    temperatures[index].temp;

                let fahrenheit =
                    (celsius * 9 / 5) + 32;

                element.innerText =
                    fahrenheit.toFixed(1) + " °F";
            }
        });

        let currentHour =
            new Date().getHours();

        let currentdeg =
            document.getElementById("currentdeg");

        if (temperatures[currentHour]) {

            let celsius =
                temperatures[currentHour].temp;

            let fahrenheit =
                (celsius * 9 / 5) + 32;

            if (currentdeg) {

                currentdeg.innerText =
                    fahrenheit.toFixed(1) + " °F";
            }
        }
    });
}

let day =
    document.getElementById("day");

function updateDay() {

    let date =
        new Date();

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    if (day) {
        day.innerText =
            days[date.getDay()];
    }
}

function updateTime() {

    let ct =
        document.getElementById("ct");

    if (!ct) {
        return;
    }

    let currentTime =
        new Date();

    let hours =
        currentTime.getHours();

    let minutes =
        currentTime.getMinutes();

    hours =
        hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let period =
        currentTime.getHours() >= 12
            ? "PM"
            : "AM";

    ct.innerText =
        "," + hours + ":" + minutes + " " + period;
}

updateDay();

updateTime();

setInterval(updateTime, 1000);