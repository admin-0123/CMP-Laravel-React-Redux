export const getRestaurants = params => {
  var url = "https://api.yelp.com/v3/businesses/search?term=restaurants";
  var bearToken = "";
  url += `&location=${params}&limit=50`;
  try {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer" + bearToken
      }
    }).then(response => {
      return response.json();
    });
  } catch (error) {
    throw new Error(error);
  }
};
