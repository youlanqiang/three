/**
 * 绘制圆形,圆弧
 */

example5();

function example5():void{

    let canvas: HTMLCanvasElement = document.getElementById('app') as HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;


    ctx.moveTo(200, 200)

    //绘制弧形  arc = 弧  angle = 角度
    //参数 x,y,r,sAngle, eAngle, counterclockwise
    // x,y 圆心坐标
    // r 半径大小
    // (start) sAngle: 绘制开始的角度，圆心到x轴是0度，顺时针方向弧度增大
    // (end) eAngle: 结束的角度，是弧度
    // counterclockwise: 是否为逆时针,true为逆,false为顺 默认为false
    // 弧度和角度的转换公式: rad = deg*Math.PI/180
    // ctx.arc(200,200,100, 0, 90*Math.PI/180, true)
    // ctx.closePath();
    // ctx.fill();
    // ctx.stroke();

    //绘制扇形
    ctx.moveTo(200, 200); //确定中心点
    ctx.fillStyle = 'red' //填充颜色
    ctx.arc(200, 200, 100, -90*Math.PI/180, -30*Math.PI/180)
    ctx.fill();


}
