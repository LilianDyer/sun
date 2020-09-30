import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockComponent } from 'ng-mocks';
import { MaterialModule } from '../../material.module';
import { ClassicQuotesService } from '../../shared/services/quotes/classic-quotes.service';
import { QuotesDetailsComponent } from '../quotes-details/quotes-details.component';
import { Quote } from '../../shared/interfaces/quote.interface';

import { QuotesComponent } from './quotes.component';

describe('QuotesComponent', () => {
  let component: QuotesComponent;
  let fixture: ComponentFixture<QuotesComponent>;
  let quotesService: jest.Mocked<ClassicQuotesService>;
  let selectedQuote: Quote;
  let quotes: Quote[];
  
  beforeEach(() => {
    quotes = [{
      id: 1,
      quote: 'Spring...It is the sun shinning on the rain and the rain falling on the sunshine...',
      author: 'Frances H. Burnett',
      book: 'The Secret Garden',
      favorite: false
    }]
    
    quotesService = {
    getAll: jest.fn().mockReturnValue(quotes) as Function,
    } as jest.Mocked<ClassicQuotesService>;
 
    TestBed.configureTestingModule({
      declarations: [QuotesComponent, MockComponent(QuotesDetailsComponent)],
      providers: [{ provide: ClassicQuotesService, useValue: quotesService }],
      imports: [MaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(QuotesComponent);
    component = fixture.componentInstance;
    component.quotes = quotes;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the selected quote', () => {
    component.selectQuote(quotes[0]);
    expect(component.selectedQuote).toEqual(quotes[0]);
  });

  it('should cancel the selected quote', () => {
    component.selectQuote(quotes[0]);
    component.cancelQuote();
    expect(component.selectedQuote).toEqual({
      id: null,
      quote: '',
      author: '',
      book: '',
      favorite: false
    });
  });

  it('should display book title', () => {
    const el = fixture.debugElement.nativeElement;
    const content = el.querySelector('h3');
    expect(content.innerHTML).toContain(quotes[0].book);
  });
  it('should display quote', () => {
    const el = fixture.debugElement.nativeElement;
    const content = el.querySelector('p');
    expect(content.innerHTML).toContain(quotes[0].quote);
  });
});
