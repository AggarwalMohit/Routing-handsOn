import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';

import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';

import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthFakeService } from './auth-fake.service';
import { AuthGaurdService } from './auth-gaurd.service';
import { CanDeactivateGaurd } from './servers/edit-server/canDeactivateGaurd.service';


// const appRoutes:Routes=
// [
//   {path:'',component:HomeComponent},

//   {path:'servers',component:ServersComponent,
//   children:[{path:':id/edit',component:EditServerComponent},
//             {path:':id/:name/:status',component:ServerComponent},
//             {path:':id/:name/:status/edit',component:EditServerComponent}]},
  
//   {path:'editServer',component:EditServerComponent},
//   // *****************************************************
  
//   {path:'users',component:UsersComponent,
//   children:[{path:':id/:name',component:UserComponent}]},
// // *****************************************************

//   {path:'**',redirectTo:'/not-found'},
//  {path:'not-found',component:PageNotFoundComponent},
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ServersService,AuthFakeService,AuthGaurdService,CanDeactivateGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
