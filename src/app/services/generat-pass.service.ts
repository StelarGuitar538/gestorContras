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


const Cryptor = require("@swiftyapp/cryptor");

const cryptor = new Cryptor("secretpassword");

const encrypted = cryptor.encrypt("some sensitive data");
console.log(encrypted); // 79e103b37586b83002e92cc9...

const decrypted = cryptor.decrypt(encrypted);
console.log(decrypted); // some sensitive data
