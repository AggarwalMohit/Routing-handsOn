import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute,Params } from '@angular/router';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate, CanDeactivateGaurd } from './canDeactivateGaurd.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit=false;
  changedSaved=false;

  constructor(private serversService: ServersService,
    private route2:ActivatedRoute,
    private route:Router) { }

  ngOnInit() {
    const id=+this.route2.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    
    this.serverName = this.route2.snapshot.params['name'];
    this.serverStatus = this.route2.snapshot.params['status'];
    this.route2.params.subscribe(
      (params:Params)=>{
this.serverName=params['name'];
this.serverStatus=params['status'];
      });
 
    this.route2.queryParams
    .subscribe(
      (queryParams:Params)=>{
        this.allowEdit=queryParams['allowEdit']==='1'?true:false;
      }
    );
    
    this.route2.queryParams.subscribe();
    this.route2.fragment.subscribe();
    
  }

  onUpdateServer() {
    this.changedSaved=true;
    this.route.navigate(['../'],{relativeTo:this.route2})
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
   
   
}
canDeactivate():Observable<boolean>|Promise<boolean>|boolean
{
  if(!this.allowEdit){
    return true;
  }
  if((this.serverName!==this.server.name)||(this.serverStatus!==this.server.status)&&!this.changedSaved)
  {
    return confirm("Do you want to continue without saving?");
  }
  else{
    return true;
  }
}

}
