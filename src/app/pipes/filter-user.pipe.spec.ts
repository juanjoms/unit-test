import { User } from '../services/user.service';
import { FilterUserPipe } from './filter-user.pipe';

describe('FilterUserPipe', () => {
  let pipe: FilterUserPipe;
  beforeEach(() => {
    pipe = new FilterUserPipe();
  });


  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter users matching term', () => {
    const mockUsers = [
      {name: 'Carlos Cuesta'},
      {name: 'Karla Ruiz'},
      {name: 'Oswaldo Lopez'}
    ] as User[];

    const filteredUsers =  pipe.transform(mockUsers, 'o');
    expect(filteredUsers).toEqual([
      {name: 'Carlos Cuesta'},
      {name: 'Oswaldo Lopez'}
    ] as User[]);
  });

  it('should filter users, when users is undefined should return empty array', () => {

    const filteredUsers =  pipe.transform(undefined, 'o');
    expect(filteredUsers).toEqual([]);
  });

});
