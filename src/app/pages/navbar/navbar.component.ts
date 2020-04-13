import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selected = '';
  constructor(
    private theme: NbThemeService
  ) { }

  ngOnInit(): void {
  }

  testing(ev){
      this.theme.changeTheme(ev);
      this.selected = ev;
  }

}
