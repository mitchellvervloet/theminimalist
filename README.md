# The Minimalist

## Inleiding
- Een game voor de herkansingen van PRG01-8 ofwel Applying Design Patterns in Game Development. 

## Speelbare game
- link

## Installatie
- ..

## Klassendiagram
- ..

## Pull request
- link naar een pull request in een fork van het project van een medestudent: 
- https://github.com/duncanteege/DrugDealer/tree/duncanbranch
- Link naar commit van mij die Mitchell heeft gemerged: https://github.com/mitchellvervloet/DrugDealer/commit/32389d4772fa06d792a7bcbff6a9ef1b639bfd37
- Mijn code aanpassingen van Mitchell zijn project staan onderin de readme (aanpassingen gemaakt op 22 mei 2018)


- Waarom ik de dingen heb toegevoegd:
- Strategy behaviour: Ik heb strategy pattern toegepast op Mitchell zijn code omdat hierdoor zijn code netter is en het gemakkelijk verder uit te breiden is in te toekomst.
- Singleton van Game: Zodat er maar 1 Game instance is.

## Peer review
- link naar peer review in week 6

## Singleton
- ..

## Polymorfisme
- ..

## Strategy
- ..

## Observer
- ..

## Gameplay componenten
- Beschrijf per compenent waar en waarom je het hebt toegepast:




## Code
- Readme
```
- # mijnproject-
-
- testcomment
+# mijnproject - Fork Duncan
+- testcomment
```

- behaviour.ts
```
+interface Behaviour {
+    drugsBoat: DrugsBoat
+    performBehaviour():void
+    onPatrolling():void
+    onSpeeding():void
+} 
```

- patrolling.ts
```
+class Patrolling implements Behaviour {
+   public drugsBoat: DrugsBoat
+
+   constructor(drugsBoat: DrugsBoat) {
+       this.drugsBoat = drugsBoat
+   }
+
+   performBehaviour() {
+       console.log("patrollin'")
+   }
+
+   onPatrolling() {
+       //
+   }
+
+   onSpeeding() {
+       //
+   }
+} 
```

- Speeding.ts 
```
+class Speeding implements Behaviour {
+    public drugsBoat: DrugsBoat
+ 
+    constructor(drugsBoat: DrugsBoat) {
+        this.drugsBoat = drugsBoat
+    }
+ 
+    performBehaviour() {
+        console.log("speedin'")
+    }
+ 
+    onPatrolling() {
+        //
+    }
+ 
+    onSpeeding() {
+        //
+    }
+ } 
```

- DrugsBoat
```
+class DrugsBoat {
+
+    public behaviour: Behaviour
+    constructor() {
+        console.log("boat created")
+        this.behaviour = new Patrolling(this)
+    }
+    update() {
+        this.behaviour.performBehaviour()
+    }
+}
```

- Game
```
+class Game {
+
+    private static instance: Game
+
+    private drugsBoat: DrugsBoat
+
+    constructor() {
+        this.drugsBoat = new DrugsBoat()
+        this.gameLoop()
+    }
+
+    public static getInstance() {
+        if (!Game.instance) {
+            Game.instance = new Game()
+        }
+        return Game.instance
+    }
+
+    //Gameloop
+    private gameLoop() {
+        this.drugsBoat.update()
+        requestAnimationFrame(() => this.gameLoop())
+    }
+}
+
+window.addEventListener("load", () => {
+    Game.getInstance()
+})
```

- CSS
```
+body, html {
+    margin:0; padding:0;
+    width:100%; height:100%;
+}
+
+* {
+    box-sizing: border-box;
+} 
```

- HTML 
```
+<!DOCTYPE html>
+<html lang="en">
+<head>
+    <meta charset="UTF-8">
+    <meta name="viewport" content="width=device-width, initial-scale=1.0">
+    <meta http-equiv="X-UA-Compatible" content="ie=edge">
+    <link rel="stylesheet" href="./css/style.css">
+    <title>Typescript</title>
+</head>
+<body>
+    <script src="./js/main.js"></script>
+</body>
+</html> 
```