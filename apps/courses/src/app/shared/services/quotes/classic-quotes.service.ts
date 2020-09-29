import { Quote } from '../../interfaces/quote.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassicQuotesService {
  quotes: Quote[] = [
    {
      id: 1,
      quote: '"Is the spring coming?" he said. "What is it like?"..."It is the sun shinning on the rain and the rain falling on the sunshine..."',
      author: 'Frances Hodgson Burnett',
      book: 'The Secret Garden',
      favorite: true
    },
    {
      id: 2,
      quote: 'My meaning simply is, that whatever I have tried to do in life, I have tried with all my heart to do well; that whatever I have devoted myself to, I have devoted myself to completely; that in great aims and in small, I have always been thoroughly in ernest.',
      author: 'Charles Dickens',
      book: 'David Copperfield',
      favorite: false
    },
    {
      id: 3,
      quote: 'When you re-read a classic you do not see in the book more than you did before. You see more in you than there was before.',
      author: 'Clifton Fadiman',
      book: 'Any Number Can Play',
      favorite: false
    },
    {
      id: 4,
      quote: 'Countless words count less than the silent balance between yin and yang.',
      author: 'Lao Tzu',
      book: 'Tao Te Ching',
      favorite: true
    },
    {
      id: 5,
      quote: 'If any man cannot feel the power of God when he looks upon the stars, then I doubt whether he is capable of any feeling at all.',
      author: 'Horace',
      book: 'Ancient Rome',
      favorite: true
    },
    {
      id: 6,
      quote: 'He never went out without a book under his arm, and he often came back with two.',
      author: 'Victor Hugo',
      book: 'Les Miserables',
      favorite: true
    },
    {
      id: 7,
      quote: 'There is nothing like a dream to create the future.',
      author: 'Victor Hugo',
      book: 'Los Miserables',
      favorite: true
    },
    {
      id: 8,
      quote: 'A man is not idle because he is absorbed in thought. There is visible labor and there is invisible labor',
      author: 'Victor Hugo',
      book: 'Les Miserables',
      favorite: false
    },
    {
      id: 9,
      quote: 'I think... if it is true that there are as many minds as there are heads, then there are as many kinds of love as there are hearts.',
      author: 'Leo Tolstoy',
      book: 'Anna Karenina',
      favorite: true
    },
    {
      id: 10,
      quote: 'Life starts all over again when it gets crisp in the fall.',
      author: 'Francis Scott Fitzgerald',
      book: 'The Great Gatsby',
      favorite: false
    }
  ]
  constructor() { }
  getAll() {
    return this.quotes;
  }

  find(quoteId: number) {
    return this.quotes.find(c => c.id === quoteId);
  }

}
