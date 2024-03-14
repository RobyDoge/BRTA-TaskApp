import { Component, OnInit } from '@angular/core';
import { Status } from '../status';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule,MatButton],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {
  ngOnInit(): void {
    // Implement initialization logic here
    console.log('FilterComponent initialized');
  }	
  statuses = Object.values(Status);
} 
  
