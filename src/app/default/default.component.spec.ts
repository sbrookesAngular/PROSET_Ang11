// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { AppContextService } from '@microsoft/windows-admin-center-sdk/angular';
// import { Subject } from 'rxjs';
// import { DefaultService } from '../default/default.service';
// import { DefaultComponent } from './default.component';

// describe('DefaultComponent', () => {
//     let fixture: ComponentFixture<DefaultComponent>;
//     const HELLO_WORLD = 'Hello world!';
//     let defaultComponentInstance: DefaultComponent;
//     let subject = new Subject();
//     let spyDefaultService: jasmine.SpyObj<DefaultService>;
//     spyDefaultService = jasmine.createSpyObj('DefaultService', ['Get_ComputerName_ps1']);
//     spyDefaultService.Get_ComputerName_ps1.and.returnValue(subject.asObservable());

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [DefaultComponent
//             ],
//             providers: [
//                 { provide: DefaultService, useValue: spyDefaultService },
//                 { provide: AppContextService }
//             ],
//             schemas: [CUSTOM_ELEMENTS_SCHEMA]
//         }).compileComponents().then(() => {
//             fixture = TestBed.createComponent(DefaultComponent);
//             defaultComponentInstance = fixture.componentInstance;

//         }
//         );

//     }));

//     afterEach(() => {
//         subject = null;
//     });


//     it('should create the Default Component', () => {
//         fixture = TestBed.createComponent(DefaultComponent);
//         const app = fixture.debugElement.componentInstance;
//         expect(app).toBeTruthy();
//     });


//     it('says hello', () => {
//         expect(DefaultComponent.helloWorld())
//             .toEqual(HELLO_WORLD);
//     });



// });
