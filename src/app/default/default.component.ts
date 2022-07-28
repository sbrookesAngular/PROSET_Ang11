import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppContextService } from '@microsoft/windows-admin-center-sdk/angular';
import { Adapter } from '../models/adapter.model';
import { DefaultService } from './default.service';


@Component({
    selector: 'default-component',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnDestroy, OnInit {
    m_strComputerName: string;
    adapterSelected: boolean;
    adapterColumns = [{ header: 'Name', field: 'name' }, { header: 'Status', field: 'status' }];
    adapters: Adapter[];
    showAdapterTabs = false;
    selectedAdapter: any = {};

    public active = false;
    public groupActive = false;
    public selection = null;
    public masterView: any = { searchable: false, header: null };
    constructor(
        private appContextService: AppContextService,
        private defaultService: DefaultService) {
    }

    public static helloWorld() {
        return 'Hello world!';
    }

    public ngOnInit(): void {
        const session = this.appContextService.powerShell.createAutomaticSession(this.appContextService.activeConnection.nodeName);
        this.getComputerName();
        this.GetEthernetAdapterList();
    }

    public getComputerName(): void {
        this.defaultService.Get_ComputerName_ps1().subscribe(
            response => {
                this.m_strComputerName = response;
            }
        );
    }

    GetEthernetAdapterList() {
        this.defaultService.Get_Adapters_ps1().subscribe(
            list => {
                this.adapters = list;
            }
        );
    }

    rowClicked() {
        this.showAdapterTabs = true;
        this.selectedAdapter = this.selection;
    }

    public alert(arg: string) {
        alert(arg);
    }

    public ngOnDestroy(): void {
        this.defaultService.m_session.dispose();
    }
}
