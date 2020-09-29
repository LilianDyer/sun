import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

import { QuotesDetailsComponent } from './quotes-details.component';

describe('ClassicQuotesComponent', () => {
  let component: QuotesDetailsComponent;
  let fixture: ComponentFixture<QuotesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesDetailsComponent ],
      imports: [MaterialModule, FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
