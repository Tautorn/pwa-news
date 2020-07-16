const params = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}

// "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
// "x-rapidapi-key": "887bc695b8mshe3c038e7d30b7b9p1071d9jsn37965fc7ed2c",
// "useQueryString": true
// https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?q=${title}&pageSize=${pageSize}

function getNews(subject) {
  return fetch(`http://localhost:8080/api/${subject}`, params)
    .then((response) => response.json())
    .catch(function(err){ 
      console.error('Failed retrieving information', err);
    })
}

function getNewsById(subject, id) {
  return fetch(`http://localhost:8080/api/${subject}/${id}`, params)
    .then((response) => response.json())
    .catch(function(err){ 
      console.error('Failed retrieving information', err);
    })
}

export default {
  getNews,
  getNewsById
}