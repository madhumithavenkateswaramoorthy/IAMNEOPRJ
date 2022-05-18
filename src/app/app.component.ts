import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'IamneoPrj';
  isExpanded=true;
 
  selected_Canditate="Add Candidate";
  selected_Published="Published";
  filterText: string="";
  NavtopItem:any[]=["account_circle"]
  NavItem1:any[]=["contact_support","featured_video","supervisor_account","settings"];
  NavItem2:any[]=["contact_support","featured_video","view_comfy"];
  click_item:any=false
  onTextChanged() {
  }
}
