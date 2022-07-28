import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    ActionsModule, DataTableModule, DetailsModule, MasterViewModule,
    SmeFormsModule, SplitViewModule, TooltipModule
} from '@microsoft/windows-admin-center-sdk/angular';
import { Routing } from './default.routing';

import { AdapterTabsComponent } from './adapter-tabs/adapter-tabs.component';
import { AdaptersTableComponent } from './adapters-table/adapters-table.component';
import { DefaultComponent } from './default.component';


@NgModule({
    imports: [
        CommonModule,
        Routing,
        SmeFormsModule,
        TooltipModule,
        ActionsModule,
        SplitViewModule,
        DetailsModule,
        MasterViewModule,
        DataTableModule,
    ],
    declarations: [
        DefaultComponent,
        AdaptersTableComponent,
        AdapterTabsComponent,
    ]
})

export class DefaultModule { }
