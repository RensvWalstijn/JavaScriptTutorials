class Maze extends GameObject
{
  constructor (coords, maze)
  {
    super(coords);
  
    this.walls = [];

    const size = 64;

    const maxI = maze.length;
    const maxJ = maze[0].length;

    this.xStart = -size * maxI / 2 + size / 2;
    this.yStart = -size * maxJ / 2 + size / 2;

    this.maze = maze;

    // Locate maze
    for (let i = 0; i < maxI; i += 1) {
      for (let j = 0; j < maxJ; j += 1) {
        const nr = maze[i][j];
        if (nr === 1) {
          this.walls.push(new Wall({
            x: this.xStart + j * size,
            y: this.yStart + i * size,
          }));
        }
      }
    }

    // Add maze 
    const maxW = this.walls.length;
    for (let i = 0; i < maxW; i += 1) {
      const wall = this.walls[i];
      this.addChild(wall);
    }
  }
}