require = function() {
  function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = "function" == typeof require && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }
        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function(e) {
          var n = t[o][1][e];
          return s(n || e);
        }, l, l.exports, e, t, n, r);
      }
      return n[o].exports;
    }
    var i = "function" == typeof require && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s;
  }
  return e;
}()({
  HelloWorld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        label: {
          default: null,
          type: cc.Label
        },
        text: "Hello, World!"
      },
      onLoad: function onLoad() {
        this.label.string = this.text;
      },
      update: function update(dt) {}
    });
    cc._RF.pop();
  }, {} ],
  spine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b7d57lhsi9Km4cSVNw86n8G", "spine");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.boy = this.getComponent("sp.Skeleton");
        this.setListener();
        this.boy.setAnimation(0, "shoot", false);
      },
      setListener: function setListener() {
        var _this = this;
        this.boy.setStartListener(function(tc) {
          cc.log("start");
        });
        this.boy.setEndListener(function(tc) {
          cc.log("end");
        });
        this.boy.setCompleteListener(function(tc, count) {
          cc.log("complete");
          _this.move();
        });
      },
      move: function move() {
        cc.log("move func");
        this.boy.setAnimation(0, "walk", true);
      },
      start: function start() {}
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "HelloWorld", "spine" ]);