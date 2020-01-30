import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { IPolicy } from '../model/policy.model';
import { Observable } from 'rxjs';

@Injectable()
export class PolicyService {
    constructor(private firestore: AngularFirestore, private af: AngularFireDatabase ){
    }

    getPolicies() : Observable<IPolicy[]>{
        //return this.firestore.collection('policies').snapshotChanges();
        return  this.af.list('policies').valueChanges() as Observable<IPolicy[]>;
    }

    createPolicy(policy: IPolicy){
        this.firestore.collection('policies').add(policy);
    }

    deletePolicy(policy: IPolicy){
        this.firestore.doc('policies/' + policy.name).delete();
    }
}