let container = createElement("div", "container");
let colTitle =  createElement("div", "mb-3 title");
let title = createElement("h1", "head text-center");
title.innerHTML = "Weather of Restcountries using Fetch API";

colTitle.append(title);
container.append(colTitle);
document.body.append( container);

var api = fetch("https://restcountries.eu/rest/v2/all");
let row = document.querySelector("#row");

api
.then((res)=>{
    return res.json();
})
.then((data)=>{
    for(var i = 0; i<data.length; i++){
        
        let col = createElement('div', "col-lg-3 col-sm-12");
        col.setAttribute('style', 
        'background-color:white; width:200px; height:400px; margin-bottom:10px'
        );
        
        
        let card = createElement('div', 'card')
        card.setAttribute('style', 'margin-top:20px');
        
        
        let title = createElement('h4', 'card-title');
        title.setAttribute(
            "style",
            "text-align:center;background-color:black;color:white; padding: 5px 5px;margin:0px"
          );
        title.innerText = data[i].name.length > 15 ? data[i].name.slice(0,15)+"..." : data[i].name;
        
        
        let img = createElement('img', '.card-img-top');
        img.src = data[i].flag;
        img.alt = data[i].name;
        img.setAttribute('style', 'height:200; width:100%; object-fit: contain; margin:0px');
        
        
        let card_body = createElement('div', '.card-body');
        card_body.setAttribute(
            "style",
            "color:white;  background-image:linear-gradient(to left, gray, lightgray);  text-align:center"
      );
      card_body.innerHTML = `<h6 class="card-text">
      Capital: ${data[i].capital ? data[i].capital : "NA"} 
      </h6>
      
      <h6 class="card-text">
      Region: ${data[i].region ? data[i].region : "NA"}
      </h6>
      
      <h6 class="card-text">Country Code: ${data[i].alpha3Code}</h6>
      
      <button class="btn btn-warning" onclick="weatherData(data[i], button)" style="border:1px solid black">Click for Weather</button>`;

      let card_header = createElement("div", "card-header");
      card_header.setAttribute("style", "padding:0px");
      card_header.append(title, img);
      card.append(card_header, card_body);
      col.append(card);
      row.append(col);

        
        // let capital = createElement('p', 'card-text');
        // capital.innerHTML = `Capital: ${data[i].capital}`;
        
        // let region = createElement('p', 'card-text');
        // region.innerHTML = `Region: ${data[i].region}`;
        
        // let country_code = createElement('p', 'card-text');
        // country_code.innerHTML = `Country code: ${data[i].alpha3code}`;
        
        // let button = createElement('button', 'btn btn-danger');
        // button.dataset.id = `{data[i].capital}`;
        // button.innerHTML = "Click for WEATHER";
        // button.addEventListner('click', () => { weatherData(data[i], btn)})
        
        // let card_header = createTag("div", "card-header");
        // card_header.setAttribute("style", "padding:0px");
        
        
        // card_header.append(title, img);
        // card.append(card_header, card_body);
        // card_body.append(capital, region, country_code, button);
        // col.append(card);
        // row.append(col);
        
    
}
// document.body.append(row);
}
)
.catch((err)=>{
    console.log(err);
});


function createElement(ele, elemclass){
let element = document.createElement(ele);
element.setAttribute("class", elemclass);
return element;
}

function weatherData(city, btn){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.capital}&units=metric&appid=c31c65ace258476b516f78f48393a69b`
    
    fetch(url)
    url
    .then((res)=>{
        return res.json();
    })
    .then((data) => {
        btn.innerHTML = `Capital Weather: ${data.main.temp} <sup>o</sup>C`;
      btn.classList.remove("btn-danger");
      btn.classList.add("btn-success");
    })
    
}

