sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
],
function(Controller, MessageToast, Fragment){
    'use strict';

    return Controller.extend("ns.developersdiarymodule.controller.HelloPanel", {
        onShowHello: function(){
                
            //read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            //Show message
            MessageToast.show(sMsg);
    
            //Show a native or vanilla JS alert
            // MessageToast.show("Hello there!");
        },

        onOpenDialog: function(){
            this.getOwnerComponent().openHelloDialog();
        }

        
    })
    
}
)