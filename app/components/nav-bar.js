/* eslint-disable prettier/prettier */
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NavBarComponent extends Component {
    @service shoppingCart;

    get itemCount() {
        return this.shoppingCart.itemList.reduce((total, item) => {
            return total += item.count;
        }, 0);
    }
    

    @tracked
    isOpen = false;
   
    @action 
    open() {
    this.isOpen = !this.isOpen;
    }
}