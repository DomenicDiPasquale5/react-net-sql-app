import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';  

class MessageService {
  constructor() {
    this.messageSubject = new Subject();
  }

  sendMessage(topic, message) {
    this.messageSubject.next({ topic, message });
  }

  receiveMessage(topic) {
    return this.messageSubject.asObservable().pipe(filter((msg) => msg.topic === topic));
  }
}

export default new MessageService();