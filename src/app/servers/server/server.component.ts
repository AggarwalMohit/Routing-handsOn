import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
 // server_1: {id:number,name: string, status: string};
  server_2: {id:number,name: string, status: string};
 
  constructor(private serversService: ServersService,
    private activateroute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() 
  {

    
    const id=+this.activateroute.snapshot.params['id'];
    // const name=this.activateroute.snapshot.params['name'];
    // const status=this.activateroute.snapshot.params['status'];
    this.server_2 = this.serversService.getServer(id);
    this.activateroute.params.subscribe(
      (params:Params)=>{
        this.server_2=this.serversService.getServer(+params['id']);
      }
    )

    //     this.server_1=
    //     {
    //       id: this.activateroute.snapshot.params['id'],
    //       name: this.activateroute.snapshot.params['name'],
    //       status: this.activateroute.snapshot.params['status']
    //     };

    //     this.activateroute.params.subscribe(
    //   (params:Params)=>
    //   {
    //     this.server_1.id=params['id'];
    //     this.server_1.name=params['name'];
    //     this.server_1.status=params['status'];
    //   }
    // )
 }

  // onLoadServer(id:number)
  // {
  //   this.router.navigate(['./servers',id,'Virtual Server','offline'],
  //   {queryParams:{allowEdit:2},fragment:'jj'});
  // }
OnEdit()
{
 this.router.navigate(['./edit'],{relativeTo:this.activateroute,
  queryParamsHandling:'preserve'});
}
}
