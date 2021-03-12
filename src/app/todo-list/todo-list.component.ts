
import { Component, OnInit } from '@angular/core';

import tododata from '../data/data';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {



  constructor() { }
  tddata:any=tododata;
  addTask:string;
  taskObj:any;


countnumber:number=0;
  statustext:string;

  ngOnInit(): void {
    this.addTask="";
    
   
  }
  

  changeStatus(index, count)
  {

    for(let key in this.tddata)
    {

       if( index==key && count==0)
      {
           this.tddata[key].status= key==index?"inprogress":this.tddata[key].status;
       
          this.tddata[key].col=key==index? "orange": this.tddata[key].status;
          this.tddata[key].count= key==index?"1": this.tddata[key].count;

        
          
      
      }
      else if( index==key && this.tddata[key].count==1)
      {
           this.tddata[key].status= key==index?"complete": this.tddata[key].status;
       
          this.tddata[key].col=key==index? "green": this.tddata[key].status;
       
        
         

      }
    }

         
    }

      // 
 
      toaddtask(taskname)

      {
        
          // let addstorage = localStorage.getItem("newtask");
          // if(addstorage==null)
          // {
          //   this.taskObj=[];
          // }
          // else
          // {
          //   this.taskObj = JSON.parse(addstorage);
          // }
          //   this.taskObj.push(taskname);

          //   localStorage.setItem("newtask",JSON.stringify(this.taskObj));

       if(taskname!=""){ 
        var newtask = {
          count:0,
          taskName: taskname,
          status: 'new',
          col:'grey`'

           }
               this.tddata.push(newtask);
             }
               else
               alert("Taskname is blank");

               this.addTask="";
      }


      removeTask(index)
      {
      
        this.tddata.splice( index,1)
        
      
      }
    }

    // showtask()
    // {
    //   let addtextbox = document.getElementById("additem");
    //   let addstorage = localStorage.getItem("newtask");
    //       if(addstorage==null)
    //       {
    //         this.taskObj=[];
    //       }
    //       else
    //       {
    //         this.taskObj = JSON.parse(addstorage);
    //       }
    //     let html="";
          
    //       this.taskObj.forEach((item,index) => {
            
    //         html +=`
    //         <p>${index+1}</p>
    //         <p >${item}</p>
     
    //             <p class="font-weight-bold" type="status" id="status" [ngStyle]="{ color: ${"white"} }">${"new"}</p>
            
    
    //          <button class="btn btn-primary" (click)="changeStatus(${index},${"0"})">Change Status</button>
    //          <button class="btn btn-danger" (click)="removeTask(${index}" >Edit</button>
    //          <hr class="border border-dark">
    //         `;

    //         addtextbox.innerHTML= html;
            
    //       });
    // }

//     editTask(index)
//     {       let  addtextbox = document.getElementById("additem");
//             let getStorage = localStorage.getItem("taskname");
    
//               let obj = JSON.parse(getStorage);
//               console.log(addtextbox.nodeValue);
//               console.log( obj[index])
//              addtextbox.nodeValue= obj[index];

//     }

//  }


//   if( this.statustext=="new" )
//   {


//    this.statustext=  document.getElementById("status").innerHTML="Inprogress";
// document.getElementById("status").style.color="orange";
     
//   }
//   else 
//   {
//      document.getElementById("status").innerHTML='Complete';
// document.getElementById("status").style.color="green";
  
   
//   }
 
    


