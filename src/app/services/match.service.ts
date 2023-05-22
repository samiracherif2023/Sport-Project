import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // Backend server Adress
  matchURL: string = "http://localhost:3000/matches";
  // httpClient : un livreur
  constructor(private httpClient: HttpClient) { }
  // Response: Array of objects
  getAllMatches() {
    return this.httpClient.get<{matchesArray:any,message:string}>(this.matchURL);
  }
  //Response : One Object
  getMatchById(id: any) {
    return this.httpClient.get<{match:any}>(`${this.matchURL}/${id}`);
  }
  //Response : Message/Boolean
  deleteMatch(id: any) {
    return this.httpClient.delete<{isDeleted: boolean}>(`${this.matchURL}/${id}`);
  }
  //Response : Message / Boolean
  addMatch(matchObj) {
    return this.httpClient.post<{message:string}>(this.matchURL, matchObj);
  }
//Response :  Boolean
addComment(obj){
  return this.httpClient.post<{message:string}>(`${this.matchURL}/comment`, obj);
}
  editMatch(newMatch) {
    return this.httpClient.put<{isUpdated:boolean}>(this.matchURL, newMatch);
  }
  searchMatch(scoreOne,scoreTwo){
    return this.httpClient.get<{match:any}>(`${this.matchURL}/${scoreOne}/${scoreTwo}`);
    // OU  return this.httpClient.post<{match:any}>(`${this.matchURL}/search`,obj);

  }
  //Response : Array of Objects
  getAllMatchesWithComments(){
    return this.httpClient.get<{matches:any}>(`${this.matchURL}/comments/getAll/comments`);
  }
}
