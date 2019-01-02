import {poloniexResponder} from "./Responder";
import {EndpointSchema} from "./types";

export const Endpoints:EndpointSchema[] =[
    {
        name: "PoloniexAPI",
        curve :[1,1,10000000000],
        broker: "",
        md: "", //adding md file here
        queryList: [{
            query: "price",
            params: ["from","to"],
            response: ["price"],
            dynamic: true,
            getResponse: poloniexResponder
        }]
        // },
        //     {
        //         query:"",
        //         params:[],
        //         response: [],
        //         dynamic:true,
        //         getResponse: getResponse
        //     }]
    }
    //response format  options  are reponse methods :
    // dynamic:true  --- respondBytes32Array, respondIntArray,
    // dynamic:false  --- respond1, respond2, respond3, respond4
]



/**
 * Example for Endpoint Schema
 {
        name: "CoinBaseSource",
        curve :[1,1,1e18],
        queryList: [{
            query:"price",
            params:["{coin}","{time}"],
            response: ["{price}","{notaryHash}"],
            getResponse: getResponse
        },
            {
                query:"volume",
                params:["{coin}","{period}"],
                response: ["{volume}","{notaryHash}"],
                getResponse: getResponse
            }]
    }
 */
