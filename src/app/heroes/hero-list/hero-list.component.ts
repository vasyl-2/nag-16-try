import {Component, OnInit} from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../heroes.service";
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit{

  heroes$!: Observable<Hero[]>;
  selectedId = 0;

  constructor(
    private service: HeroesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        // console.log('ALL____PARAMS___________', params.getAll(''))
        console.log('ALL____PARAMS____KEYS_________', params.keys);
        return this.service.getHeroes();
      })
    );
  }
}
