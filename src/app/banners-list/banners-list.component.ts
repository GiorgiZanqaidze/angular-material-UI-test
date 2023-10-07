import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../api.service";
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-banners-list',
  templateUrl: './banners-list.component.html',
  styleUrls: ['./banners-list.component.css']
})
export class BannersListComponent implements OnInit{

  @ViewChild('paginator', { static: true }) paginator!: MatPaginator;

  constructor(
    private service: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  banners!: any[]
  page!: number
  totalPages!: number



  ngOnInit() {
    this.route.queryParams.subscribe((route :Params) => {
      this.page = +route['page']
      this.service.fetchData(this.page).subscribe((banners: any) => {
        console.log(banners.data)
        this.totalPages = banners.data.total
        this.banners = banners.data.entities
      })
    })
  }


  onPageChange(event: any) {
    console.log(event.length)
    const queryParams = { page: event.pageIndex };
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }

}
