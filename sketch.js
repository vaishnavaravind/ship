varBall=createSprite(200,200,20,20)
varplayer1=createSprite(390,150,15.90)
varplayer1=createSprite(10,150,15,90)
ball.setVelocity(10,10)
functiondraw()
background("white")
player1.y=World.mouseY
player2.y=ball.y
createEdgeSprite()
ball.bounceoff(topEdge)
ball.bounceoff(bottomEdge)
ball.bounceoff(player1)
ball.bounceoff(player2)
 drawSprites()



