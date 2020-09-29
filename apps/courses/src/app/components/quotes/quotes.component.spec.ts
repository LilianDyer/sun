import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { MaterialModule } from '../../material.module';
import { ClassicQuotesService } from '../../shared/services/quotes/classic-quotes.service';
import { QuotesDetailsComponent } from '../quotes-details/quotes-details.component';

import { QuotesComponent } from './quotes.component';

describe('QuotesComponent', () => {
  let component: QuotesComponent;
  let fixture: ComponentFixture<QuotesComponent>;
  let quotesService: jest.Mocked<ClassicQuotesService>;
  
  quotesService = {
    getAll: jest.fn() as Function
  } as jest.Mocked<ClassicQuotesService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesComponent, MockComponent(QuotesDetailsComponent) ],
      imports: [MaterialModule],
      providers: [
        { provide: ClassicQuotesService, useValue: quotesService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
