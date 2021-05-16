/**
 * canvas绘制图片
 */


index()

function index():void{
    console.log('hello')
    let canvas: HTMLCanvasElement = document.getElementById('app') as HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.style.border = '1px solid red'
    canvas.width = 500
    canvas.height = 500

    //第一步 创建图片的dom对象
    let img:HTMLImageElement = new Image()
    img.src = require('./images/th.jpeg').default
    img.onload = ()=>{
        //图片加载完成之后将图片绘制到canvas上
        ctx.drawImage(img, 100, 100)

        for(let i = 0; i < 10; i++){
            ctx.drawImage(img , 100+20*i, 100+i*20, 20, 20)

            //保持图片的宽高比
            let ow = img.width
            let oh = img.height
            ctx.drawImage(img, 100, 100, 400, 400*oh/ow);
        }


        //图片的裁剪
        // sx,sy 裁剪图片的左上角坐标
        // swidth: 裁剪图片的宽度, sheight: 裁剪图片的高度
        ctx.drawImage(img, 100, 100, 100, 100, 100, 100, 100, 100)
    }
}
