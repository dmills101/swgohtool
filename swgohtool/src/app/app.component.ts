import { Component } from '@angular/core';
import { categories } from './core/data/cats';
import { FetchmeService } from './core/utilities/fetchme.service';
import legends from './core/data/gls'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swgohtool';

  async ngOnInit(){
    await this.fetch.populateShips();
     await this.fetch.populateUnits();

}

  public constructor(private fetch:FetchmeService){
    console.log("add me");
 
  }

  async fetchData(){
    let player = await this.fetch.populatePlayer('357182769');
    console.log(player);
  }

  test(){
    console.log(this.fetch.units);
    console.log(this.fetch.ships);
  }
}
