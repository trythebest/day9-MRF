let request= new XMLHttpRequest();
request.open("Get","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=(()=>{
    var data=JSON.parse(request.response);
    let asian = data.filter((data)=>data.region==="Asia");
    let popu=data.filter((data)=>data.population<200000).map((data)=>({name:data.name,population:data.population}));
    let totpopu=data.map((data)=>data.population).reduce((sum,curr)=>sum + curr,0);
    let usdcountry=data.filter((data)=> data.currencies && data.currencies[0].code==="USD").map((data)=>data.name);
    
    
    console.log(asian);
    console.log(popu);
    console.log(`TOTAL POPULATION IN THE WORLD IS ${totpopu}`);
    
    for (let usd of usdcountry ){ console.log(usd)};

data.forEach(data => {
    console.log(`Name:${data.name}, Capital:${data.capital},Flag:${data.flag}`);
        
    });


})
