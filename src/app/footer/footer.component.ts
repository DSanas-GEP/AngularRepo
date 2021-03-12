import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 show:string;

// hideImg:boolean=false;



  constructor() { }

  ngOnInit(): void {
    


  }
showImage(img)
{
  this.show=img;
}

mouseO()
{
  "document.getElementById('test').src='data:image/png;base64,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'"
}
}
