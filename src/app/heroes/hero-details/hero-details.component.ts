import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";

import {HeroesService} from "../heroes.service";
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  hero$!: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroesService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.hero$ = this.service.getHero(id);


    // TODO uncomment if component can be re-used. For now only going back and choose next hero is available not switching between heroes directly
    //  Use the observable paramMap approach if there's a possibility that the router could re-use the component

    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getHero(params.get('id')!))
    // );
  }


  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

}
