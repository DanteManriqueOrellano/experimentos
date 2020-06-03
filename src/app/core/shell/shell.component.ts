import { Component, OnInit } from '@angular/core';
import { AbService } from 'src/app/ab.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent  {

  public ab$ = this.abservice.dataIAB$
  
  constructor(private abservice: AbService){}
 

}
