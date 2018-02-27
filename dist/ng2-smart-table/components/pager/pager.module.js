import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagerComponent } from './pager.component';
export class PagerModule {
}
PagerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                ],
                declarations: [
                    PagerComponent,
                ],
                exports: [
                    PagerComponent,
                ],
            },] },
];
/** @nocollapse */
PagerModule.ctorParameters = () => [];
//# sourceMappingURL=pager.module.js.map