import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class CinemaService {
  public host:String = "http://localhost:8080"
  constructor(private http:HttpClient) { }
  
  
  public getvilles(){
    return this.http.get(this.host+"/villes");
  }

  getCinemas(v:any){
    return this.http.get(v._links.cinemas.href);
  }

  getSalles(c: any){
    return this.http.get(c._links.salles.href);
  }
  getProjections(salle: any){
    let url = salle._links.projections.href.replace("{?projection}","");
    return this.http.get(url+"?projection=p1");
  }
}
