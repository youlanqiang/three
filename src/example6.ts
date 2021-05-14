/**
 * 绘制文字
 */
example6()

function example6():void{

    let canvas: HTMLCanvasElement = document.getElementById('app') as HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

    ctx.moveTo(300, 300);
    ctx.fillStyle = "purple";    // 设置填充颜色为紫色
    ctx.font = '20px "微软雅黑"'; // 设置字体
    ctx.textBaseline = "bottom"; //设置字体对齐方式
    ctx.textAlign = "left"; //align = 对齐
    ctx.fillText("Top-g", 100,300); //填充文字,并填色
    ctx.strokeText("Top-g",200, 300); //绘制文字,但不填色

    //ctx.measureText("xxx")//返回包含指定文本的宽度  measure 测量

}
