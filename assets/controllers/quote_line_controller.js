import { Controller } from '@hotwired/stimulus';
import { getComponent } from '@symfony/ux-live-component';
import $ from 'jquery';
require('select2')

/*
* The following line makes this controller "lazy": it won't be downloaded until needed
* See https://github.com/symfony/stimulus-bridge#lazy-controllers
*/
/* stimulusFetch: 'lazy' */
export default class extends Controller {
    static targets = ['recipeInput', 'preparationInput', 'priceInput']

    static choices = null;

    activateChoices(component) {
        if(component.valueStore.props.isEditing) {
            this.choices = $(this.recipeInputTarget).select2({});

            $(this.choices).on('select2:select', function(e) {
                var data = e.params.data;
                component.set('recipe', data.id);
                component.set('preparation', data.element?.dataset.preparation || 0);
                component.set('unit_price', data.element?.dataset.price || 0);
                component.render();
            })
        }
    }

    destroyChoices() {
        if(this.choices) {
            $(this.choices).select2('destroy');
            this.choices = null;
        }
    }

    async connect() {
        this.component = await getComponent(this.element);
        this.activateChoices(this.component);
    }

    async initialize() {
        this.component = await getComponent(this.element);

        this.component.on('connect', (component) => {
            this.activateChoices(this.component);
        });

        this.component.on('render:finished', (component) => {
            this.destroyChoices();
            this.activateChoices(this.component);
        });
        
        this.component.on('disconnect', (component) => {
            this.destroyChoices();
        })
    }
}
