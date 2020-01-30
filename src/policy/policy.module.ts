import { NgModule } from "@angular/core";
import { PolicyPage } from './pages/policy';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PolicyService } from './services/policy.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
    declarations: [PolicyPage],
    imports: [CommonModule, BrowserModule, AngularFireDatabaseModule],
    exports: [PolicyPage],
    providers: [PolicyService]
})
export class PolicyModule {

}