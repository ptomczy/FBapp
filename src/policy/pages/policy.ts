import { Component, OnInit } from "@angular/core";
import { IPolicy } from '../model/policy.model';
import { PolicyService } from '../services/policy.service';

@Component({
    selector: 'policy',
    templateUrl: 'policy.html'
})
export class PolicyPage implements OnInit{

    private policies: Array<IPolicy>;

    constructor(private policyservice: PolicyService){

    }

    ngOnInit(){
        this.policyservice.getPolicies().subscribe(data => {
            this.policies = data.map( e => {
                return {
                    name: e.payload.doc.id,
                    value: e.payload.doc.data()
                } as IPolicy
            })
        })
    }

    create(policy: IPolicy){
        this.policyservice.createPolicy(policy);
    }
}