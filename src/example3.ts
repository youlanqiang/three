/**
 * 绘制2条不同样式的线
 */

example3();


function example3(): void {

    let canvas: HTMLCanvasElement = document.getElementById('app') as HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

    canvas.height = 500;
    canvas.width = 500;
    canvas.style.border = '1px solid #000'

    ctx.beginPath(); //没有必要的
    ctx.moveTo(100, 100);
    ctx.lineTo(300, 100);
    ctx.stroke(); //画线

    ctx.beginPath(); //开启了一个新状态，开始绘制新状态的绘图
                     //新状态可以继承之前状态的样式，但是当前状态设置的样式，只能作用于当前的状态
    ctx.strokeStyle = 'green';
    ctx.moveTo(100, 200);
    ctx.lineTo(300, 200);
    ctx.stroke();

}
