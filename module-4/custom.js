const form = document.querySelector('form');
const results = document.querySelector('#results');

form.addEventListener('submit', async function(event) {
  event.preventDefault();
  const query = document.getElementById('query').value;
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const data = await response.json();
  
  // Display search result
  let html = '';
  data.forEach(tvShow => {
    const name = tvShow.show.name;
    const url = tvShow.show.url;
    let image;
    if (tvShow.show.image && tvShow.show.image.medium) {
      image = tvShow.show.image.medium;
    } else {
      image = 'https://via.placeholder.com/210x295?text=Not%20Found';
    }
    const summary = tvShow.show.summary ? tvShow.show.summary : 'No summary available.';
    html += `<article>
              <h2>${name}</h2>
              <a href="${url}" target="_blank">
                <img src="${image}" alt="${name}">
              </a>
              <div>${summary}</div>
            </article>`;
  });
  results.innerHTML = html;
});

