function Food(x,y){
    this.x = x;
    this.y = y;
    this.radius =16;

    this.show = function(){
        image(foodImg,(x+5),(y+8), 15, 10);
    }
}
