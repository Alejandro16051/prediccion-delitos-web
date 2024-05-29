!(function (t, o) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = o())
    : "function" == typeof define && define.amd
    ? define(o)
    : ((t || self).addCurrentLocation = o());
})(this, function () {
  var t = (function () {
      function t(t, o) {
        var n, i, l, e, r, s, a, c, h, u, d, p;
        (this.map = void 0),
          (this.options = void 0),
          (this.controlUI = void 0),
          (this.controlInnerSymbol = void 0),
          (this.map = t),
          (this.options = o);
        var v = o.buttonStyle,
          m = "translateY(-50%) translateX(-50%)",
          y = document.createElement("div");
        (y.style.margin =
          null != (n = null == v ? void 0 : v.mainMargin) ? n : "10px"),
          (this.controlUI = document.createElement("button")),
          (this.controlUI.style.backgroundColor =
            null != (i = null == v ? void 0 : v.backgroundColor) ? i : "#fff"),
          (this.controlUI.style.border =
            null != (l = null == v ? void 0 : v.border) ? l : "none"),
          (this.controlUI.style.borderRadius =
            null != (e = null == v ? void 0 : v.borderRadius) ? e : "0px"),
          (this.controlUI.style.outline =
            null != (r = null == v ? void 0 : v.outline) ? r : "none"),
          (this.controlUI.style.width =
            null != (s = null == v ? void 0 : v.height) ? s : "40px"),
          (this.controlUI.style.height =
            null != (a = null == v ? void 0 : v.height) ? a : "40px"),
          (this.controlUI.style.boxShadow =
            null != (c = null == v ? void 0 : v.boxShadow)
              ? c
              : "0 1px 4px rgba(0,0,0,0.3)"),
          (this.controlUI.style.cursor =
            null != (h = null == v ? void 0 : v.cursor) ? h : "pointer"),
          (this.controlUI.style.padding = "0px"),
          (this.controlUI.style.display = "flex"),
          (this.controlUI.title = "Your Location"),
          y.appendChild(this.controlUI);
        var g = document.createElement("img");
        (g.src =
          "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2224px%22%20fill%3D%22%23" +
          (null !=
          (u =
            null == v || null == (d = v.symbolColor)
              ? void 0
              : d.replace("#", ""))
            ? u
            : "666666") +
          "%22%3E%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%3Cpath%20d%3D%22M20.94%2011c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83%203.52%203.52%206.83%203.06%2011H1v2h2.06c.46%204.17%203.77%207.48%207.94%207.94V23h2v-2.06c4.17-.46%207.48-3.77%207.94-7.94H23v-2h-2.06zM12%2019c-3.87%200-7-3.13-7-7s3.13-7%207-7%207%203.13%207%207-3.13%207-7%207z%22%2F%3E%3C%2Fsvg%3E"),
          (g.style.height = "75%"),
          (g.style.position = "absolute"),
          (g.style.top = "50%"),
          (g.style.left = "50%"),
          (g.style.transform = m),
          this.controlUI.appendChild(g),
          (this.controlInnerSymbol = document.createElement("div")),
          (this.controlInnerSymbol.style.backgroundColor =
            null != (p = null == v ? void 0 : v.symbolColor) ? p : "#666666"),
          (this.controlInnerSymbol.style.height = "25%"),
          (this.controlInnerSymbol.style.width = "25%"),
          (this.controlInnerSymbol.style.borderRadius = "50%"),
          (this.controlInnerSymbol.style.position = "absolute"),
          (this.controlInnerSymbol.style.top = "50%"),
          (this.controlInnerSymbol.style.left = "50%"),
          (this.controlInnerSymbol.style.transform = m),
          this.controlUI.appendChild(this.controlInnerSymbol),
          null != v && v.buttonPosition
            ? t.controls[null == v ? void 0 : v.buttonPosition].push(y)
            : t.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(y);
      }
      var o = t.prototype;
      return (
        (o.setEnabled = function (t) {
          void 0 === t && (t = !0), (this.controlUI.disabled = !t);
        }),
        (o.animate = function (t) {
          if (t)
            this.controlInnerSymbol.animate(
              [{ opacity: "1" }, { opacity: "0" }, { opacity: "1" }],
              { duration: 1e3, iterations: Infinity }
            );
          else {
            var o = this.controlInnerSymbol.getAnimations();
            o.length > 0 && "running" === o[0].playState && o[0].cancel();
          }
        }),
        (o.setOnClickListener = function (t) {
          this.controlUI.onclick = t;
        }),
        t
      );
    })(),
    o = "#4A89F3",
    n = (function () {
      function t(t, n) {
        var i, l, e, r, s, a, c, h, u;
        void 0 === n && (n = {}),
          (this.map = void 0),
          (this.options = void 0),
          (this.innerCircle = void 0),
          (this.outerCircle = void 0),
          (this.map = t),
          (this.options = n);
        var d = n.markerStyle;
        (this.innerCircle = new google.maps.Marker({
          map: t,
          clickable: null != (i = null == d ? void 0 : d.clickable) && i,
          cursor: null != (l = null == d ? void 0 : d.cursor) ? l : "pointer",
          draggable: null != (e = null == d ? void 0 : d.draggable) && e,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: null != (r = null == d ? void 0 : d.fillColor) ? r : o,
            fillOpacity: 1,
            scale: null != (s = null == d ? void 0 : d.scale) ? s : 6,
            strokeWeight:
              null != (a = null == d ? void 0 : d.strokeWeight) ? a : 2,
            strokeColor:
              null != (c = null == d ? void 0 : d.strokeColor) ? c : "white",
          },
          optimized: !1,
          zIndex: 3,
        })),
          (this.outerCircle = new google.maps.Circle({
            map: t,
            fillColor:
              null != (h = null == (u = n.markerStyle) ? void 0 : u.fillColor)
                ? h
                : o,
            fillOpacity: 0.1,
            strokeWeight: 0,
          })),
          this.outerCircle.bindTo("center", this.innerCircle, "position");
      }
      var n = t.prototype;
      return (
        (n.update = function (t, o) {
          void 0 === o && (o = !1);
          var n = new google.maps.LatLng(t.coords.latitude, t.coords.longitude);
          this.innerCircle.setPosition(n),
            this.options.showAccuracyRadius ||
              (this.outerCircle.setCenter(n),
              this.outerCircle.setRadius(t.coords.accuracy)),
            o &&
              this.map.setCenter(
                new google.maps.LatLng(t.coords.latitude, t.coords.longitude)
              );
        }),
        (n.center = function () {
          var t = this.innerCircle.getPosition();
          t && this.map.setCenter(t);
        }),
        t
      );
    })(),
    i = (function () {
      function o(o, i) {
        var l = this;
        void 0 === i && (i = {}),
          (this.controlUI = void 0),
          (this.locationMarker = void 0),
          (this.map = void 0),
          (this.positionCount = void 0),
          (this.positionOptions = void 0),
          (this.watchId = void 0),
          (this.watchPositionFn = void 0),
          (this.map = o),
          (this.positionOptions = { enableHighAccuracy: !0 }),
          (this.locationMarker = new n(o, i)),
          (this.controlUI = new t(o, i)),
          (this.positionCount = 0),
          (this.watchId = 0),
          (this.watchPositionFn =
            i.watchPositionFn ||
            function (t, o, n) {
              return navigator.geolocation.watchPosition(t, o, n);
            }),
          this.controlUI.setOnClickListener(function () {
            l.watchId
              ? l.locationMarker.center()
              : (l.controlUI.setEnabled(!1),
                l.controlUI.animate(!0),
                l.startWatchPosition());
          });
      }
      var i = o.prototype;
      return (
        (i.startWatchPosition = function () {
          var t = this,
            o = this.watchPositionFn(
              function (o) {
                t.updatePosition(o);
              },
              function (o) {
                t.setError(o);
              },
              this.positionOptions
            );
          o instanceof Promise
            ? o.then(function (o) {
                return (t.watchId = o);
              })
            : (this.watchId = o);
        }),
        (i.updatePosition = function (t) {
          this.locationMarker.update(t, 1 == ++this.positionCount),
            this.controlUI.setEnabled(!0),
            this.controlUI.animate(!1);
        }),
        (i.setError = function (t) {
          (this.watchId = void 0),
            this.controlUI.setEnabled(!0),
            this.controlUI.animate(!1),
            alert(t.message);
        }),
        o
      );
    })();
  return function (t, o) {
    return void 0 === o && (o = {}), new i(t, o);
  };
});
//# sourceMappingURL=index.umd.js.map
