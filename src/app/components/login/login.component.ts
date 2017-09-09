import { AuthService } from './../../auth.service';
import { Component,  } from '@angular/core';



//angularfire auth
import{AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private auth:AuthService) { 




  }
//sign in with google
  login(){

    this.auth.login();
  }



  

}
