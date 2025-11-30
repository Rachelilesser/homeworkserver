import { clear } from 'console';
import EventEmitter from 'events'; 
const emitter = new EventEmitter();

export class time {
    constructor( 
        private count: number = 0,
        private max: number
    ) {}
    clock(func: any) {
        emitter.on('continue', func);
    }
    tick(): void {
        this.count++;
        if (this.count >= this.max) {
            this.count = 0;
            emitter.emit('continue');    
        }
    }
    toString(): string {
        return this.count.toString().padStart(2, '0');
    }
}


let hour: time = new time(0, 24);
let min: time = new time(0, 60);
let sec: time = new time(0, 60);

sec.clock(() => {
  
    min.tick();
});

min.clock(() => {
 
    hour.tick();
});

const printTime = () => {
    console.log(`${hour.toString()}: ${min.toString()}: ${sec.toString()}`);
    const interval = setInterval(() => {
        clear();
    }, 10000);
};
console.log(`שעות: דקות: שניות`);
printTime(); 

// התחלת השעון
setInterval(() => {
    sec.tick(); 
    printTime();   
}, 1000);