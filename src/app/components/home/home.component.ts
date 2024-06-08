import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],  
})
export class HomeComponent implements OnInit {
  data: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.datos();
  }

  datos() {
    this.apiService.getProducts().subscribe((data: any) => {
      this.data = data;
    });
  }
}
