class World
{
    constructor()
    {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.water = new Water(0,this.canvas.height/2,this.canvas.width, this.canvas.height/2);
        this.ground = new Ground(0,0,this.canvas.width, this.canvas.height/2);
    }

    draw()
    {
        this.water.draw(this.ctx);
        this.ground.draw(this.ctx)
    }
}