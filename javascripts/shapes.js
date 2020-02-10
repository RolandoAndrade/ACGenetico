class Shape
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    setPosition(x,y)
    {
        this.x = x;
        this.y = y;
    }
}

class Line
{
    constructor(startX, startY, endX, endY, color = "#424242", strokeWidth = 1, lineDash = [])
    {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.color = color;
        this.strokeWidth = strokeWidth;
        this.lineDash = lineDash;
    }

    draw(ctx)
    {
        ctx.setLineDash(this.lineDash);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.strokeWidth;
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(this.endX, this.endY);
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);
    }

}

class RectangleRounded extends Shape
{
    constructor(x,y, width, height, fillColor = null, borderColor = null, borderRadius = 0, strokeWidth = 1, lineDash = [])
    {
        super(x, y);
        this.DEFAULT_COLOR = "rgba(0,0,0,0)";
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.fillColor = fillColor||this.DEFAULT_COLOR;
        this.borderColor = borderColor||this.fillColor;
        this.borderRadius = borderRadius;
        this.strokeWidth = strokeWidth;
        this.lineDash = lineDash;
    }

    draw(ctx)
    {
        ctx.setLineDash(this.lineDash);
        ctx.strokeStyle = this.borderColor;
        ctx.fillStyle = this.fillColor;
        ctx.lineWidth = this.strokeWidth;
        ctx.beginPath();
        ctx.moveTo(this.x + this.borderRadius, this.y);
        ctx.lineTo(this.x + this.width - this.borderRadius, this.y);
        ctx.quadraticCurveTo(this.x + this.width, this.y, this.x + this.width, this.y + this.borderRadius);
        ctx.lineTo(this.x + this.width, this.y + this.height - this.borderRadius);
        ctx.quadraticCurveTo(this.x + this.width, this.y + this.height, this.x + this.width - this.borderRadius, this.y + this.height);
        ctx.lineTo(this.x + this.borderRadius, this.y + this.height);
        ctx.quadraticCurveTo(this.x, this.y + this.height, this.x, this.y + this.height - this.borderRadius);
        ctx.lineTo(this.x, this.y + this.borderRadius);
        ctx.quadraticCurveTo(this.x, this.y, this.x + this.borderRadius, this.y);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        ctx.setLineDash([]);
    }

    move(dx, dy)
    {
        this.x += dx;
        this.y += dy;
    }

    contains(x,y)
    {
        return this.x<=x&&x<=this.x+this.width&&this.y<=y&&y<=this.y+this.height;
    }
}

class CanvasText extends Shape
{
    constructor(text, x, y, fontSize, fontColor, lineHeight, maxWidth, align = "center")
    {
        super(x, y);
        this.text = text;
        this.x = x;
        this.y = y;
        this.width = maxWidth;
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.lineHeight = lineHeight;
        this.align = align;
    }

    draw(ctx)
    {
        let words = this.text.split("_");
        let line = "";
        let y = this.y;
        ctx.textAlign = this.align;
        ctx.font = this.fontSize+"px Arial";
        ctx.fillStyle = this.fontColor;
        for (let n = 0; n < words.length; n++)
        {
            let testLine = line + words[n] + '_';
            let metrics = ctx.measureText(testLine);
            let testWidth = metrics.width;
            if (testWidth > this.width && n > 0)
            {
                ctx.fillText(line, this.x, y);
                line = words[n] + ' ';
                y += this.lineHeight;
            }
            else
            {
                line = testLine;
            }
        }
        ctx.fillText(line.substr(0, line.length-1), this.x, y);
    }

    move(dx, dy)
    {
        this.x += dx;
        this.y += dy;
    }
}

class Circle extends Shape
{
    constructor(x,y,radius, fillColor)
    {
        super(x, y);
        this.DEFAULT_COLOR = "#FFF";
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.fillColor = fillColor||this.DEFAULT_COLOR;
    }

    draw(ctx)
    {
        ctx.fillStyle = this.fillColor;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0, 2*Math.PI,false);
        ctx.closePath();
        ctx.fill();
    }

    move(dx, dy)
    {
        this.x += dx;
        this.y += dy;
    }

    contains(x,y)
    {
        return (this.x-x)**2+(this.y-y)**2<=this.radius**2;
    }
}

class Rect extends Shape
{
    constructor(x, y, w, h, fillColor, strokeColor = null, strokeWidth = 1, lineDash = [])
    {
        super(x, y);
        this.w = w;
        this.h = h;
        this.color = fillColor;
        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;
        this.lineDash = lineDash;
    }

    draw(ctx)
    {
        ctx.setLineDash(this.lineDash);
        ctx.strokeStyle = this.strokeColor;
        ctx.fillStyle = this.color;
        ctx.lineWidth = this.strokeWidth;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
}
