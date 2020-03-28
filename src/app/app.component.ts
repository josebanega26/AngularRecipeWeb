import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipeWeb';
  route: string = '';
  getRouting(event){
    this.route = event;
    console.log('CHANGE ROUTING', event)
  }

}
