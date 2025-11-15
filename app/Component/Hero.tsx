
import SwiperComponent from './swiperComponent';

export default function Hero() {
  

  return <>
  <div className='w-full h-full bg-gray-900'>
<SwiperComponent baseurl="https://api.themoviedb.org/3/discover/movie?" header="All Movies"/>
<SwiperComponent baseurl="https://api.themoviedb.org/3/trending/movie/day?" header="Trending"/>
<SwiperComponent baseurl="https://api.themoviedb.org/3/trending/all/day?" header="Trending Today"/>
<SwiperComponent baseurl="https://api.themoviedb.org/3/movie/popular?" header="Popular Movies" page={2}/>
<SwiperComponent baseurl="https://api.themoviedb.org/3/movie/top_rated?" header="Top Rated"/>
<SwiperComponent baseurl="https://api.themoviedb.org/3/movie/upcoming?" header="Upcoming"/>
<SwiperComponent baseurl="https://api.themoviedb.org/3/tv/popular?" header="Popular Series" />
<SwiperComponent baseurl="https://api.themoviedb.org/3/tv/top_rated?" header="TopRated Series" />
<SwiperComponent baseurl="https://api.themoviedb.org/3/tv/airing_today?" header="Airing Series today" />
</div>
  
  
  </>
    
}
