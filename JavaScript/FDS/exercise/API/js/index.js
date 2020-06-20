const key = '307f989bd4d1b2124427b7772542ea7a';


// State

const $view = document.querySelector('.view');

const render = product => {
	console.dir(product);
	const { id, original_title, genres, overview } = product;
	const posterPath = product.poster_path;
	let genersText = '';
	genres.forEach(genre => {
		genersText += `<span>${genre.name}</span>`;
	});
	console.log(genersText);
	
	$view.innerHTML = `
	<p>id: ${id}</p>
	<p>movie title: ${original_title}</p>
	<p><img src="https://image.tmdb.org/t/p/w185/${posterPath}" alt="image"></p>
	<p>geners: ${genersText}</p>
	<p>overview: ${overview}</p>
	`;
};


const get = () => {
	fetch(`https://api.themoviedb.org/3/movie/900?api_key=${key}&append_to_response=videos,images`)
		.then(res => res.json())
		.then(json => render(json))
		.catch(err => console.error(err));
};

window.onload = get;
