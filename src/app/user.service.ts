import { AppUser } from './models/app.user';
import { Injectable } from '@angular/core';

import{AngularFireDatabase,FirebaseObjectObservable} from 'angularfire2/database';
import * as firebase from 'firebase';


@Injectable()
export class UserService {

  user;

  constructor(private db:AngularFireDatabase) { 


  }
    
  //save user to firebase using the update
  save(user:firebase.User){
  this.db.object('/users/' +user.uid).update({
name:user.displayName,
email:user.email


  });
  }

  //get users


  get(uid:string):FirebaseObjectObservable<AppUser>{
  return this.db.object('/users/'+ uid);


  }
    
    
  


  }


