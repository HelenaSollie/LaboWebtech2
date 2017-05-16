class Clothing 

{
    constructor(options) {
        this.gender = {};
        this.article = {};
        this.temperature;
        this.url;
          
    }
    
    getArticles() {
        var that = this;
        
        const call = `https://shop-public-api.perimeter.zalan.do/articles`;
        
        $.ajax({
            method: "GET",
            url: call,
            datatype: "jsonp"
        }).done(function(response){
            
            console.log(response);
            that.gender= response.genders;
            that.updateUI();
        })
    }
    
    updateUI() {
        
        $('#clothes').append(`<h1>${this.gender}</h1>`);
        
    }
    
    
}

const options = {
    
    'el': '#clothes'
}

const Clothes = new Clothing (options);