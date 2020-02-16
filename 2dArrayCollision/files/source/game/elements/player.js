class Player extends GameObject
{
  constructor (coords, maze)
  {
    super(coords);

    this.sprite = eve.create.Bitmap('HappyPixel', { x: 0, y: 0 });
    this.addChild(this.sprite);

    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;

    this.maze = maze;
    this.points = [];
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

    this.created = true;
  }

  Update ()
  {
    if (!this.created) return;

    if (this.up) { this.sprite.y -= this.speed; }
    if (this.down) { this.sprite.y += this.speed; }
    if (this.left) { this.sprite.x -= this.speed; }
    if (this.right) { this.sprite.x += this.speed; }

    // Add collision points for the player
    this.points.push({ x: this.sprite.x - 14, y: this.sprite.y - 14, name: 'tl' }); // Top left
    this.points.push({ x: this.sprite.x + 14, y: this.sprite.y - 14, name: 'tr' }); // Top right
    this.points.push({ x: this.sprite.x - 14, y: this.sprite.y + 14, name: 'bl' }); // Bottom left
    this.points.push({ x: this.sprite.x + 14, y: this.sprite.y + 14, name: 'br' }); // Bottom right

    let collision = false;

    // Checking with the maze for collision
    for (let i = 0; i < 4; i += 1) {
      // Get current point
      const point = this.points[i];
      
      // Calculate correct posistion with 0 point of maze
      const x = (point.x + Math.abs(this.maze.xStart)+32)
      const y = (point.y + Math.abs(this.maze.yStart)+32)
      
      // Get corresponding location in the maze
      const a = Math.floor(y / 64);
      const b = Math.floor(x / 64);

      if (this.maze.maze[a][b] === 1 && !collision) {
        console.log(point.name);
        collision = true;

        // Set Player back one step
        if (this.up) { this.sprite.y += this.speed; }
        if (this.down) { this.sprite.y -= this.speed; }
        if (this.left) { this.sprite.x += this.speed; }
        if (this.right) { this.sprite.x -= this.speed; }
      }
    }

    this.points = []
  }
}