/**
 * 重力加速度
 */
var GRAVITY = 9.8;
var BOUNDS_BOTTOM = 400;
var BOUNDS_LEFT = 0;
var BOUNDS_RIGHT = 400;
var BOUNCE = 0.95;
var min_v = 0.5;
var f = 0.3;
/**
 * 计时器系统
 */
var Ticker = (function () {
    function Ticker() {
        this.bodyQueue = [];
    }
    /**
     * 启动计时器
     * @param bodyList 物理队列
     */
    Ticker.prototype.start = function (bodyQueue) {
        this.bodyQueue = bodyQueue;
        this.lastTime = Date.now();
        var self = this;
        setInterval(this.onTicker.bind(this), 1000 / 60);
    };
    Ticker.prototype.onTicker = function () {
        var currentTime = Date.now();
        var duringTime = currentTime - this.lastTime;
        this.lastTime = currentTime;
        this.bodyQueue.map(function (body) {
            body.onTicker(duringTime / 100);
        });
    };
    return Ticker;
}());
var Body = (function () {
    function Body(displayObject) {
        this.isgrounded = false;
        this.vx = 0;
        this.vy = 0;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.displayObject = displayObject;
    }
    Body.prototype.onTicker = function (duringTime) {
        if (!this.isgrounded) {
            this.vy += duringTime * GRAVITY;
            this.x += duringTime * this.vx;
            this.y += duringTime * this.vy;
        }
        if (this.isgrounded) {
            this.vy = 0;
            this.vx -= this.vx * f;
            this.x += duringTime * this.vx;
            this.y = BOUNDS_BOTTOM - this.height;
        }
        //反弹
        if (this.y + this.height > BOUNDS_BOTTOM && this.vy >= 0) {
            this.vy = -BOUNCE * this.vy;
            if (Math.abs(this.vy) <= min_v && this.vy + GRAVITY * duringTime > 0) {
                this.isgrounded = true;
            }
        }
        if (this.y < 0) {
            this.vy = -BOUNCE + this.vy;
        }
        //TODO： 左右越界反弹
        if (this.x < BOUNDS_LEFT || this.x + this.width > BOUNDS_RIGHT) {
            this.vx = -BOUNCE * this.vx;
        }
        //根据物体位置更新显示对象属性
        var displayObject = this.displayObject;
        displayObject.x = this.x;
        displayObject.y = this.y;
    };
    return Body;
}());
var rect = new Rect();
rect.width = 150;
rect.height = 100;
rect.color = '#FF0000';
/**
 * 创建一个物体，其显示内容为一个长方形，受重力做平抛运动
 */
var body = new Body(rect);
body.width = rect.width;
body.height = rect.height;
body.vx = 10; //需要保证 vx 在 0-50的范围内行为正常
body.vy = 35; //需要保证 vy 在 0-50的范围内行为正常
var renderCore = new RenderCore();
var ticker = new Ticker();
renderCore.start([rect]);
ticker.start([body]);
