import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
  getData():any{
    return [{
      "team":"U Mumba",
      "captain":"Fazel Atrachali",
      "zone":'A'
      },{
        "team":"Bengaluru Bulls",
        "captain":"Rohit Kumar",
        "zone":'B'
      },{
        "team":"Gujarat Fortunegiants",
        "captain":"Sukesh Hegde",
        "zone":'A'
      },{
        "team":"Patna Pirates",
        "captain":"Pardeep Narwal",
        "zone":'B'
      },{
        "team":"Dabang Delhi K.C",
        "captain":"Joginder Narwal",
        "zone":'A'
      },{
        "team":"Telugu Titans",
        "captain":"Vishal Bharadwaj",
        "zone":'B'
      },{
        "team":"Puneri Paltan",
        "captain":"Girish Maruti Ernak",
        "zone":'A'
      }
    ];
  }

}
