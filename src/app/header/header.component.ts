import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  headimgArray=[
    {'imgURL': 'assets/images/num4.jpg' , },
    {'imgURL': 'assets/images/num2.jpeg' , },
    {'imgURL': 'assets/images/num3.png' , },
    {'imgURL': 'assets/images/nummm1.jpg' }
  ]

  constructor() { }

  ngOnInit(): void {
                   }

}
