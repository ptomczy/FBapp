import { NgModule } from "@angular/core";
import { PolicyPage } from './pages/policy';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PolicyService } from './services/policy.service';

@NgModule({
    declarations: [PolicyPage],
    imports: [CommonModule, BrowserModule],
    exports: [PolicyPage],
    providers: [PolicyService]
})
export class PolicyModule {

}