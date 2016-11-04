import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrowlModule } from 'primeng/primeng';
import { InplaceModule } from 'primeng/primeng';

import { LimitcharsPipe } from '../../shared/limitchars.pipe';
import { SimpleTinyComponent } from '../../shared/simple-tiny.component';

import { PagelistComponent } from './pagelist/pagelist.component';
import { PagenewComponent } from './pagenew/pagenew.component';
import { pageRouting } from './page.routing';
import { PageComponent } from './page.component';
import { PageeditComponent } from './pageedit/pageedit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LimitcharsPipe,
        PagelistComponent,
        PagenewComponent,
        PageComponent,
        PageeditComponent,
        SimpleTinyComponent
    ],
    imports: [
        CommonModule,
        pageRouting,
        FormsModule,
        GrowlModule,
        InplaceModule
    ]
})

export class PageModule {

}