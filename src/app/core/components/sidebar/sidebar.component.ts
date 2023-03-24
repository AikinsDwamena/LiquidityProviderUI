import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent  {
  
  constructor(private route: ActivatedRoute){}

  lastSegment = this.route.snapshot.url[0].path;

}
