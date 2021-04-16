/**
 * 绘制矩形
 */

example4();

function example4():void{

    let canvas: HTMLCanvasElement = document.getElementById('app') as HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.style.border = '1px solid red'

    // 参数依次是 x,y,宽,高
    ctx.rect(100,100,200,200); //rectangle 矩形
    ctx.stroke();

    ctx.strokeRect(200,200, 20, 20);// == rect() stroke() 2行代码合一

    //ctx.fillRect() 填充矩形

    //ctx.clearRect() 清除矩形类绘制的图形
}
