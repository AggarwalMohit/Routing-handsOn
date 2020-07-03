import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[]=[];

  constructor(private serversService: ServersService,
    private activateroute:ActivatedRoute,
    private route:Router) { }

  ngOnInit() {
    // const id=+this.route.snapshot.params['id'];//converting id coming from URL as string to number
    // const name=this.route.snapshot.params['name'];
    
    // this.servers = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (par:Params)=>{
    //     this.servers = this.serversService.getServer(+par['id']);
    //   }
    // );
    
    // this.servers=this.serversService.getServersName(name);
    // this.route.params.subscribe(
    //   (par:Params)=>{
    //     this.servers=this.serversService.getServersName(par['name']);
    //   }
    // );
    
    this.servers = this.serversService.getServers();
  }
// onLoadServer()
// {
//   this.route.navigate(['/servers','4','Virtual Server','offline']);
// }

}
