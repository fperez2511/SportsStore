import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryFilterComponent } from './categoryFilter.component';
import { CartSummaryComponent } from './cartSummary.component';
import { PaginationComponent } from './pagination.component';
import { ProductListComponent } from './productList.component';
import { ProductSelectionComponent } from './productSelection.component';
import { RatingsComponent } from './ratings.component';

@NgModule({
    declarations: [CartSummaryComponent, CategoryFilterComponent,
        PaginationComponent, ProductListComponent, RatingsComponent,
        ProductSelectionComponent],
    imports: [BrowserModule],
    exports: [ProductSelectionComponent]
})
export class StoreModule { }