import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nabar',
  templateUrl: './nabar.component.html',
  styleUrls: ['./nabar.component.css']
})
export class NabarComponent implements OnInit {

  constructor( public authservice : AuthService) { }

  ngOnInit(): void {
    
  }

  ngOnchnges(){
    this.isAuthenticated()
  }

  isAuthenticated():boolean
  {
    return this.authservice.isAuthenticated();
  }

  logout(){
    sessionStorage.clear();
  }

  


}
