const apikey ="YqRScCgClJAqWZWGIJCNrJWkN0Y6nqJ-nMnvxklAPY0DNiNGDHF5c7xWO4lDUMPBPa7BVf9gQjKGKXmbYyNpPoMON5kbcTFPJmH7zpdlvGHdD45_q3wV6obUYv4IXHYx";

const Yelp ={
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers:{
                Authorization: `Bearer ${apikey}`
            }
        }
        )
        .then(response =>{
            return response.json();
        })
        .then(jsonResponse =>{
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map()
            }
        })
    }
}