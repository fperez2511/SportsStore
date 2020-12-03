import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ProductDetailComponent } from './structure/productDetail.component';
// import { ProductTableComponent } from './structure/productTable.component';
import { ProductSelectionComponent } from './store/productSelection.component';

const routes: Routes = [
  // { path: "table", component: ProductTableComponent },
  // { path: "detail", component: ProductDetailComponent },
  // { path: "detail/:id", component: ProductDetailComponent },
  // { path: "", component: ProductTableComponent }
  { path: "store/:category/:page", component: ProductSelectionComponent },
  { path: "store/:categoryOrPage", component: ProductSelectionComponent },
  { path: "store", component: ProductSelectionComponent },
  { path: "", redirectTo: "/store", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
