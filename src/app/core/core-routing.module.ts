import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MoviesScreenComponent } from "./movies-screen/movies-screen.component";
import { AuthGuardService } from "../authentication/guards/auth-guard.service";
import { MovieComponent } from "./movie/movie.component";
import { mapToCanActivate } from "@angular/router";
const routes:Routes=[
    {
        path: '',component: MoviesScreenComponent,canActivate:mapToCanActivate([AuthGuardService])
    }
    ,
    {
        path: 'movie/:id', component:MovieComponent,canActivate:mapToCanActivate([AuthGuardService]) 
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)]
    ,
    exports:[RouterModule]
})
export class CoreRoutingModule
{

}
