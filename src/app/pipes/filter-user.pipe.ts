import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../services/user.service';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(users: User[], term: string): User[] {
    if (!users) {
      return []
    };

    return users.filter(user => user.name.toLowerCase().includes(term.toLowerCase()));
  }

}
