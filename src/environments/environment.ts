// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    // api: 'http://192.168.1.13/V1',
    // api: 'https://apiteste.eloverde.com.br/V1',
    // api: 'https://apitransporter.eloverde.com.br/V1',
    // api: 'https://api.eloverde.com.br/V1',
    // api: 'https://apiappteste.eloverde.com.br/V1',
    api: 'http://127.0.0.1:8000/V1',
    version: '1.5.9',
    oneSignalKey: '360db572-e36c-4663-913b-8f7372da47a9'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
