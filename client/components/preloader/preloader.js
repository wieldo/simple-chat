import {name} from '/imports/chat/client/module';
import {init,SetModule, Component} from 'angular2-now';

init();
SetModule(name);
@Component({
    selector: 'chat-preloader',
    template: `
      <md-progress-circular md-mode="indeterminate"></md-progress-circular>
    `
})
export class ChatPreloaderComponent {
    constructor() {

    }
}
