const Data =[
  {
    type: "Popular",          
    url : "https://api.themoviedb.org/3/movie/popular?api_key=a8a3380a564299f359c18e52aaa5bc79&page=" ,
    id : 0      
  },
  {
    type: "Top rated",          
    url : "https://api.themoviedb.org/3/movie/top_rated?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&page=" ,
    id : 0     
  },
  {type: "Upcoming",          
    url : "https://api.themoviedb.org/3/movie/upcoming?api_key=a8a3380a564299f359c18e52aaa5bc79&page=" ,
    id : 0   
  },
  {
    type: "Western",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&with_genres=37&page=" ,
    id : 37   
  },
  {
    type: "Action",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=28&page=" ,
    id : 28   
  },
  {
    type: "Drama",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=18&page=" ,
    id : 18   
  },
  {
    type: "Thriller",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&with_genres=53&page=" ,
    id : 53   
  },
  {
    type: "Science Fiction",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&with_genres=878&page=" ,
    id : 878   
  },
  {
    type: "Horror",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&with_genres=27&page=" ,
    id : 27   
  },
  {
    type: "Comedy",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&with_genres=35&page=" ,
    id : 35   
  },
  {
    type: "Animation",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&with_genres=16&page=" ,
    id : 16   
  },
  {
    type: "Adventure",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&with_genres=12&page=" ,
    id : 12   
  },
  {
    type: "Documentary",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&with_genres=99&page=" ,
    id : 99   
  },
  {
    type: "War",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=10752&page=" ,
    id : 10752   
  },
  {
    type: "Music",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&with_genres=10402&page=" ,
    id : 10402   
  },
  {
    type: "Fantasy",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&with_genres=14&page=" ,
    id : 14   
  },
  {
    type: "History",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=a8a3380a564299f359c18e52aaa5bc79&with_genres=36&page=" ,
    id : 36   
  },
  {
    type: "Mystery",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&with_genres=9648&page=" ,
    id : 9648   
  },
  {
    type: "Crimes",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&with_genres=80&page=" ,
    id : 80    
  },
  {
    type: "Romance",          
    url : "https://api.themoviedb.org/3/discover/movie?api_key=1092ee57947c8bdfc25a5a0641ecb8ec&with_genres=10749&page=" ,
    id : 10749   
  }
]
  export default Data;
 