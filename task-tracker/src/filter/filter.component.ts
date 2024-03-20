import { Component, EventEmitter, OnInit,Output } from '@angular/core';
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
  }	
  statuses = Object.values(Status);
  
  selectStatus(status: Status): void {
    this.statusSelected.emit(status)
  }

  @Output() statusSelected: EventEmitter<Status> = new EventEmitter();
} 
  
