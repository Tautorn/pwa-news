const key = 'ce1f5396d890439bb54b4ee03c2e6cfc'

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}

function getNews(title, pageSize = 12) {
  return fetch(`https://newsapi.org/v2/everything?q=${title}&pageSize=${pageSize}&sortBy=publishedAt&apiKey=${key}`, headers)
    .then((response) => response.json())
    .catch(function(err){ 
      console.error('Failed retrieving information', err);
    })
}

export default {
  getNews
}