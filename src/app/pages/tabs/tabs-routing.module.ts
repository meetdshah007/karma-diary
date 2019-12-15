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
        import('../tab2/tab2.module').then(m => m.Tab2PageModule)
    }]
  }, {
    path: 'create',
    children: [{
      path: '',
      loadChildren: () =>
        import('../tab3/tab3.module').then(m => m.Tab3PageModule)
    }]
  }, {
    path: 'activity',
    children: [{
      path: '',
      loadChildren: () =>
        import('../tab3/tab3.module').then(m => m.Tab3PageModule)
    }]
  }, {
    path: 'karma',
    children: [{
      path: '',
      loadChildren: () =>
        import('../tab3/tab3.module').then(m => m.Tab3PageModule)
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
