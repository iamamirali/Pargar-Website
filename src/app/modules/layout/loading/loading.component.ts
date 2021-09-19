import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  isLoading : boolean | undefined;
  obs : Subscription | undefined

  constructor(private loading : LoadingService) { }

  ngOnInit(): void {
    this.getLoadingData()
  }

  getLoadingData() {
    this.obs = this.loading.subjectLoader.subscribe((loading) => {
      this.isLoading = loading
    })
  }

  ngOnDestroy() {
    this.obs?.unsubscribe()
  }
}
