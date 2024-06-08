import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  data: any[] = [];

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.datos();
  }

  datos() {
    this.ApiService.getProducts().subscribe((data: any) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
