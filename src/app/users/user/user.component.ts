import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user: {id: number, name: string};
  
paramsSubscription:Subscription;
  
constructor(private activateroute:ActivatedRoute,private route:Router) { }

ngOnInit()
 {
  this.user=
  {
      id:this.activateroute.snapshot.params['id'],
      name:this.activateroute.snapshot.params['name']
  };
  
  this.paramsSubscription=this.activateroute.params.subscribe(
    (params:Params)=>{
      this.user.id=params['id'];
      this.user.name=params['name'];  
    }
  );
  this.activateroute.queryParams.subscribe();
  this.activateroute.fragment.subscribe();
  console.log(this.activateroute.snapshot.queryParams);
  console.log(this.activateroute.snapshot.fragment);
 }
//  onLoadNigeria(id:number)
//  {
// this.route.navigate(['/users',id,'nigeria'],{relativeTo:this.activateroute,queryParams:{allowEdit:'1'},fragment:'loading'});
//  }

  ngOnDestroy()
 {
 this.paramsSubscription.unsubscribe();
 }

}
