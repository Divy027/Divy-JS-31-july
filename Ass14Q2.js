let hospitals = [
    {
    "id": 1,
    "name":"Hospital A",
    "location":"Delhi",
    "noOfBeds":450,
    'availability': "yes"
    },
    {
    "id": 2,
    "name":"Hospital B",
    "location":"Pune",
    "noOfBeds":150,
    'availability':"No"
    },
    {
    "id": 3,
    "name":"Hospital",
    "location":"Pune",
    "noOfBeds":'350',
    'availability':"Yes"
    }]

    let BEDS = hospitals.filter((Element)=> {
        if(Element.noOfBeds > 200){
            return Element;
        }
    })
    console.log(BEDS);
    let BedsAvailable = hospitals.filter((Element)=> {
        if(Element.availability==='yes'){
            return Element;
        }
    })
    console.log(BedsAvailable);
    let PuneLocality = hospitals.filter((Element)=> {
        if(Element.location === "Pune"){
            return Element;
        }
    })
    console.log(PuneLocality);