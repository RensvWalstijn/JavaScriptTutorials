class Wall extends GameObject
{
  constructor (coords)
  {
    super(coords);

    this.sprite = eve.create.SpriteSheet('MadPixel', 2, 1, 2, 0.25, true);
    this.addChild(this.sprite);
  }
}