import Movie from '../dto/movie.js';

class ApiService {
    static async get(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();

            const movies = data.map(movieData => {
                const id = data.indexOf(movieData);
                const title = movieData.Title;
                const description = movieData.Year;
                const image = movieData.Poster;

                return new Movie(id, title, description, image);
            });

            return movies;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }
  
    static async post(url, data) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        } catch (error) {
            console.error('Error posting data:', error);
            throw error;
        }
    }
}

export default ApiService;
