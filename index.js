class Game {
  constructor(input) {
    this.score = 0
    this.input = document.getElementById(input)
    this.input.addEventListener("keydown", this.addScore.bind(this), true);
    }
  addScore(){
   let square = document.getElementById('game-field').children[0]
   let str = event.key;
   if (str === square.dataset.key) {
    localStorage.setItem("score", ++this.score)
    this.addSquare();
   }
   console.log(localStorage.getItem("score"));
   }
  addSquare(){
     let Parent = document.getElementById("squares")
     let stepParent = document.getElementById("game-field")
     let N = Math.floor(Math.random()*Parent.children.length)
     let child = Parent.children[N]
     let stepChild = stepParent.children[0]
     stepParent.removeChild(stepChild)
     Parent.appendChild(stepChild)
     stepParent.appendChild(child) 
   }

}



class Timer {
  constructor(time, field) {
    this.time = time
    this.field = document.getElementById(field)
  }
  start() {
    let Time = this.time
    let Field = this.field
    let interval = setInterval (function(){
      Field.innerText = Time--
      if(Time < 0) {
        clearInterval(interval)
      }
    }, 1000)
  }
}

class Menu {
  constructor(start, scores, clear) {
    this.start = document.getElementById(start)
    this.scores = document.getElementById(scores)
    this.clear = document.getElementById(clear)
    this.start.addEventListener("click", this.newGame)
    this.clear.addEventListener("click", this.clearScore)
    this.scores.addEventListener("click", this.writeScores)
  }
  newGame(){

    let A = new Game("input")
    let T = new Timer(15, "timer")
  }
  clearScore(){
    localStorage.clear()
  }
  writeScores(){
    alert(localStorage.getItem("score"))
  }
}

let M = new Menu("start", "scores", "clear")







