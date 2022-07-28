import { Injectable } from '@angular/core';
import { AppContextService } from '@microsoft/windows-admin-center-sdk/angular';
import { PowerShell, PowerShellSession } from '@microsoft/windows-admin-center-sdk/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PowerShellScripts } from '../../generated/powershell-scripts';

@Injectable({
    providedIn: 'root'
})
export class DefaultService {

    m_session: PowerShellSession;

    constructor(private appContextService: AppContextService) { }


    public Get_ComputerName_ps1(): Observable<any> {
        const script = PowerShell.createScript(PowerShellScripts.Get_ComputerName.script);
        return this.getPowerShellResponse(script);
    }

    public Get_Adapters_ps1(): Observable<any> {
        const script = PowerShell.createScript(PowerShellScripts.Get_Adapters.script);
        return this.getPowerShellResponse(script);
    }

    private getPowerShellResponse(script): Observable<any> {
        this.m_session = this.appContextService.powerShell.createSession(this.appContextService.activeConnection.nodeName);
        return this.appContextService.powerShell.run(this.m_session, script).pipe(
            map(
                (response: { results: any; }) => {
                    console.log(response);
                    if (response && response.results) {
                        return response.results;
                    }
                    return 'no response';
                }
            )
        );
    }

}