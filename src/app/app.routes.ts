import { Routes } from '@angular/router';
import { MissionComponent } from './pages/mission/mission.component';
import { AboutComponent } from './pages/about/about.component';
import { ListservComponent } from './pages/listserv/listserv.component';

export const routes: Routes = [
    { path: 'mission', component: MissionComponent },
    { path: 'about', component: AboutComponent},
    { path: 'listserv', component: ListservComponent}
];
