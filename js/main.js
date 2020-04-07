var price = document.getElementById("price");
var data = document.getElementById("data");
var profit = document.getElementById("profit");
var rate = document.getElementById("rate");
var percentageProfit = 0;
var priceVal = 0;
var dataVal = 0;
var unitPriceVal = 0;
var rateVal= 0;
var unitProfit= 0;
var profitVal= 0;
var revenue=0;
var str;
var res;

function thousands_separators(num){ 
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}


function getProfit(){
    price.addEventListener("keyup", function(){
        priceVal = parseInt(price.value);

        str = document.getElementById("price").value; 
        res = str.replace(priceVal, thousands_separators(priceVal));

        // document.getElementById("price").setAttribute('value',res);
        document.getElementById("price").value = res;
        console.log(thousands_separators(priceVal), res, "res",  str, "str");
        calculateValues()

    });
    data.addEventListener("keyup", function(){
        dataVal = parseInt(data.value);
        calculateValues()
    });
    rate.addEventListener("keyup", function(){
        rateVal = parseInt(rate.value);
        calculateValues()
    });
}

function calculateValues(){
    unitPriceVal = dataVal == 0 ? 0 : (priceVal / dataVal);
    console.log(unitPriceVal, priceVal, "unit, price")
    document.getElementById("unitPrice").innerText = thousands_separators(unitPriceVal.toFixed(2));

    if(rateVal > 0){
        unitProfit = (rateVal - unitPriceVal);
        document.getElementById("unitProfit").innerText = thousands_separators(unitProfit.toFixed(2));

        profitVal = (dataVal*rateVal) - priceVal;
        document.getElementById("profit").innerText = thousands_separators(profitVal.toFixed());
        if (profitVal < 0){
            document.getElementById("showProfit").classList.remove("text-success");
            document.getElementById("showProfit").classList.add("text-danger");
        }
        else if (profitVal > 0){
            document.getElementById("showProfit").classList.add("text-success");
            document.getElementById("showProfit").classList.remove("text-danger");
        }

        percentageProfit = (profitVal/priceVal)*100;
        document.getElementById("percentageProfit").innerText = percentageProfit.toFixed(2); 

        revenue = (dataVal*rateVal);
        document.getElementById("revenue").innerText = thousands_separators(revenue.toFixed());
    }
    
}

getProfit();



function navigate(url){
    location.href = url;
}



//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function () {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-theVideo"),
            videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
}

autoPlayYouTubeModal();
