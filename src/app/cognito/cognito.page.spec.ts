import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CognitoPage } from './cognito.page';

describe('CognitoPage', () => {
  let component: CognitoPage;
  let fixture: ComponentFixture<CognitoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CognitoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CognitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
