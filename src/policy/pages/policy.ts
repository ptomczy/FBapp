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
            this.policies = data
            //this.policies = data.map( e => {
                //let dta = e.payload.doc.data();
                // console.log("Info: ", dta);
                // return {
                //     name: e.payload.doc.get('name'),
                //     value: e.payload.doc.get('value')
                // } as IPolicy
                
            })
        
    }

    create(policy: IPolicy){
        this.policyservice.createPolicy(policy);
    }
}