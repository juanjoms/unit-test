import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { User, UserService } from './services/user.service';
import { of } from 'rxjs';
import { FilterUserPipe } from './pipes/filter-user.pipe';

describe('AppComponent', () => {
  beforeEach(async () => {
    class MockUserService {
      getUsers() {
        return of([{name: 'Carlos Cuesta'}])
      }
    }
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FilterUserPipe
      ],
      providers: [
        {provide: UserService, useClass: MockUserService}
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should init component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.users).toEqual([{name: 'Carlos Cuesta'}] as User[]);
  });

});
