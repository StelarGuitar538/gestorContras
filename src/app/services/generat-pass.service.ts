import { Injectable } from '@angular/core';
import * as generator from 'generate-password';

@Injectable({
  providedIn: 'root'
})
export class GeneratPassService {

  constructor() { }

  generatePass(length = 16) {
    generator.generate({
      length,
      symbols: true,
    })
  }
}
