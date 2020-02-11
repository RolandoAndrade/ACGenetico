const POPULATION = 100;

class WorldGenerator
{
    getStartGeneration(minX,minY,maxX,maxY)
    {
        let p = [];
        for (let i = 0; i < POPULATION; i++)
        {
            let x = Math.floor(Math.random()*(maxX-minX))+minX;
            let y = Math.floor(Math.random()*(maxY-minY))+minY;
            p.push(new Fish(x,y));
        }
        return p;
    }
}


class World
{
    constructor()
    {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.water = new Water(0,this.canvas.height/2,this.canvas.width, this.canvas.height/2);
        this.ground = new Ground(0,0,this.canvas.width, this.canvas.height/2);
        this.worldGenerator = new WorldGenerator();
        this.players = this.worldGenerator.getStartGeneration(0,0,this.canvas.width,this.canvas.height);
    }

    draw()
    {
        this.water.draw(this.ctx);
        this.ground.draw(this.ctx);
        this.players.forEach((i)=>
        {
            i.draw(this.ctx);
        })
    }
}