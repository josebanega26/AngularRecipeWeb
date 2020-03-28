import { Component, OnInit , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() selectRouting = new EventEmitter<String>();
  constructor() { }
  ngOnInit(): void {
  }

  getRoute(route){
    this.selectRouting.emit(route)
    console.log('route', route)
  }


}

