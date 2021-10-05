import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HeaderComponent extends Component {
  @tracked isExpandedMenu = false;
  @action
  toggleMenu() {
    alert('testing ui interaction');
    this.isExpandedMenu = !this.isExpandedMenu;
    console.log(this.isExpandedMenu);
  }
}
