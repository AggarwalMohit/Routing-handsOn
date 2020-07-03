import { NgModule, Component } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { CanDeactivateGaurd } from './servers/edit-server/canDeactivateGaurd.service';

const appRoutes:Routes=
[
  {path:'',component:HomeComponent},

  {path:'servers',canActivateChild:[AuthGaurdService],component:ServersComponent,
  children:[{path:':id/edit',component:EditServerComponent},
            {path:':id/:name/:status',component:ServerComponent},
            {path:':id/:name/:status/edit',component:EditServerComponent,canDeactivate:[CanDeactivateGaurd]}]},
  
  {path:'editServer',component:EditServerComponent},
  // *****************************************************
  
  {path:'users',component:UsersComponent,
  children:[{path:':id/:name',component:UserComponent}]},
// *****************************************************

  {path:'**',redirectTo:'/not-found'},
 {path:'not-found',component:PageNotFoundComponent},
];

@NgModule({

        
        imports:[
            RouterModule.forRoot(appRoutes)
        ],
        exports:[RouterModule]
    })
export class AppRoutingModule
{

}

