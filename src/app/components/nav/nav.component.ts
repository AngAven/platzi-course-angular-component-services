import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false

  constructor() { }

  ngOnInit(): void {
  }

  tollgeMenu(){
    this.activeMenu = !this.activeMenu
  }

}
