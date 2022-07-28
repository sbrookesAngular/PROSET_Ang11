
import { Config } from './common/config';

export function gulpConfig(): Config {
    return {
        resjson: {
            resourceName: 'MicrosoftHciSnapInDemo',
            localeOffset: 0,
            localePath: 'loc'
        },
        powershell: {
            name: 'microsoft.hci.snap-in-demo',
            guid: '23c976bf-ac9b-4309-a0bd-c8cd08175c12',
            list: [
                'src',
                'node_modules/@microsoft/windows-admin-center-sdk'
            ],
            enablePester: false,
            skipCim: true
        }
    };
}


