import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KarmaPage } from './karma.page';

describe('KarmaPage', () => {
  let component: KarmaPage;
  let fixture: ComponentFixture<KarmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KarmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KarmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
