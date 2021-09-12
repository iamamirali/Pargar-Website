import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  isLoading : boolean | undefined;

  constructor(private loading : LoadingService) { }

  ngOnInit(): void {
    this.loading.subjectLoader.subscribe((loading) => {
      this.isLoading = loading
    })
  }
}
