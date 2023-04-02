odoo.define('pos_discount_group.discount_access', function(require) {
    'use strict';

    const DiscountButton = require('pos_discount.DiscountButton');
    const Registries = require('point_of_sale.Registries');
    const session = require('web.session');

    const POS_button_discount = (BtnDiscount) => 
        class extends DiscountButton{
            async onClick(){
                var self = this;
//                var sup = self._super;
                session.user_has_group('pos_discount_group.group_pos_discount').then(
                    (has_group) => {
                        if (has_group){
                            return super.onClick(...arguments);
                        }
                        else{
                            this.showPopup('ErrorPopup', {
                                    'title': this.env._t("Validation Error"),
                                    'body': this.env._t("Sorry you have not permission to do this"),
                                });
                            }
                    }
                )

            };

        };

        Registries.Component.extend( DiscountButton, POS_button_discount );

    return POS_button_discount;
    
});