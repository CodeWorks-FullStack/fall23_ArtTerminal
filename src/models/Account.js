export class Account {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.picture = data.picture;
    this.bio = data.bio;
    this.coverImg = data.coverImg;
    this.github = data.github;
    this.graduated = data.graduated;

    // TODO add additional properties if needed
  }
}
