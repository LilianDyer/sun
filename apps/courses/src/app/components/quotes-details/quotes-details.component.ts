import { Quote } from '../../shared/interfaces/quote.interface';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'sun-quotes-details',
  templateUrl: './quotes-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuotesDetailsComponent implements OnInit {
  @Input()
  selectedQuote: Quote;

  @Output()
  quoteCancelled = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  saveQuote() {
    console.log('saving...');
  }

  cancelQuote() {
    this.quoteCancelled.emit();
  }
}
