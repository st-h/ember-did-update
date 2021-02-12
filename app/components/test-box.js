import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TestBoxComponent extends Component {

  @tracked testValue = false;

  @action
  onInsert() {
    this.testValue = true;
  }

  @action
  onChange() {
    alert('test successful');
  }
}
