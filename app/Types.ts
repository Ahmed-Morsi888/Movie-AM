
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
export interface SerId {
  searchParams: {
    type?: string;
    page?: string;
  };
}
export interface SeriesProps{
    id:number,
    poster_path:string,
    name:string
  }
export interface MoviesProps{
    id:number,
    poster_path:string,
    title:string
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