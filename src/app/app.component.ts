import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { environment } from './environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'app works!';
  auth: AuthService;
}
