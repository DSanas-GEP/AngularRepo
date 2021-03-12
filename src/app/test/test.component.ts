import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  show:string;
  constructor() { }

  ngOnInit(): void {
  }
  showImage(img)
  {
    this.show=img;
  }
}
