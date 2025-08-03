import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import  Persons from '../../../assets/data/persons.json'

interface Person {
  firstName: string;
  lastName: string;
  image: string;
  age: number;
}

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './persons.html',
  styleUrls: ['./persons.scss']
})
export class PersonsComponent implements OnInit {
  persons = Persons;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }
}
