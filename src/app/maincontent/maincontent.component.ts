import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {
  sidebarTitle:string="Services";
  navigationArray = [
    {'menulink': '#decoration' , 'menuname':'Decoration'},
    {'menulink': '#Photo/Vedio' , 'menuname':'Photo/Vedio'},
    {'menulink': '#Catering' , 'menuname':'Catering'},
    {'menulink': '#MusicDJ' , 'menuname':'Music DJ'},
    {'menulink': '#Makeup' , 'menuname':'Make up'},
    {'menulink': '#Gift' , 'menuname':'Gift'},
    {'menulink': '#Cake' , 'menuname':'Cake'},
    {'menulink': '#Kidsgames' , 'menuname':'Kids Games'},
  ]

  mainpartTitle:string="Popular Events";
  imagesArray=[
    {'imageURL': 'assets/images/cake.jpg' , 'cardname':'Birthday Party'},
    {'imageURL': 'assets/images/anniversary.jpg' , 'cardname':'Anniversary'},
    {'imageURL': 'assets/images/farewell.jpg' , 'cardname':'Farewell'},
    {'imageURL': 'assets/images/conference.jpg' , 'cardname':'Conference'}
  ]
  
 
  constructor() { }
  ngOnInit(): void {
  }

}
