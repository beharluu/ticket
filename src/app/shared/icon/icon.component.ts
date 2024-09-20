import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input('name') name: any;  //This parameter here is the file name from assets/icons;

  directory: String = '../../../assets/icons/';

  ngOnInit() { 
    if(this.name) this.directory = this.directory+this.name+'.svg';
  }

}
