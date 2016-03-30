module game {


}

var humanContainer = new render.DisplayObjectContainer();
var head = new render.Bitmap();
var trunk = new render.Bitmap();
var left_leg = new render.Bitmap();
var right_leg = new render.Bitmap();
var left_arm = new render.Bitmap();
var right_arm = new render.Bitmap();

head.source = "wander-icon.jpg";
humanContainer.addChild(head)

var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["wander-icon.jpg"]);


class HumanBody extends Body {


    onTicker(duringTime: number) {

        // this.x = 
        // this.y = 
        // this.rotation =

    }
}

var ticker = new Ticker();
var body = new HumanBody(humanContainer);
ticker.start([body]);











