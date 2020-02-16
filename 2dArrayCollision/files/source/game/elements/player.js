class Player extends GameObject
{
  constructor (coords)
  {
    super(coords);

    this.sprite = eve.create.Bitmap('HappyPixel', { x: 0, y: 0 });
    this.addChild(this.sprite);

    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;

    this.speed = 4;

    // Simple movement
    window.addEventListener('keydown', (event) => {
      if (
        this.right == true ||
        this.left == true ||
        this.down == true ||
        this.up == true 
      ) return;

      if (event.keyCode == 40) {
        this.down = true;
      }
      if (event.keyCode == 37) {
        this.left = true;
      }
      if (event.keyCode == 38) {
        this.up = true;
      }
      if (event.keyCode == 39) {
        this.right = true;
      }
    })

    window.addEventListener('keyup', (event) => {
      if (event.keyCode == 40) {
        this.down = false;
      }
      if (event.keyCode == 37) {
        this.left = false;
      }
      if (event.keyCode == 38) {
        this.up = false;
      }
      if (event.keyCode == 39) {
        this.right = false;
      }
    })
  }

  Update ()
  {
    if (this.up) { this.y -= this.speed; }
    if (this.down) { this.y += this.speed; }
    if (this.left) { this.x -= this.speed; }
    if (this.right) { this.x += this.speed; }
  }
}