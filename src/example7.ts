/**
 * canvas绘制图片
 */


example7()

function example7():void{
    let canvas: HTMLCanvasElement = document.getElementById('app') as HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.style.border = '1px solid red'
    canvas.width = 500

    //第一步 创建图片的dom对象
    let img:HTMLImageElement = new Image() 

}
