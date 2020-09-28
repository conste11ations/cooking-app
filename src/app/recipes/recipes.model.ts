export class Recipe {
  // blueprint for a single Recipe, defines how it should look like
  public name: string;
  public description: string;
  public imagePath: string;
  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
