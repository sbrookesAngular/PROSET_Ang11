import { Component, Input } from '@angular/core';
import { TABS } from 'src/app/Constants/constants';

@Component({
    selector: 'adapter-tabs',
    templateUrl: 'adapter-tabs.component.html',
    styleUrls: ['adapter-tabs.component.css']
})
export class AdapterTabsComponent {
    @Input() set adapterDetails(selectedAdapter: any) {
        this.getterData(selectedAdapter);
    }
    selected = false;
    Tab = TABS;
    selectedAdapterName: string;
    selectedAdapterDetails: any = {};
    activeTab = this.Tab.GENERAL;
    @Input() adapterSelected = false;

    clicked(): void {
        this.selected = !this.selected;
    }

    styleTab(value: number): Object {
        if (this.activeTab === value) {
            return { background: '#0071c5', color: 'white' };
        }
        return {};
    }

    activateTab(tabId: number) {
        this.activeTab = tabId;
    }

    getterData(row): void {
        this.selectedAdapterName = row.name;
        this.selectedAdapterDetails = {
            busType: row.busTypeString,
            driverName: ' ',
            driverVersion: row.driverVersion,
            eTrackId: row.eTrackID,
            location: row.location,
            mediaType: row.mediaTypeString,
            negotiatedLinkSpeed: row.negotiatedLinkSpeed,
            negotiatedLinkWidth: row.negotiatedLinkWidth,
            partNumber: row.partNumber,
            permanentEthernetAddress: row.permanentAddress
        };

        // Auto-select the general tab
        this.activateTab(this.Tab.DIAGNOSTICS);
    }
}

