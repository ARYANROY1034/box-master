class Ground{

constructor(x,y,width,height){
    var options={
        isStatic:true
    }
this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
World.add(world,this.body)





}
display(){
    
    rectMode(CENTER)
    fill("brown") 
    rect(this.body.postion.x,this.body.postion.y,this.width,this.height)
}









}