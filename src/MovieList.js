// Data Structure for managing a very long list of movies.
export default class MovieList {

  constructor(movieList){
      this.movieList=movieList;
      this.pageSize=10;
      this.currentStart=0;
  }

  setCurrentStart(currentStart){
    this.currentStart=currentStart;
  }

  getCurrentStart(){
    return this.currentStart;
  }

  setPageSize(pageSize){
    this.pageSize=pageSize;
  }

  getPageSize(){
    return this.pageSize;
  }

  getMovies(){
    return this.movieList.slice(this.currentStart,this.currentStart+this.pageSize);
  }
}
