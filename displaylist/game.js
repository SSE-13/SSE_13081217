var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var humanContainer = new render.DisplayObjectContainer();
var head = new render.Bitmap();
head.x = 50;
head.y = -50;
var trunk = new render.Bitmap();
trunk.x = 50;
trunk.y = -50;
var left_leg = new render.Bitmap();
left_leg.x = 50;
left_leg.y = -50;
var right_leg = new render.Bitmap();
right_leg.x = 50;
right_leg.y = -50;
var left_arm = new render.Bitmap();
left_arm.x = 50;
left_arm.y = -50;
var right_arm = new render.Bitmap();
right_arm.x = 50;
right_arm.y = -50;
var human = new render.DisplayObjectContainer();
human.x = -100;
human.y = -100;
head.source = "head.png";
trunk.source = "trunk.png";
left_leg.source = "left_leg.png";
right_leg.source = "right_leg.png";
left_arm.source = "left_arm.png";
right_arm.source = "right_arm.png";
humanContainer.addChild(human);
human.addChild(head);
human.addChild(trunk);
human.addChild(left_leg);
human.addChild(right_leg);
human.addChild(left_arm);
human.addChild(right_arm);
var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["head.png", "trunk.png", "left_leg.png", "right_leg.png", "left_arm.png", "right_arm.png"]);
var HumanBody = (function (_super) {
    __extends(HumanBody, _super);
    function HumanBody() {
        _super.apply(this, arguments);
    }
    HumanBody.prototype.onTicker = function (duringTime) {
        this.x += this.vx * duringTime;
        // this.y = 
        this.rotation += Math.PI * duringTime;
    };
    return HumanBody;
}(Body));
var ticker = new Ticker();
var body = new HumanBody(humanContainer);
body.vx = 2;
body.y = 100;
ticker.start([body]);
//# sourceMappingURL=game.js.map