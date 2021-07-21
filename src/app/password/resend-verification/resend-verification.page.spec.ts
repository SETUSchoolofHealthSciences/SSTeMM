import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResendVerificationPage } from './resend-verification.page';

describe('ResendVerificationPage', () => {
  let component: ResendVerificationPage;
  let fixture: ComponentFixture<ResendVerificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResendVerificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResendVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
