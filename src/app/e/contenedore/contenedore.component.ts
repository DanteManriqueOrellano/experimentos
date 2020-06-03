import { Component, OnInit } from '@angular/core';
import { AbService } from 'src/app/ab.service';
import { IA } from 'src/app/a/aroot/aroot.component';
import { IAB } from 'src/app/c/ab/ab.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contenedore',
  templateUrl: './contenedore.component.html',
  styleUrls: ['./contenedore.component.css']
})
export class ContenedoreComponent implements OnInit {

  constructor(public abservice:AbService) { }

  dataIA$:Observable<IA>  = this.abservice. dataIA$
  ngOnInit(): void {
    
  
  }

 


}
