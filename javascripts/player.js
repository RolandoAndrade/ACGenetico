const BASE_TIME_TO_LIVE = 10;
const BASIC_SIZE = 5;

class Basic
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.speed = 0;
        this.fins = 0;
        this.legs = 0;
        this.eyes = 0;
        this.lungs = 0; //gills = 1 - lungs
        this.red = 0;
        this.blue = 0;
        this.green = 0;
        this.timeToLive = BASE_TIME_TO_LIVE;
    }

    draw(ctx, color = "#8e8e8e")
    {
        new Circle(this.x, this.y,BASIC_SIZE, color).draw(ctx);
    }
}

class FishBlink extends Basic
{
    draw(ctx, color = "#8e8e8e")
    {
        super.draw(ctx, color);
        new Circle(this.x+BASIC_SIZE, this.y,BASIC_SIZE/2,color).draw(ctx);
        new Circle(this.x-BASIC_SIZE, this.y,BASIC_SIZE/2,color).draw(ctx);
    }
}

class Fish extends FishBlink
{
    draw(ctx, color = "#c6755e")
    {
        super.draw(ctx, color);
    }
}