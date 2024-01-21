import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  id: string | null = null;
  subscriptions = new Subscription();
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscriptions.add(
        this.route.paramMap.subscribe(params => {
          this.id = params.get('id');
        }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }
}
