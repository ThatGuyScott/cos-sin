import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <canvas #canvas></canvas>`,

  styles: ['canvas { position: absolute;top: 0px;left: 0px;margin: 0px;padding: 0px; }']
})
export class AppComponent implements OnInit {

  // program options
  rad = true;
  invert_y = true;
  grid_size = 100;
  animation_delay = 2;
  // background_color = 'black';
  // background_color = '#252525';
  background_color = '#002525';
  grid_color = 'darkgrey';
  line_color = 'lightgrey';
  text_color = 'darkgrey';

  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  center_x = 0;
  center_y = 0;
  unit_circle_size = 0;
  angle = 0;

  x = 0;
  y = 0;
  t = 0;

  wave_y: any[] = [];
  wave_add_interval = 3;
  wave_add_counter = 0;


  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
    this.center_x = this.canvas.nativeElement.width / 2;
    this.center_y = this.canvas.nativeElement.height / 2;
    this.unit_circle_size = this.center_y - 50;

    this.ctx.font = '18px Arial';
    this.animate();

  }

  animate() {
    setInterval(() => {

      // rad
      this.angle += .001;
      if (this.angle >= 2 * Math.PI) {
        this.angle = 0;
        this.wave_y = [];
      }
      this.draw();
    }, this.animation_delay);

  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.drawGridPlane(this.unit_circle_size / this.grid_size);

    this.drawUnitCircle_radians();
    // this.drawUnitCircle_degrees();

    this.drawAngle();
    // this.drawWave();
    this.printText();
  }

  drawGridPlane(grid_size) {

    this.ctx.fillStyle = this.background_color;
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    this.ctx.fillStyle = this.grid_color;

    // draw x +
    for (let x1 = this.center_x; x1 < this.canvas.nativeElement.width; x1 += grid_size) {
      this.ctx.fillRect(x1, this.center_y, 1, 1);
    }

    // draw x2 -
    for (let x2 = this.center_x; x2 > 0; x2 -= grid_size) {
      this.ctx.fillRect(x2, this.center_y, 1, 1);
    }

    // draw y +
    for (let y = this.center_y; y < this.canvas.nativeElement.height; y += grid_size) {
      this.ctx.fillRect(this.center_x, y, 1, 1);
    }
    // draw y -
    for (let y = this.center_y; y > 0; y -= grid_size) {
      this.ctx.fillRect(this.center_x, y, 1, 1);
    }


  }

  drawUnitCircle_radians() {
    this.ctx.fillStyle = this.grid_color;
    for (let angle = 0; angle < (2 * Math.PI); angle += .01) {

      let x = this.center_x + Math.cos(angle) * this.unit_circle_size;
      let y = this.center_y + Math.sin(angle) * this.unit_circle_size;
      this.ctx.fillRect(x, y, 1, 1);

    }

  }

  drawUnitCircle_degrees() {

    // we draw 60 dots (360 / 6 = 60)
    for (let angle = 0; angle < 360; angle += 6) {

      let x = this.center_x + Math.cos(angle * Math.PI / 180) * this.unit_circle_size;
      let y = this.center_y + Math.sin(angle * Math.PI / 180) * this.unit_circle_size;

      this.ctx.fillStyle = this.grid_color;
      this.ctx.fillRect(x, y, 1, 1);

    }
  }

  drawAngle() {

    this.ctx.fillStyle = this.line_color;


    // rad
    this.x = this.center_x + Math.cos(this.angle) * this.unit_circle_size;
    this.y = this.center_y + Math.sin(this.angle) * this.unit_circle_size;
    this.t = this.center_x + Math.tan(this.angle) * this.unit_circle_size;

    this.ctx.strokeStyle = this.line_color;
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(this.center_x, this.center_y);

    // inverts they y axis for counter clockwise rotation
    // if (this.invert_y) {
    this.ctx.lineTo(this.x, this.canvas.nativeElement.height - this.y); // y=0 at bottom of screen
    // } else {
    //   this.ctx.lineTo(this.x, this.y); // y=0 at top of screen
    // }

    this.ctx.lineTo(this.x, this.center_y);
    this.ctx.lineTo(this.center_x, this.center_y);

    this.ctx.stroke();

  }

  drawWave() {

    this.ctx.fillStyle = this.line_color;

    let wy = (this.center_y + Math.sin(this.angle) * this.unit_circle_size).toFixed(0);
    if (this.wave_add_counter == this.wave_add_interval) {
      // @ts-ignore
      this.wave_y.push(this.canvas.nativeElement.height - wy);
      this.wave_add_counter = 0;
    } else {
      this.wave_add_counter++;
    }

    // draw the wave
    for (let i = 0; i < this.wave_y.length; i++) {
      this.ctx.fillRect(i , this.wave_y[i], 1, 1);
    }

  }

  printText() {

    this.ctx.fillStyle = this.text_color;
    let tx = 20;
    let ty = 20;

    this.ctx.fillText(`Angle:${this.angle.toFixed(2)} rad | ${(this.angle * 180 / Math.PI).toFixed(2)} deg`, tx, ty);
    ty += 25;
    this.ctx.fillText(`Cos ${Math.cos(this.angle).toFixed(2)}`, tx, ty);
    ty += 25;
    this.ctx.fillText(`Sin ${Math.sin(this.angle).toFixed(2)}`, tx, ty);
    ty += 25;
    this.ctx.fillText(`Tan ${Math.tan(this.angle).toFixed(2)}`, tx, ty);


  }

}
