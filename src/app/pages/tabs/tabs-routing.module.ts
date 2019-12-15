import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [{
  path: '',
  component: TabsPage,
  children: [{
    path: 'home',
    children: [{
      path: '',
      loadChildren: () =>
        import('../home/home.module').then(m => m.HomePageModule)
    }]
  }, {
    path: 'search',
    children: [{
      path: '',
      loadChildren: () =>
        import('../search/search.module').then(m => m.SearchPageModule)
    }]
  }, {
    path: 'create',
    children: [{
      path: '',
      loadChildren: () =>
        import('../create/create.module').then(m => m.CreatePageModule)
    }]
  }, {
    path: 'activity',
    children: [{
      path: '',
      loadChildren: () =>
        import('../activity/activity.module').then(m => m.ActivityPageModule)
    }]
  }, {
    path: 'karma',
    children: [{
      path: '',
      loadChildren: () =>
        import('../karma/karma.module').then(m => m.KarmaPageModule)
    }]
  }, {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
