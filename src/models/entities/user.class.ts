export class User {
  constructor(
    public login: string,
    public requestedFriends: User[] = [],
    public friends: User[] = []
  ) {}

  static createEmpty():User{
    return new User('');
  }
}
