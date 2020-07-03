import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { AuthFakeService } from '../auth-fake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route1:Router,
    private authfakeservice:AuthFakeService) { }

  ngOnInit() {
    
  }
  // LoadServer(id:number)
  // { 
  //   this.route1.navigate(['/servers',id,'edit'],{queryParams:{allowEdit:'1'},fragment:'loading'});
  // }

  onLogin()
  {
    this.authfakeservice.login();

  }
  onLogout()
  {
    this.authfakeservice.logout();
  }
}
