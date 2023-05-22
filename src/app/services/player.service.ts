import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL: string = "http://localhost:3000/players";

  constructor(private httpClient: HttpClient) { }

  getAllPlayers(){
    return this.httpClient.get<{playersArray:any,message:string}>(this.playerURL);
   }

   getPlayerById(id:any){
    return this.httpClient.get<{player:any}>(`${this.playerURL}/${id}`);
  }

  deletePlayer(id:any){
    return this.httpClient.delete<{isDeleted: boolean}>(`${this.playerURL}/${id}`);
  }

  addPlayer(playerObj){
    return this.httpClient.post<{message:string}>(this.playerURL, playerObj);
  }

  editPlayer(newPlayer){
    return this.httpClient.put<{isUpdated:boolean}>(this.playerURL, newPlayer);
  }
}
