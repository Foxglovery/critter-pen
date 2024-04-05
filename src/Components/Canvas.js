/**@type {HTMLCanvasElement}*/

import { useEffect } from "react";

export default function Canvas() {
  useEffect(() => {
    const canvas = document.getElementById("canvas-cont");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var ctx = canvas.getContext("2d");
    //declare mouse so it can be referenced and changed later on this can be removed
    var mouse = {
      x: undefined,
      y: undefined,
    };

    var maxRadius = 40;
    // var minRadius = 2;

    var colorArray = ["#1A4F63", "#068587", "#6FB07F", "#FCB03C", "#FC5B3F"];
    // EVENT HANDLERS
    const canvasContainerRect = document
      .querySelector(".canvas-cont")
      .getBoundingClientRect();
    function handleMouseMove(event) {
      // Get the bounding rectangle of the canvas

      // Calculate the mouse position relative to the canvas
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }

    // window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // RULES FOR EACH CIRCLE
    function Circle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.minRadius = radius;
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
      // SPECIFY DRAW DIRECTIONS HERE
      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      };

      //object action logic goes here
      this.update = function () {
        if (
          this.x + this.radius > window.innerWidth ||
          this.x - this.radius < 0
        ) {
          this.dx = -this.dx;
        }

        if (
          this.y + this.radius > window.innerHeight ||
          this.y - this.radius < 0
        ) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        //interactivity

        if (
          mouse.x - this.x < 50 &&
          mouse.x - this.x > -50 &&
          mouse.y - this.y < 50 &&
          mouse.y - this.y > -50
        ) {
          if (this.radius < maxRadius) {
            this.radius += 1;
          }
        } else if (this.radius > this.minRadius) {
          this.radius -= 1;
        }

        this.draw();
      };
    }

    let circleArray = [];
    function init() {
      circleArray = [];
      //make several items
      for (let i = 0; i < 200; i++) {
        let radius = Math.random() * 3 + 1;
        let x = Math.random() * (window.innerWidth - radius * 2) + radius;
        let y = Math.random() * (window.innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 1; // x velocity
        let dy = (Math.random() - 0.5) * 1; //y velocity
        circleArray.push(new Circle(x, y, dx, dy, radius));
      }
    }
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
      }
    }
    init();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas id="canvas-cont" className="canvas-cont"></canvas>;
}
//canvas code
