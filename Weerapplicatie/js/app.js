class Weather
{    
    constructor(options){        
        //set default values
        this.weather = {};
        this.place = {};
        this.latitude;
        this.longitude;
        this.apiKey = options.apiKey;
        this.url;
        
        this.init();
    }

    getMyLocation(){
        var that = this;
        console.info("we are in the getCurrentLocation");
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
            that.latitude = position.coords.latitude;
            that.longitude = position.coords.longitude;
            that.getWeather();
        });
    
    }    

    getWeather(position){
        var that = this;
        
        //GET request
        const call = `https://api.darksky.net/forecast/${this.apiKey}/${this.latitude},${this.longitude}?units=ca`;
        
        //Make the call
        $.ajax({
          method: "GET",
          url: call,
          dataType: "jsonp"
        }) .done(function(response){
            console.log(response);
            that.weather = response.currently;
            that.place = response.timezone;
            that.updateUI();
        })
    }

    updateUI(){
            
        
        var quote;
        var shirts = document.getElementById("shirts");
        var sunglasses = document.getElementById("sunglasses");
        var backgroundimage;
        var date = new Date();
        
        if(this.weather.temperature < 13) {
            
            quote = "Sweater weather!";
            backgroundimage = "url(https://s-media-cache-ak0.pinimg.com/564x/fc/04/23/fc04236abf12cac6801ef44d86fec6a0.jpg)";
            
        } else if (this.weather.temperature > 20) {
            
            quote = "Get your sunnies out!";
            backgroundimage = "url(https://s-media-cache-ak0.pinimg.com/564x/12/64/cb/1264cb076a9b036d468db823064186ba.jpg)";
            $('#sunglasses').css( "display", block );

        
        } else {
            
            quote = "Wear a statement shirt!";
            $('#shirts').css( "display", block );
        } 
        
$('body').css("background-image", backgroundimage );                
$('#quote').html( quote );   
    
        
$('#info').append("<p> Yay! it's " + " " +  DateFormat.format.date(date, 'ddd') + " " + "the" + " " + DateFormat.format.date(date, 'D') +  "</p>");
        
$('#info').append("<h4>" +  DateFormat.format.date(date, 'HH:mm:ss') + "</h4>");
        $('#info').append(`<h1>${Math.round(this.weather.temperature)}&deg;C</h1>`      
        
$('#info').append(`<h3>${this.place}</h3>`);       
       
    }

    init(){
        this.getMyLocation();
    }
    
    storeInCache(){
        //in localstore
    }
    
    getFromCache(){
        
    }
    

}

const options = {
    
    apiKey: '9893261e1d0c9c0e6482fe4cc304df08',
    'el': '#app'
}
const App = new Weather(options);