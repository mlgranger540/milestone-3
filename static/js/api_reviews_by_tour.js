document.addEventListener("DOMContentLoaded", async function(event) {
    await fetch('/api/tours',{method:"GET"}).then(response => response.json()).then((data)=>{
        console.log(data);
        data.sort((a,b)=>{
            let x = a.TourName.toLowerCase();
            let y = b.TourName.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        let tourList = "<ul>";
        for (let i in data) {
            tourName = data[i].TourName;
            tourList += "<li>" + tourName + "</li>";
        }
        tourList += "</ul>";
        document.getElementById("tour-names").innerHTML = tourList;
    })
});
