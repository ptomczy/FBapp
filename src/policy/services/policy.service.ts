import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IPolicy } from '../model/policy.model';

@Injectable()
export class PolicyService {
    constructor(private firestore: AngularFirestore){
    }

    getPolicies(){
        return this.firestore.collection('policies').snapshotChanges();
    }

    createPolicy(policy: IPolicy){
        this.firestore.collection('policies').add(policy);
    }

    deletePolicy(policy: IPolicy){
        this.firestore.doc('policies/' + policy.name).delete();
    }
}