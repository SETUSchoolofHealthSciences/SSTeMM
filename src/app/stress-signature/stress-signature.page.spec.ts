import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StressSignaturePage } from './stress-signature.page';

describe('StressSignaturePage', () => {
  let component: StressSignaturePage;
  let fixture: ComponentFixture<StressSignaturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StressSignaturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StressSignaturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
