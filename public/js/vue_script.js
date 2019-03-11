var socket = io();
new Vue({
    el: '#main',
    data: {
      "hej" : "hejsan",
      "food" : burgers,
      "name" : "",
      "email" : "",
      "paymentMethod" : "",
      "gender" : "",
      "orderPlaced" : "false",
      "orderText" : "",
      "burgerChoice" : [],
      orders: {},
      order: {orderId: "T",
              details: {x:"-10", y:"-10"},
              }
    },

    created: function () {
      socket.on('initialize', function (data) {
        this.orders = data.orders;
      }.bind(this));

      socket.on('currentQueue', function (data) {
        this.orders = data.orders;
      }.bind(this));
    },

    methods: {
      markDone: function() {

        this.orderText = "Order placed:   Name:" +this.name + " //  Email:" + this.email + " //  PaymentMethod:" + this.paymentMethod + " //  Gender:" + this.gender + " //  Food:" + this.burgerChoice ;
      },
      getNext: function () {
        var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
          return Math.max(last, next);
        }, 0);
        return lastOrder + 1;
      },
      addOrder: function (event) {
        socket.emit("addOrder", { orderId: this.getNext(),
                                  details: this.order.details,
                                  orderItems: this.burgerChoice,
                                  orderInfo: "Order placed:   Name:" +this.name + " //  Email:" + this.email + " //  PaymentMethod:" + this.paymentMethod + " //  Gender:" + this.gender
                                });
        this.markDone();
      },
      displayOrder: function(event) {
        var offset = {x: event.currentTarget.getBoundingClientRect().left,
                      y: event.currentTarget.getBoundingClientRect().top
                    };
        this.order = ({ orderId: "T",
                        details: { x: event.clientX - 10 - offset.x,
                                  y: event.clientY - 10 - offset.y }
                  });
        }
    }
});
