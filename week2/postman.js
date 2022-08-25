  var personInfo =
  {
    "name" :'Darth_Vader',
    "height" : 202,
    "mass" : 136,
    "hairColor" : "none",
    "skinColor" : "white",
    "eyeColor" : "yellow",
    "birthYear" : "41.9BBY", 
    "gender" : "male",
    "homeworld" : "https://swapi.dev/api/planets/1/",
    "films" :[
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
    ],
    "species" :[],
    "vehicles" : [],
    "starships" :  [
        "https://swapi.dev/api/starships/13/"
    ],
    "created" : "2014-12-10T15:18:20.704000Z",
    "edited" : "2014-12-20T21:17:50.313000Z",
    "url" : "https://swapi.dev/api/people/4/"
}
 let text ="Person  Information:"

 for (const [key, value] of Object.entries(personInfo)) {
    let li = document.createElement("li")
 li.innerHTML = `${key}: ${value}` 

    document.getElementById("personInfo").append(li)

  }
 