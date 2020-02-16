class Player extends GameObject
{
  constructor (coords)
  {
    super(coords);

    this.sprite = eve.create.Bitmap('HappyPixel', { x: 0, y: 0 });
    this.addChild(this.sprite);
  }
}