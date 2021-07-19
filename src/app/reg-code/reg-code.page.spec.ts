import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegCodePage } from './reg-code.page';

describe('RegCodePage', () => {
  let component: RegCodePage;
  let fixture: ComponentFixture<RegCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
