import { Component, OnDestroy } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Card } from '../../components/card/card';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
})
export class Home implements OnDestroy{
  ngOnDestroy(): void {
    sessionStorage.clear();
  }
}
