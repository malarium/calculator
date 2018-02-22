new Vue ({
  el: "#calculator",
  data: {
    result: "",
    length: 0,
    number1: 0,
    sign: ""
  },
  methods: {
    addValue: function(e) {
      this.result += e.target.textContent;
      this.length++;
      if (this.length > 18) {
        this.result="Wanna fry your processor?!";
        return;
      }
    },
    clearAll: function () {
      this.result = "";
      this.length = 0;
      this.number1 = 0;
  },
    equals: function () {
      this.result = eval(this.result);
    }
  }
});