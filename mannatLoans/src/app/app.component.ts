import { Component } from '@angular/core';
import { AuthService } from './app-services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mannatLoans';

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    console.log("dftgyhukl;")
    this.authService.userlogin().subscribe((userData: any) => {
      console.log("get users", userData)
    });
  }
}
