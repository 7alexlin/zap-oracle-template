
const axios = require("axios");

export async function getResponse(query:string,params:string[]|[]){
    var name = params[0];
    var response;
    //var returnResponse;
    switch (query) {
        case "search":
            response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name);
            console.log(response);
            break;
        default:
            console.log("Error with Query");
            break;
    }

    console.log([""+response.data.weight]);
    return ["" + response.data.weight];
}

//var x = getResponse("getWeight", ["charizard"]);