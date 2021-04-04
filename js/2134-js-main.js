!(function (a) {
  "use strict";
  var b = a(window);
  a(document).ready(function () {
    var d,
      c = a("[data-bg-img]");
    c.each(function () {
      (d = a(this)),
        d
          .css("background-image", "url(" + d.data("bg-img") + ")")
          .removeAttr("data-bg-img")
          .addClass("bg--img");
    });
    var f,
      g,
      h,
      i,
      e = a(".btn--ripple");
    e.on("mouseenter", function (b) {
      var c = a(this);
      0 === c.find(".btn--ripple-ink").length &&
        c.prepend("<span class='btn--ripple-ink'></span>"),
        (f = c.find(".btn--ripple-ink")),
        f.removeClass("btn--ripple-animate"),
        f.height() ||
          f.width() ||
          ((g = Math.max(c.outerWidth(), c.outerHeight())),
          f.css({ height: g, width: g })),
        (h = b.pageX - c.offset().left - f.width() / 2),
        (i = b.pageY - c.offset().top - f.height() / 2),
        f
          .css({ top: i + "px", left: h + "px" })
          .addClass("btn--ripple-animate");
    });
    var j = a(".CounterUP");
    j.length && j.counterUp({ delay: 10, time: 1e3 });
    var k = a(".domain-search--form form");
    k.length &&
      k.validate({
        rules: { domain: "required" },
        errorPlacement: function () {
          return !1;
        },
      });
    var l = a(".subscribe--form form");
    l.length &&
      l.validate({
        rules: { EMAIL: { required: !0, email: !0 } },
        errorPlacement: function () {
          return !1;
        },
      });
    var m = a(".login--form form");
    m.length &&
      m.validate({
        rules: {
          loginEmail: { required: !0, email: !0 },
          loginPassword: "required",
        },
        errorPlacement: function () {
          return !1;
        },
      });
    var n = a(".f0f--search-bar form");
    n.length &&
      n.validate({
        rules: { searchText: "required" },
        errorPlacement: function () {
          return !1;
        },
      });
    var o = a(".contact--form form"),
      p = a(".contact--form-status");
    o.length &&
      o.validate({
        rules: {
          contactName: "required",
          contactEmail: { required: !0, email: !0 },
          contactSubject: "required",
          contactMessage: "required",
        },
        errorPlacement: function () {
          return !0;
        },
        submitHandler: function (b) {
          var c = a(b);
          a.ajax({
            type: "POST",
            url: c.attr("action"),
            data: c.serialize(),
            success: function (a) {
              p.show().html(a).delay(1e3).fadeOut("slow");
            },
          });
        },
      });
    var q = a(".blog--search-widget form");
    q.length &&
      q.validate({
        rules: { searchText: "required" },
        errorPlacement: function (a, b) {
          return !1;
        },
      });
    var r = a(".blog--post-comment-form-group form");
    r.length &&
      r.validate({
        rules: {
          commentText: "required",
          name: "required",
          email: { required: !0, email: !0 },
        },
        errorPlacement: function (a, b) {
          return !1;
        },
      });
    var s = function (a, c, d) {
        return b.scrollTop() > a ? c.addClass(d) : c.removeClass(d);
      },
      t = a("#header");
    s(0, t, "sticky");
    var u = a("#backToTop");
    u.on("click", function () {
      return a("html, body").animate({ scrollTop: 0 }, 800), !1;
    }),
      s(0, u, "show"),
      b.on("scroll", function () {
        s(0, t, "sticky"), s(0, u, "show");
      });
    var v = a("#banner");
    v.css("padding-top", t.children(".header--navbar").height() / 2);
    var w = a(".BannerSlider");
    w.length &&
      w.bxSlider({
        mode: "vertical",
        speed: 800,
        auto: !0,
        touchEnabled: !1,
        controls: !1,
      });
    var x = a(".domain-ext--slider");
    x.length && x.owlCarousel({ items: 6, autoPlay: !0 });
    var y = a("#feedback");
    if (y.length) {
      var G,
        z = a(".feedback--nav-tabs"),
        A = z.find("li"),
        B = A.outerWidth(),
        C = z.find(".active"),
        E = (C.outerWidth(), z.children(".feedback--triangle")),
        F = C.position().left + B / 2 - 25;
      E.css("left", F),
        A.on("click", function () {
          (G = a(this)), (F = G.position().left + B / 2 - 25), E.css("left", F);
        });
    }
    var H = a(".clients--slider");
    H.length && H.owlCarousel({ items: 6, autoPlay: !0 });
    var I = a("#priceDetails");
    I.length &&
      b.width() < 992 &&
      (a(".price-details--item.body li").each(function () {
        var b = a(this),
          c = b.index(),
          d = b
            .parents(".price-details--item")
            .siblings(".price-details--item.head")
            .find("li")
            .eq(c)
            .text();
        b.prepend('<span class="labelText">' + d + "</span>");
      }),
      console.log("Hello World !"));
    var J = a("#priceDetails2"),
      K = a(".price-details-2--content td");
    J.length &&
      b.width() < 992 &&
      K.each(function () {
        var b = a(this);
        b.prepend('<span class="labelText">' + b.data("label") + "</span>");
      });
    var L = a("#map");
    if (L.length) {
      var O,
        P,
        Q,
        M = { lat: L.data("latitude"), lng: L.data("longitude") },
        N = L.data("zoom");
      (Q = [
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [{ color: "#ffffff" }, { lightness: 17 }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }, { lightness: 18 }],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }, { lightness: 16 }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#dedede" }, { lightness: 21 }],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            { visibility: "on" },
            { color: "#ffffff" },
            { lightness: 16 },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            { saturation: 36 },
            { color: "#333333" },
            { lightness: 40 },
          ],
        },
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [{ color: "#fefefe" }, { lightness: 20 }],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
        },
      ]),
        (O = new google.maps.Map(document.getElementById("map"), {
          center: M,
          zoom: N,
          scrollwheel: !1,
          disableDefaultUI: !0,
          zoomControl: !0,
          draggable: !1,
          styles: Q,
        })),
        (P = new google.maps.Marker({
          position: M,
          map: O,
          animation: google.maps.Animation.DROP,
        }));
    }
    var R = a("#twitterTimeline");
    R.length &&
      twttr.widgets.createTimeline(
        { sourceType: "profile", screenName: R.data("user-name") },
        document.getElementById("twitterTimeline")
      );
  }),
    b.on("load", function () {
      var b = a("#subscribe");
      if (b.length) {
        var c = b.find(".subscribe--content").outerHeight();
        b.css("height", c / 2);
      }
      var d = a("#preloader"),
        e = a(".banner--bg-animate"),
        f = function () {
          e.animate({ top: 0 }, 800);
        };
      d.length ? d.fadeOut("slow", f) : f();
    });
})(jQuery);
