interface Behaviour { //STRATEGY PATTERN
    square:Square
    performBehaviour():void
    onSpeedUp(): void
    onSlowDown(): void

    //Idee voor behaviour: wanneer de gebruiker een score heeft van 10, switch de triangles naar ander behaviour (moeilijker)
}