var Application = new Vue({
  el: "#app",
  data: {
    products: [
      {
        id: 1,
        title: "CarrotOne",
        text: "Морковка",
        image: "CarrotOne.jfif",
        desc: "Full desc1",
      },

      {
        id: 2,
        title: "CarrotTwo",
        text: "Морковка",
        image: "CarrotTwo.jfif",
        desc: "Full desc2",
      },

      {
        id: 3,
        title: "CarrotThree",
        text: "Морковка",
        image: "CarrotThree.jfif",
        desc: "Full desc3",
      },

      {
        id: 4,
        title: "CarrotFor",
        text: "Морковка",
        image: "CarrotFor.jfif",
        desc: "Full desc4",
      },

      {
        id: 5,
        title: "CarrotFive",
        text: "Морковка",
        image: "CarrotFive.jpg",
        desc: "Full desc5",
      },
    ],

    product: [],
    cart: [],
    contactFields: [],
    btnVisible: 0,
    order: 0,
  },
  mounted: function () {
    this.getProduct();
    this.checkInCart();
    this.getCart();
  },
  methods: {
    getProduct() {
      if (window.location.hash) {
        var id = window.location.hash.replace("#", "");
        if (this.products && this.products.length > 0) {
          for (i in this.products) {
            if (
              this.products[i] &&
              this.products[i].id &&
              id == this.products[i].id
            )
              this.product = this.products[i];
          }
        }
      }
    },
    addToCart(id) {
      var cart = [];
      if (window.localStorage.getItem("cart")) {
        cart = window.localStorage.getItem("cart").split(",");
      }

      if (cart.indexOf(String(id)) == -1) {
        cart.push(id);
        window.localStorage.setItem("cart", cart.join());
        this.btnVisible = 1;
      }
    },
    checkInCart() {
      if (
        this.product &&
        this.product.id &&
        window.localStorage
          .getItem("cart")
          .split(",")
          .indexOf(String(this.product.id)) != -1
      )
        this.btnVisible = 1;
    },
    getCart() {
      if (window.localStorage.getItem("cart") != null) {
        if (this.products != null && this.products.length > 0) {
          for (let i in this.products) {
            if (
              this.products[i] != null &&
              this.products[i].id != null &&
              window.localStorage
                .getItem("cart")
                .split(",")
                .indexOf(String(this.products[i].id)) != -1
            )
              this.cart.push(this.products[i]);
          }
        }
      }
    },
    removeFromCart(id) {
      let cart = [];
      if (window.localStorage.getItem("cart") != null) {
        cart = window.localStorage.getItem("cart").split(",");
      }
      if (cart.indexOf(String(id)) != -1) {
        cart.splice(cart.indexOf(String(id)), 1);
        window.localStorage.setItem("cart", cart.join(","));
        this.cart = [];
        this.getCart();
      }
    },
    makeOrder() {
      this.cart = [];
      window.localStorage.setItem("cart", "");
      this.order = 1;
    },
  },
});
