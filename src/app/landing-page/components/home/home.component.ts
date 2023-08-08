import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userEmail!: string;

  constructor() {}

  ngOnInit(): void {}
  onSubscribe(emailForm: NgForm) {
    console.log(emailForm.value);
  }
}
