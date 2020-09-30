import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { QuotesDetailsComponent } from './quotes-details.component';

describe('QuotesDetailsComponent', () => {
  let component: QuotesDetailsComponent;
  let fixture: ComponentFixture<QuotesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MaterialModule, BrowserAnimationsModule],
      declarations: [QuotesDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesDetailsComponent);
    component = fixture.componentInstance;
    component.selectedQuote = {} as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
