#!/usr/bin/node
class Rectangle {
	constructor (w, h) {
    		(this.width, this.height) = (w , h);
	}
	if (w <= 0 || h <=0){
		(this.width, this.height) = ( , );
	}
  print () {
    for (let i = 0; i < this.height; i++) {
	    console.log('X'.repeat(this.width));
    }
  }
};

