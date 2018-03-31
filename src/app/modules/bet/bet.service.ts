import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as randomJs from 'random-js';
import * as provable from 'provable/dist/provable.min.js';

@Injectable()
export class BetService {

  hash: BehaviorSubject<string>;
  winningNumber: BehaviorSubject<number>;
  hashEngine;
  numberEngine;

  constructor() {
    this.initEngines();
    this.hash = new BehaviorSubject(this.getNextHash());
    this.winningNumber = new BehaviorSubject(this.generateNextNumber());
  }

  getNextHash() {
    try {
      // if run out of hashes, create new engines

      return this.hashEngine.next();
    } catch (e) {
      this.initEngines();
      return this.getNextHash();
    }
  }

  nextTick() {
    this.hash.next(this.getNextHash());
    this.winningNumber.next(this.generateNextNumber());
  }

  initEngines() {
    this.hashEngine = provable({ count: 100 });
    this.numberEngine = randomJs(this.hashEngine);
  }

  generateNextNumber() {
    return this.numberEngine.integer(1, 100);
  }
}
