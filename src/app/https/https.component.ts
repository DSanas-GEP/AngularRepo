import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-https',
  templateUrl: './https.component.html',
  styleUrls: ['./https.component.css']
})
export class HttpsComponent implements OnInit {
// id : number;
// name : string;
data:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
this.data = this.route.snapshot.params;


  }

}
