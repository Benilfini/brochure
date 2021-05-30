import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ItemComponent extends Component {

    @service('shopping-cart') cart;

    @action
    addToCart() {
        const { name, price } = this.args;
        this.cart.addItem({
            name,
            price
        });
    }
}
