import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PrimaryNavComponent extends Component {
  @tracked isExpandedMenu = false;
  @action
  toggleMenu() {
    this.isExpandedMenu = !this.isExpandedMenu;
  }
}