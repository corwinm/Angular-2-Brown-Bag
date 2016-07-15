/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MovieResultsComponent } from './movie-results.component';

describe('Component: MovieResults', () => {
  it('should create an instance', () => {
    let component = new MovieResultsComponent();
    expect(component).toBeTruthy();
  });
});
