/**
 * 使用canvas绘制一个网格
 */

example2()

function example2():void{

    let canvas:HTMLCanvasElement =  document.getElementById('app') as HTMLCanvasElement
    let ctx:CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D

    canvas.width = 500
    canvas.height = 500
    canvas.style.border = '1px solid #000'

    //绘制表格
    //第一步绘制横线
    let rectH:number = 10

    for (let i = 0; i < canvas.width/rectH; i++) {

        //绘制横线
        ctx.moveTo(0, i * rectH) //如果不设置moveTo,当前画笔没有位置
        ctx.lineTo(canvas.width, i * rectH)

        //绘制竖线
        ctx.moveTo(i * rectH, 0)
        ctx.lineTo(i*rectH, canvas.height)
    }
    ctx.stroke()

    ctx.beginPath() //开始绘制新的路径，可以修改ctx的样式

    //绘制y轴
    ctx.moveTo(200, 300)
    ctx.lineTo(200, 200)

    //这一步绘制y轴的箭头
    ctx.moveTo(190,210)
    ctx.lineTo(200,200)
    ctx.moveTo(210,210)
    ctx.lineTo(200,200)

    //绘制x轴
    ctx.moveTo(300, 300)
    ctx.lineTo(200,300)

    //绘制x轴的箭头
    ctx.moveTo(290, 290)
    ctx.lineTo(300, 300)
    ctx.moveTo(290, 310)
    ctx.lineTo(300, 300)

    ctx.lineWidth = 4
    ctx.strokeStyle = 'red'
    ctx.stroke()



}
