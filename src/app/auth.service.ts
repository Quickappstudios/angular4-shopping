import { AppUser } from './models/app.user';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

import{AngularFireAuth} from 'angularfire2/auth';
//firebase sdk
import * as firebase from 'firebase';

//observable
import{Observable} from 'rxjs/Observable';

//activated route
import{ActivatedRoute} from '@angular/router';

import 'rxjs/add/observable/of';


@Injectable()
export class AuthService {

  //create a user property
user$:Observable<firebase.User>;

  constructor(private afAuth:AngularFireAuth,private route:ActivatedRoute,private userService:UserService) { 

    this.user$ = afAuth.authState;
  }

//login from service
  login(){
   let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')|| '/';
   //store in local storage
    localStorage.setItem('returnUrl',returnUrl);

      this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
      }
    
    //logout from service
    logout(){
    
      this.afAuth.auth.signOut();
      
    }


    get appUser$() : Observable<AppUser> {
      return this.user$
        .switchMap(user => {
          if (user) return this.userService.get(user.uid);
         return Observable.of(null);
    
        });    

}


}
