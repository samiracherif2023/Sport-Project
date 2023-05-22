import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {
 // Backend server Adress
 stadiumURL: string = "http://localhost:3000/stadiums";
  constructor( private httpClient:HttpClient) { }
  getAllStadiums() {
    return this.httpClient.get<{stadiumsArray:any,message:string}>(this.stadiumURL);
  }
  //Response : One Object
  getStadiumById(id: any) {
    return this.httpClient.get<{stadium:any}>(`${this.stadiumURL}/${id}`);
  }
  //Response : Message/Boolean
  deleteStadium(id: any) {
    return this.httpClient.delete<{isDeleted: boolean}>(`${this.stadiumURL}/${id}`);
  }
  //Response : Message / Boolean
  addStadium(stadiumObj) {
    return this.httpClient.post<{message:string}>(this.stadiumURL, stadiumObj);
  }

  editStadium(newStadium) {
    return this.httpClient.put<{isUpdated:boolean}>(this.stadiumURL, newStadium);
  }
  searchStadium(city){
    return this.httpClient.get<{stadium:any}>(`${this.stadiumURL}/${city}`);
    // OU  return this.httpClient.post<{match:any}>(`${this.matchURL}/search`,obj);

}}
