import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    },
    {
      id: 4,
      name: 'Nigeria'
    },
    {
      id: 10,
      name: 'Anna'
    }
  ];

  constructor(private route:Router,
    private activateroute:ActivatedRoute
){}

  ngOnInit()
  {

  }
  onLoadNigeria(id:number)
  {
 this.route.navigate(['/users',id,'nigeria'],{relativeTo:this.activateroute,queryParams:{allowEdit:'1'},fragment:'loading'});
  }
  
}
