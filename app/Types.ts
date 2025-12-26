
export interface Props {
  params: {
    ReviewId: string;
  };
}
export interface ReviewType{  
    id:number,
    content:string,
    author:string,
    created_at:number
}

export interface MovId {
  params: Promise<{
    movieId: string
  }>
}
 export interface Movie {
  name:string
  adult:string;
  id: number;
  title: string;
  poster_path: string;
  vote_average:number;
  runtime:number;
  release_date:string;
  first_air_date:string;
  original_language:string
}

export interface SerId {
  searchParams: {
    type?: string;
    page?: string;
  };
}
export interface SeriesProps{
   name:string
  adult:string;
  id: number;
  title: string;
  poster_path: string;
  vote_average:number;
  runtime:number;
  release_date:string;
  first_air_date:string;
  original_language:string
  }

  export interface SearchParamsProps{
  searchParams:{
    type?:string,
    page?:string
  }
}
export interface SearchFilter{
    id:number;
    media_type:string;
    title?:string;
    name?:string;
    poster_path?:string;
    vote_average?:number;
}
export interface Propertise {
  baseurl: string;
  header: string;
  page?: number;
}
