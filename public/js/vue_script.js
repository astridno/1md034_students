
new Vue({
    el: '#main',
    data: {
      "hej" : "hejsan",
      "food" : burgers,
      "name" : "",
      "adress" : "",
      "houseNR" : "",
      "email" : "",
      "paymentMethod" : "",
      "gender" : "",
      "orderPlaced" : "false",
      "orderText" : "",
      "burgerChoice" : []
    },
    methods: {
      markDone: function() {
        this.orderText = "Order placed:   Name:" +this.name + "//  Adress:" + this.adress + " "  + this.houseNR + " //  Email:" + this.email + " //  PaymentMethod:" + this.paymentMethod + " //  Gender:" + this.gender + " //  Food:" + this.burgerChoice ;
      }
    }
});
