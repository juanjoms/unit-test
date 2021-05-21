import { of } from "rxjs";
import { AppComponent } from "./app.component";
import { User } from "./services/user.service";

describe('App component', () => {
  let component: AppComponent;
  let mockUserService: any;

  beforeEach(() => {
    mockUserService = {
      getUsers() {
        return of([{name: 'Carlos Cuesta'}])
      }
    };

    component = new AppComponent(mockUserService);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should init component', () => {
    component.ngOnInit();
    expect(component.users).toEqual([{name: 'Carlos Cuesta'}] as User[]);
  });

});
