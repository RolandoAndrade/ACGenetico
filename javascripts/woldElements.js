const ELEMENTS_FONT_SIZE=15;

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
        new CanvasText("TIERRA", this.x + this.w/2, this.y + this.h / 2 + ELEMENTS_FONT_SIZE, ELEMENTS_FONT_SIZE,'white').draw(ctx)
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
        new CanvasText("AGUA", this.x + this.w/2,this.y + this.h / 2 + ELEMENTS_FONT_SIZE, ELEMENTS_FONT_SIZE,'white').draw(ctx);
    }
}