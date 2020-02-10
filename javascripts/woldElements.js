class Ground
{
    constructor(x,y,w,h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw(ctx)
    {
        new Rectangle(this.x,this.y,this.w, this.h, "#49dc60").draw(ctx);
    }
}

class Water
{
    constructor(x,y,w,h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw(ctx)
    {
        new Rectangle(this.x,this.y,this.w, this.h, "#23a6dc").draw(ctx);
    }
}