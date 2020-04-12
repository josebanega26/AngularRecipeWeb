import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../services/data-storage.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor( private dataStorageService: DataStorageService) { }
  ngOnInit(): void {
  }

  storageRecipes(){
    this.dataStorageService.storageRecipes()
  }
  onFetchRecipes(){
    this.dataStorageService.fetchRecipes().subscribe()
  }


}

