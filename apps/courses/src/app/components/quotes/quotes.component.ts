import { Quote } from '../../shared/interfaces/quote.interface';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClassicQuotesService } from '../../shared/services/quotes/classic-quotes.service';

@Component({
  selector: 'sun-quotes',
  templateUrl: './quotes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuotesComponent implements OnInit {
  title = 'Classic Quotes';

  selectedQuote = null;
  quotes = null;
  constructor(private quotesService: ClassicQuotesService) {}

  ngOnInit(): void {
    this.resetSelectedQuote();
    this.quotes = this.quotesService.getAll();
  }

  resetSelectedQuote() {
    const clearQuote: Quote = {
      id: null,
      book: '',
      quote: '',
      author: '',
      favorite: false,
    };
    this.selectedQuote = clearQuote;
  }

  selectQuote(quote: Quote) {
    this.selectedQuote = quote;
  }

  cancelQuote() {
    this.resetSelectedQuote();
  }
  saveQuote() {
    console.log('saving...');
  }

  deleteQuote(quoteId) {
    console.log('deleting...' + quoteId);
  }
}
