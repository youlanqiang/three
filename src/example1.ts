/**
 * canvas的入门
 */

console.log("start")
example1();''

function example1(): void {
//第一步拿到 canvas的标签
// @ts-ignore
    let canvas: HTMLCanvasElement = document.getElementById('app') as HTMLCanvasElement
    canvas.style.border = '1px solid red'
    canvas.width = 500


//第二步拿到 canvas的上下文
// @ts-ignore
    let ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D

//第三步开始绘制
    ctx.moveTo(100, 100) //移动画笔
    ctx.lineTo(200, 100) //画一条直线到点(200,100)
    ctx.lineTo(100, 200)
    ctx.closePath() //闭合路径 ctx.lineTo(100, 100)

    ctx.lineWidth = 4; //线宽
    ctx.strokeStyle = 'red' //设置描边样式
    ctx.stroke() //stroke 描边

    ctx.fillStyle = 'orange' //填充颜色
    ctx.fill() //填充
}
