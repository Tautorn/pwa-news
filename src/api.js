const params = {
  method: 'GET',
  mode: 'cors',
  cache: 'default',
  headers: {
    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    "x-rapidapi-key": "887bc695b8mshe3c038e7d30b7b9p1071d9jsn37965fc7ed2c",
    "useQueryString": true
  }
}

function getNews(title, pageSize = 12) {
  return fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?q=${title}&pageSize=${pageSize}`, params)
    .then((response) => response.json())
    .catch(function(err){ 
      console.error('Failed retrieving information', err);
    })
}

export default {
  getNews
}