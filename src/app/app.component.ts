import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import{Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private auth:AuthService, router:Router,private userService:UserService){
    //if the user logs out we receive null when we login we are on the page
  auth.user$.subscribe(user => {

    //when a user logs in
    if(user){
    
      //store users to firebase
    userService.save(user);


    let returnUrl = localStorage.getItem('returnUrl');
router.navigateByUrl(returnUrl);


}

  });
  }

  }

