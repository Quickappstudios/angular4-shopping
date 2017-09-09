import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import{CanActivate,RouterStateSnapshot} from '@angular/router';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth:AuthService,private router:Router) { }


  //canActivate AuthGuard return the user array if true if not a user navigate to login page

  canActivate(route,state:RouterStateSnapshot){
return this.auth.user$.map(user => {

  if(user) return true;
 //add queryParams to show redirect of url when logged out
  this.router.navigate(['app-login'],{queryParams:{returnUrl:state.url}});
  return false;
});


  }

}
