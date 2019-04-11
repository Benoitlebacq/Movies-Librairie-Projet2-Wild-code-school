const Data =
[
{type: "Popular",          
  url : "https://api.themoviedb.org/3/movie/popular?api_key=a8a3380a564299f359c18e52aaa5bc79"        
},
{type: "Top rated",          
  url : "https://api.themoviedb.org/3/movie/top_rated?api_key=a8a3380a564299f359c18e52aaa5bc79"       
},
{type: "Upcoming",          
  url : "https://api.themoviedb.org/3/movie/upcoming?api_key=a8a3380a564299f359c18e52aaa5bc79"     
},
{type: "Western",          
  url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=37"     
},
{type: "Drama",          
  url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=18"     
},
{type: "Thriller",          
  url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=53"     
},
{type: "Science Fiction",          
  url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=878"     
},
{type: "Horror",          
  url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=27"     
},
{type: "Comedy",          
  url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=35"     
},
{type: "Animation",          
  url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=16"     
},
{type: "Documentary",          
  url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=99"     
},
{type: "War",          
  url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=10752"     
},
{type: "Music",          
url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=10402"     
},
{type: "Fantasy",          
  url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=14"     
},
{type: "History",          
  url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=36"     
},
{type: "Best of 1999 18+",          
  url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&primary_release_year=1999&sort_by=vote_average.desc&include_adult=true"     
},
{type: "Best of French language",          
  url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_original_language=fr"     
}

]
  export default Data;
  //"https://api.themoviedb.org/3/genre/movie/list?api_key=a8a3380a564299f359c18e52aaa5bc79" 
  // faire un menu déroulant des genre avec un li + map dans un composant

  // on peut aller chrcher un tableau qui referencie les trailer videos des films sur YT : 
  // https://api.themoviedb.org/3/movie/287947/videos?api_key=a8a3380a564299f359c18e52aaa5bc79
  // exemple de filtre : https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1