import EventBus from '../core/EventBus.js';
import { EVENTS } from '../core/events.js';

export default class PointerSystem {

  constructor() {
    EventBus.on(EVENTS.POINTER, this.Pointer, this);
  }

  Pointer(value) {
    console.log('POINTER');
  }

  destroy() {
    EventBus.off(EVENTS.POINTER, this.Pointer, this);
  }
}
