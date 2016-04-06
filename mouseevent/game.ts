module game {

}

var humanContainer = new render.DisplayObjectContainer();


var head = new render.Bitmap();
head.x = -75;
head.y = -200;
var trunk = new render.Bitmap();
trunk.x = -75
trunk.y = -200;
var left_leg = new render.Bitmap();
left_leg.x = -75;
left_leg.y = -200;
var right_leg = new render.Bitmap();
right_leg.x = -75;
right_leg.y = -200;
var left_arm = new render.Bitmap();
left_arm.x = -75;
left_arm.y = -200;
var right_arm = new render.Bitmap();
right_arm.x = -75;
right_arm.y = -200;

var human = new render.DisplayObjectContainer();
human.x = -50;
human.y = -50;

head.source = "head.png";
trunk.source = "trunk.png";
left_leg.source = "left_leg.png";
right_leg.source = "right_leg.png";
left_arm.source = "left_arm.png";
right_arm.source = "right_arm.png";

humanContainer.addChild(human)
human.addChild(head)
human.addChild(trunk)
human.addChild(left_leg)
human.addChild(right_leg)
human.addChild(left_arm)
human.addChild(right_arm)


var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["head.png","trunk.png","left_leg.png","right_leg.png","left_arm.png","right_arm.png"]);


class HumanBody extends Body {
    
    vx:number = 5;


    onTicker(duringTime: number) {

         this.x += this.vx*duringTime;
         // this.y = 
         this.rotation += Math.PI*duringTime;

    }
}

var ticker = new Ticker();
var body = new HumanBody(humanContainer);

body.vx = 2;
body.y = 200;

ticker.start([body]);

var eventCore = new events.EventCore();
eventCore.init();

var judgehead = 0;
var judgeleg = 0;

var headHitTest = (localPoint:math.Point,displayObject:render.DisplayObject) =>{
    alert (`点击位置为${localPoint.x},${localPoint.y}`);
     if(localPoint.x > 0  && localPoint.x <= 100 && localPoint.y > 0 && localPoint.y <= 100){
        judgehead += 1;
    }
    return true;
}

var legHitTest = (localPoint:math.Point,displayObject:render.DisplayObject) =>{
     alert (`点击位置为${localPoint.x},${localPoint.y}`);
     if(localPoint.x > -75 && localPoint.x < 100 && localPoint.y > -75 && localPoint.y < 100 
    || localPoint.x > -30 && localPoint.x < 145 && localPoint.y > -75 && localPoint.y < 100){
        judgeleg += 1;
    }
      return true;
}

var headOnClick = () => {
    alert("clicked!!");
    //修改 HumanBody 的速度，使其反向移动
}

var legOnClick = () => {
    alert("clicked!!");
    //修改 HumanBody 的速度，使其反向移动
}


eventCore.register(head,headHitTest,headOnClick);












