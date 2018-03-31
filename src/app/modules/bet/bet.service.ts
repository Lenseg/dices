import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { randomJs } from 'random-js';
import { provable } from 'provable';

@Injectable()
export class BetService {

  hash: BehaviorSubject<string>;
  winningNumber: BehaviorSubject<number>;
  hashEngine;
  numberEngine;

  constructor() {
    this.nextTick();
  }

  getNextHash() {
    try {
      return this.hashEngine();
    } catch (e) {
      this.initEngines();
      return this.getNextHash();
    }
  }

  nextTick() {
    this.hash = new BehaviorSubject(this.getNextHash());
    this.winningNumber = new BehaviorSubject(this.generateNextNumber());
  }

  initEngines() {
    this.hashEngine = provable({ count: 100 });
    this.numberEngine = randomJs(this.hashEngine);
  }

  generateNextNumber() {
    return randomJs.integer(1, 100);
  }
}
