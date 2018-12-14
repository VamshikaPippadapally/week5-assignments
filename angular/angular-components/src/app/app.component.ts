import { Component } from '@angular/core';
import {GameService} from 'src/app/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataset=[];
  constructor(private readonly data:GameService){}
  showData(){
    this.dataset=this.data.getData();
  }
}
