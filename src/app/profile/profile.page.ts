import { Component, OnInit } from '@angular/core';
import { AuthService } from '../provider/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
  }

  login(){
    this.authService.login();
  }




}
