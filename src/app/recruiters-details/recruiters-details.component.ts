import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import {  RecruitersDetails } from '../Recruiters';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-recruiters-details',
  templateUrl: './recruiters-details.component.html',
  styleUrls: ['./recruiters-details.component.scss']
})
export class RecruitersDetailsComponent implements OnInit {
  OpenCount: number = 0;
  contactedCount: number = 0;
  WrittenTestCount: number = 0;
  TechnicalRoundCount: number = 0;
  CultureRoundCount:number=0;

  TotalCount:number=0;
  groups: any[] = [];
  previousIndex = 0;
  currentIndex = 0;
  rating: number=0;
  ratingcount:number=5;
  ratingarray:boolean[]=[];
  @Input() SearchElement ="";
  selectedFilterText: string="";
  dummy = 0;
  



  dropItem(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
   this.CalculateCount();

  }

  getConnectedList(): any[] {
  let a =this.groups_id();
  console.log("groupid",a);
  
return a;
    

  }
  groups_id():any[]
  {
    return this.groups.map(x =>

      `${x.id}`);
  }
  dropGroup(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.groups, event.previousIndex, event.currentIndex);
    console.log("groups_dropGroup", this.groups);
    this.previousIndex = event.previousIndex;
    this.currentIndex = event.currentIndex;
this.CalculateCount();
  }
  constructor() { 
    this.ratingarray=Array(this.ratingcount).fill(false);
    // this.rating3 = 0;
  }

  ngOnInit(): void {
   this.RecruiterInitialize();
   this.CalculateCount();
   console.log("SearchElement:",this.SearchElement);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("SearchElement/changes:",changes.SearchElement.currentValue);
    this.selectedFilterText=changes.SearchElement.currentValue
  }
  RecruiterInitialize()
  {
    RecruitersDetails.forEach(element => {
      this.groups.push(element);
         });
   
  }
  CalculateCount()
  {
    this.TotalCount=this.groups.length;
    this.groups.forEach(element => {
      if(element.title=="Open")
      {
        // this.OpenCount=this.OpenCount+1;
        this.OpenCount=element.items.length;
      }
      else if(element.title=="Contacted")
      {
        this.contactedCount=element.items.length;
      }
      else if(element.title=="Writtent test")
      {
        this.WrittenTestCount=element.items.length;
      }
      else if(element.title=="Technical")
      {
        this.TechnicalRoundCount=element.items.length;
      }
      else if(element.title=="Culture fit round")
      {
        this.CultureRoundCount=element.items.length;
      }

    });
    console.log("RecruitersDetails", this.groups);
    console.log("open :", this.OpenCount,"/","contact",this.contactedCount,"written",this.WrittenTestCount);
  }
  CardDividerClr(title:string)
  {
    if(title=="Open")
      {
        
        return "Divider_Green";
      }
      else if(title=="Contacted")
      {
        return "Divider_Yellow";
      }
      else if(title=="Writtent test")
      {
        return "Divider_Yellow";
      }
      else if(title=="Technical")
      {
        return "Divider_red";
      }
      else if(title=="Culture fit round")
      {
        return "Divider_red";
      }
      else
      {
        return "Divider_Green"
      }
  }
  Star(i:number)
  {
    if(this.rating>=i+1)
    {
      return "star_border";

      // return "star";
    }
    else{
      return "star_border";
    }
  }
  onclick(i:number)
  {
    this.rating=i+1;
  }
}
// --------------------------------------------------
