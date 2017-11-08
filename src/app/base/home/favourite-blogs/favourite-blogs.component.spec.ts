import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteBlogsComponent } from './favourite-blogs.component';

describe('FavouriteBlogsComponent', () => {
  let component: FavouriteBlogsComponent;
  let fixture: ComponentFixture<FavouriteBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
