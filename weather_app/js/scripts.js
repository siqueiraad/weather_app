
$(function(){
    function informacaoClimaLocal(){
        var strJson = '[{"LocalObservationDateTime":"2022-02-02T16:55:00-03:00","EpochTime":1643831700,"WeatherText":"Parcialmente ensolarado","WeatherIcon":3,"HasPrecipitation":false,"PrecipitationType":null,"IsDayTime":true,"Temperature":{"Metric":{"Value":27.2,"Unit":"C","UnitType":17},"Imperial":{"Value":81.0,"Unit":"F","UnitType":18}},"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/current-weather/44944?lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/current-weather/44944?lang=pt-br"}]';
        return JSON.parse(strJson)[0];
    }

    function informacaoPrevisaoLocal12h(){
        var strJson = '[{"DateTime":"2022-02-02T18:00:00-03:00","EpochDateTime":1643835600,"WeatherIcon":6,"IconPhrase":"Predominantemente nublado","HasPrecipitation":false,"IsDaylight":true,"Temperature":{"Value":76.0,"Unit":"F","UnitType":18},"PrecipitationProbability":19,"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=1&hbhhour=18&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=1&hbhhour=18&lang=pt-br"},{"DateTime":"2022-02-02T19:00:00-03:00","EpochDateTime":1643839200,"WeatherIcon":6,"IconPhrase":"Predominantemente nublado","HasPrecipitation":false,"IsDaylight":true,"Temperature":{"Value":73.0,"Unit":"F","UnitType":18},"PrecipitationProbability":14,"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=1&hbhhour=19&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=1&hbhhour=19&lang=pt-br"},{"DateTime":"2022-02-02T20:00:00-03:00","EpochDateTime":1643842800,"WeatherIcon":7,"IconPhrase":"Nublado","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":72.0,"Unit":"F","UnitType":18},"PrecipitationProbability":14,"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=1&hbhhour=20&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=1&hbhhour=20&lang=pt-br"},{"DateTime":"2022-02-02T21:00:00-03:00","EpochDateTime":1643846400,"WeatherIcon":7,"IconPhrase":"Nublado","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":69.0,"Unit":"F","UnitType":18},"PrecipitationProbability":14,"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=1&hbhhour=21&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=1&hbhhour=21&lang=pt-br"},{"DateTime":"2022-02-02T22:00:00-03:00","EpochDateTime":1643850000,"WeatherIcon":7,"IconPhrase":"Nublado","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":68.0,"Unit":"F","UnitType":18},"PrecipitationProbability":14,"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=1&hbhhour=22&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=1&hbhhour=22&lang=pt-br"},{"DateTime":"2022-02-02T23:00:00-03:00","EpochDateTime":1643853600,"WeatherIcon":7,"IconPhrase":"Nublado","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":67.0,"Unit":"F","UnitType":18},"PrecipitationProbability":14,"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=1&hbhhour=23&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=1&hbhhour=23&lang=pt-br"},{"DateTime":"2022-02-03T00:00:00-03:00","EpochDateTime":1643857200,"WeatherIcon":7,"IconPhrase":"Nublado","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":67.0,"Unit":"F","UnitType":18},"PrecipitationProbability":10,"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=2&hbhhour=0&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=2&hbhhour=0&lang=pt-br"},{"DateTime":"2022-02-03T01:00:00-03:00","EpochDateTime":1643860800,"WeatherIcon":7,"IconPhrase":"Nublado","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":66.0,"Unit":"F","UnitType":18},"PrecipitationProbability":2,"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=2&hbhhour=1&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=2&hbhhour=1&lang=pt-br"},{"DateTime":"2022-02-03T02:00:00-03:00","EpochDateTime":1643864400,"WeatherIcon":7,"IconPhrase":"Nublado","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":66.0,"Unit":"F","UnitType":18},"PrecipitationProbability":2,"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=2&hbhhour=2&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=2&hbhhour=2&lang=pt-br"},{"DateTime":"2022-02-03T03:00:00-03:00","EpochDateTime":1643868000,"WeatherIcon":7,"IconPhrase":"Nublado","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":65.0,"Unit":"F","UnitType":18},"PrecipitationProbability":2,"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=2&hbhhour=3&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=2&hbhhour=3&lang=pt-br"},{"DateTime":"2022-02-03T04:00:00-03:00","EpochDateTime":1643871600,"WeatherIcon":7,"IconPhrase":"Nublado","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":65.0,"Unit":"F","UnitType":18},"PrecipitationProbability":2,"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=2&hbhhour=4&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=2&hbhhour=4&lang=pt-br"},{"DateTime":"2022-02-03T05:00:00-03:00","EpochDateTime":1643875200,"WeatherIcon":7,"IconPhrase":"Nublado","HasPrecipitation":false,"IsDaylight":false,"Temperature":{"Value":64.0,"Unit":"F","UnitType":18},"PrecipitationProbability":2,"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=2&hbhhour=5&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/hourly-weather-forecast/44944?day=2&hbhhour=5&lang=pt-br"}]';
        return JSON.parse(strJson);
    }

    function informacaoPrevisaoLocal5d(){
        var strJson = '{"Headline":{"EffectiveDate":"2022-02-02T13:00:00-03:00","EffectiveEpochDate":1643817600,"Severity":5,"Text":"Previsão de pancadas de chuva nesta tarde","Category":"rain","EndDate":"2022-02-02T19:00:00-03:00","EndEpochDate":1643839200,"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/daily-weather-forecast/44944?lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/daily-weather-forecast/44944?lang=pt-br"},"DailyForecasts":[{"Date":"2022-02-02T07:00:00-03:00","EpochDate":1643796000,"Temperature":{"Minimum":{"Value":63.0,"Unit":"F","UnitType":18},"Maximum":{"Value":82.0,"Unit":"F","UnitType":18}},"Day":{"Icon":14,"IconPhrase":"Parcialmente aberto, com pancadas de chuva","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Night":{"Icon":8,"IconPhrase":"Lúgubre","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/daily-weather-forecast/44944?day=1&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/daily-weather-forecast/44944?day=1&lang=pt-br"},{"Date":"2022-02-03T07:00:00-03:00","EpochDate":1643882400,"Temperature":{"Minimum":{"Value":66.0,"Unit":"F","UnitType":18},"Maximum":{"Value":83.0,"Unit":"F","UnitType":18}},"Day":{"Icon":14,"IconPhrase":"Parcialmente aberto, com pancadas de chuva","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Night":{"Icon":8,"IconPhrase":"Lúgubre","HasPrecipitation":false},"Sources":["AccuWeather"],"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/daily-weather-forecast/44944?day=2&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/daily-weather-forecast/44944?day=2&lang=pt-br"},{"Date":"2022-02-04T07:00:00-03:00","EpochDate":1643968800,"Temperature":{"Minimum":{"Value":68.0,"Unit":"F","UnitType":18},"Maximum":{"Value":79.0,"Unit":"F","UnitType":18}},"Day":{"Icon":18,"IconPhrase":"Chuva","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Light"},"Night":{"Icon":7,"IconPhrase":"Nublado","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Sources":["AccuWeather"],"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/daily-weather-forecast/44944?day=3&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/daily-weather-forecast/44944?day=3&lang=pt-br"},{"Date":"2022-02-05T07:00:00-03:00","EpochDate":1644055200,"Temperature":{"Minimum":{"Value":67.0,"Unit":"F","UnitType":18},"Maximum":{"Value":80.0,"Unit":"F","UnitType":18}},"Day":{"Icon":18,"IconPhrase":"Chuva","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Night":{"Icon":7,"IconPhrase":"Nublado","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Moderate"},"Sources":["AccuWeather"],"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/daily-weather-forecast/44944?day=4&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/daily-weather-forecast/44944?day=4&lang=pt-br"},{"Date":"2022-02-06T07:00:00-03:00","EpochDate":1644141600,"Temperature":{"Minimum":{"Value":65.0,"Unit":"F","UnitType":18},"Maximum":{"Value":80.0,"Unit":"F","UnitType":18}},"Day":{"Icon":18,"IconPhrase":"Chuva","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Light"},"Night":{"Icon":12,"IconPhrase":"Pancadas de chuva","HasPrecipitation":true,"PrecipitationType":"Rain","PrecipitationIntensity":"Light"},"Sources":["AccuWeather"],"MobileLink":"http://www.accuweather.com/pt/br/curitiba/44944/daily-weather-forecast/44944?day=5&lang=pt-br","Link":"http://www.accuweather.com/pt/br/curitiba/44944/daily-weather-forecast/44944?day=5&lang=pt-br"}]}';
        return JSON.parse(strJson);
    }

    function celsiusToFahrenheit(x){
        return (1.8*x + 32).toFixed(1);
    }

    function fahrenheitToCelsius(x){
        return ( (x-32)*5/9 ).toFixed(1);
    }

    function preencherInfo_5dias(diaSemana, linkIcone, tempMinMax){
        var elemento = '<div class="day col">' +
                          '<div class="day_inner">' +
                             '<div class="dayname">' + diaSemana + '</div>' +
                             '<div style="background-image: url(' + linkIcone + ')" class="daily_weather_icon"></div>' +
                             '<div class="max_min_temp">' + tempMinMax + '</div>' +
                          '</div>' +
                       '</div>';
        return elemento;
    }

    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', "Quinta-feira", "Sexta-feira", "Sábado"];
    
// *** APIs ***
// clima, previsão 12 horas e previsão 5 dias: https://developer.accuweather.com/apis
// pegar coordenadas geográficas pelo nome da cidade: https://docs.mapbox.com/api/
// pegar coordenadas do IP: http://www.geoplugin.net
// gerar gráficos em JS: https://www.highcharts.com/demo
// **** Clima ****
// http://dataservice.accuweather.com/currentconditions/v1/44944?apikey=nPRyC7LOkWKV39gfn5zM9OJ3UfIufctk&language=pt-BR
// **** Previsao 12 horas ****
//http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/44944?apikey=nPRyC7LOkWKV39gfn5zM9OJ3UfIufctk&language=pt-br
// **** Previsao 5 dias ****
//http://dataservice.accuweather.com/forecasts/v1/daily/5day/44944?apikey=nPRyC7LOkWKV39gfn5zM9OJ3UfIufctk&language=pt-br
    $("#page-loader").show();
    var cidadeByIp = geoplugin_city();
    var estadoByIp = geoplugin_region();
    var paisByIp = geoplugin_countryName();
    $("#texto_local").html(cidadeByIp + ", " + estadoByIp + " - " + paisByIp);
    $("#texto_clima").html(informacaoClimaLocal().WeatherText);
    
    //Definição do ícone relacionado a temperatura
    var numeroIcone = informacaoClimaLocal().WeatherIcon;
    numeroIcone = numeroIcone<10 ? "0"+numeroIcone.toString() : numeroIcone.toString();
    $("#icone_clima").css({
        'background-image': "url('https://developer.accuweather.com/sites/default/files/" + numeroIcone + "-s.png')"
    });

    //Definição do Temperatura atual e previsão mínima e máxima
    $("#texto_temperatura").html(informacaoClimaLocal().Temperature.Metric.Value + "&deg;C");
    var tempMin = fahrenheitToCelsius(informacaoPrevisaoLocal5d().DailyForecasts[0].Temperature.Minimum.Value) + "&deg;";
    var tempMax = fahrenheitToCelsius(informacaoPrevisaoLocal5d().DailyForecasts[0].Temperature.Maximum.Value) + "&deg;";
    $("#texto_max_min").html(tempMin + " / " + tempMax);
    
    //Preenchimento previsão dos 5 dias
    var previsoes5d = informacaoPrevisaoLocal5d().DailyForecasts
    previsoes5d.forEach(previsao => {
        var dia = new Date(previsao.Date);
        var diaSemana = diasSemana[dia.getDay()];
        var numeroIcone = previsao.Day.Icon;
        numeroIcone = numeroIcone<10 ? "0"+numeroIcone.toString() : numeroIcone.toString();
        var linkIcone = 'https://developer.accuweather.com/sites/default/files/' + numeroIcone + '-s.png';
        let tempMin = fahrenheitToCelsius(previsao.Temperature.Minimum.Value) + "&deg;";
        let tempMax = fahrenheitToCelsius(previsao.Temperature.Maximum.Value) + "&deg;";
        var tempMinMax = tempMin + ' / ' + tempMax;
        $("#info_5dias").append(preencherInfo_5dias(diaSemana, linkIcone, tempMinMax));
    });

    

    //Preenchimento gráfico
    var previsoes12h = informacaoPrevisaoLocal12h();//.EpochDateTime;
    var horarios = [];
    var temperaturas = [];
    previsoes12h.forEach(previsao => {
        var horario = new Date(previsao.DateTime);
        horarios.push(horario.getHours()+"h");

        var temperatura = parseFloat(fahrenheitToCelsius(previsao.Temperature.Value));
        console.log(typeof temperatura);
        temperaturas.push(temperatura);
    });
    console.log(temperaturas);
    
    Highcharts.chart('hourly_chart', {

        title: {text: 'Temperatura hora a hora'},
        yAxis: {title: {text: 'Temperatura'}},
        xAxis: {
            accessibility: {rangeDescription: 'previsão próximas 12 horas'},
            categories: horarios
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                }
            }
        },
    
        series: [{
            name: 'Horário',
            data: temperaturas
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    
    });

    $("#page-loader").hide();
});