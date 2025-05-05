"use strict";
cc._RF.push(module, 'e687eEGFg1G4Zc6xbvv64AP', 'lzstring');
// scripts/lzstring.js

"use strict";

var e = require;
var t = module;
"use strict";

var g,
    o,
    n,
    i,
    r,
    a = (g = String.fromCharCode, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", i = {}, r = {
  compressToBase64: function compressToBase64(e) {
    if (null == e) return "";

    var t = r._compress(e, 6, function (e) {
      return o.charAt(e);
    });

    switch (t.length % 4) {
      default:
      case 0:
        return t;

      case 1:
        return t + "===";

      case 2:
        return t + "==";

      case 3:
        return t + "=";
    }
  },
  decompressFromBase64: function decompressFromBase64(t) {
    return null == t ? "" : "" == t ? null : r._decompress(t.length, 32, function (e) {
      return s(o, t.charAt(e));
    });
  },
  compressToUTF16: function compressToUTF16(e) {
    return null == e ? "" : r._compress(e, 15, function (e) {
      return g(e + 32);
    }) + " ";
  },
  decompressFromUTF16: function decompressFromUTF16(t) {
    return null == t ? "" : "" == t ? null : r._decompress(t.length, 16384, function (e) {
      return t.charCodeAt(e) - 32;
    });
  },
  compressToUint8Array: function compressToUint8Array(e) {
    for (var t = r.compress(e), o = new Uint8Array(2 * t.length), n = 0, i = t.length; n < i; n++) {
      var a = t.charCodeAt(n);
      o[2 * n] = a >>> 8, o[2 * n + 1] = a % 256;
    }

    return o;
  },
  decompressFromUint8Array: function decompressFromUint8Array(e) {
    if (null == e) return r.decompress(e);

    for (var t = new Array(e.length / 2), o = 0, n = t.length; o < n; o++) {
      t[o] = 256 * e[2 * o] + e[2 * o + 1];
    }

    var i = [];
    return t.forEach(function (e) {
      i.push(g(e));
    }), r.decompress(i.join(""));
  },
  compressToEncodedURIComponent: function compressToEncodedURIComponent(e) {
    return null == e ? "" : r._compress(e, 6, function (e) {
      return n.charAt(e);
    });
  },
  decompressFromEncodedURIComponent: function decompressFromEncodedURIComponent(t) {
    return null == t ? "" : "" == t ? null : (t = t.replace(/ /g, "+"), r._decompress(t.length, 32, function (e) {
      return s(n, t.charAt(e));
    }));
  },
  compress: function compress(e) {
    return r._compress(e, 16, function (e) {
      return g(e);
    });
  },
  _compress: function _compress(e, t, o) {
    if (null == e) return "";

    for (var n, i, a, r, s = {}, c = {}, l = "", p = 2, d = 3, u = 2, f = [], h = 0, m = 0, y = 0; y < e.length; y += 1) {
      if (a = e.charAt(y), Object.prototype.hasOwnProperty.call(s, a) || (s[a] = d++, c[a] = !0), r = l + a, Object.prototype.hasOwnProperty.call(s, r)) l = r;else {
        if (Object.prototype.hasOwnProperty.call(c, l)) {
          if (l.charCodeAt(0) < 256) {
            for (n = 0; n < u; n++) {
              h <<= 1, m == t - 1 ? (m = 0, f.push(o(h)), h = 0) : m++;
            }

            for (i = l.charCodeAt(0), n = 0; n < 8; n++) {
              h = h << 1 | 1 & i, m == t - 1 ? (m = 0, f.push(o(h)), h = 0) : m++, i >>= 1;
            }
          } else {
            for (i = 1, n = 0; n < u; n++) {
              h = h << 1 | i, m == t - 1 ? (m = 0, f.push(o(h)), h = 0) : m++, i = 0;
            }

            for (i = l.charCodeAt(0), n = 0; n < 16; n++) {
              h = h << 1 | 1 & i, m == t - 1 ? (m = 0, f.push(o(h)), h = 0) : m++, i >>= 1;
            }
          }

          0 == --p && (p = Math.pow(2, u), u++), delete c[l];
        } else for (i = s[l], n = 0; n < u; n++) {
          h = h << 1 | 1 & i, m == t - 1 ? (m = 0, f.push(o(h)), h = 0) : m++, i >>= 1;
        }

        0 == --p && (p = Math.pow(2, u), u++), s[r] = d++, l = String(a);
      }
    }

    if ("" !== l) {
      if (Object.prototype.hasOwnProperty.call(c, l)) {
        if (l.charCodeAt(0) < 256) {
          for (n = 0; n < u; n++) {
            h <<= 1, m == t - 1 ? (m = 0, f.push(o(h)), h = 0) : m++;
          }

          for (i = l.charCodeAt(0), n = 0; n < 8; n++) {
            h = h << 1 | 1 & i, m == t - 1 ? (m = 0, f.push(o(h)), h = 0) : m++, i >>= 1;
          }
        } else {
          for (i = 1, n = 0; n < u; n++) {
            h = h << 1 | i, m == t - 1 ? (m = 0, f.push(o(h)), h = 0) : m++, i = 0;
          }

          for (i = l.charCodeAt(0), n = 0; n < 16; n++) {
            h = h << 1 | 1 & i, m == t - 1 ? (m = 0, f.push(o(h)), h = 0) : m++, i >>= 1;
          }
        }

        0 == --p && (p = Math.pow(2, u), u++), delete c[l];
      } else for (i = s[l], n = 0; n < u; n++) {
        h = h << 1 | 1 & i, m == t - 1 ? (m = 0, f.push(o(h)), h = 0) : m++, i >>= 1;
      }

      0 == --p && (p = Math.pow(2, u), u++);
    }

    for (i = 2, n = 0; n < u; n++) {
      h = h << 1 | 1 & i, m == t - 1 ? (m = 0, f.push(o(h)), h = 0) : m++, i >>= 1;
    }

    for (;;) {
      if (h <<= 1, m == t - 1) {
        f.push(o(h));
        break;
      }

      m++;
    }

    return f.join("");
  },
  decompress: function decompress(t) {
    return null == t ? "" : "" == t ? null : r._decompress(t.length, 32768, function (e) {
      return t.charCodeAt(e);
    });
  },
  _decompress: function _decompress(e, t, o) {
    for (var n, i, a, r, s, c, l = [], p = 4, d = 4, u = 3, f = "", h = [], m = {
      val: o(0),
      position: t,
      index: 1
    }, y = 0; y < 3; y += 1) {
      l[y] = y;
    }

    for (i = 0, r = Math.pow(2, 2), s = 1; s != r;) {
      a = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = t, m.val = o(m.index++)), i |= (0 < a ? 1 : 0) * s, s <<= 1;
    }

    switch (i) {
      case 0:
        for (i = 0, r = Math.pow(2, 8), s = 1; s != r;) {
          a = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = t, m.val = o(m.index++)), i |= (0 < a ? 1 : 0) * s, s <<= 1;
        }

        c = g(i);
        break;

      case 1:
        for (i = 0, r = Math.pow(2, 16), s = 1; s != r;) {
          a = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = t, m.val = o(m.index++)), i |= (0 < a ? 1 : 0) * s, s <<= 1;
        }

        c = g(i);
        break;

      case 2:
        return "";
    }

    for (n = l[3] = c, h.push(c);;) {
      if (m.index > e) return "";

      for (i = 0, r = Math.pow(2, u), s = 1; s != r;) {
        a = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = t, m.val = o(m.index++)), i |= (0 < a ? 1 : 0) * s, s <<= 1;
      }

      switch (c = i) {
        case 0:
          for (i = 0, r = Math.pow(2, 8), s = 1; s != r;) {
            a = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = t, m.val = o(m.index++)), i |= (0 < a ? 1 : 0) * s, s <<= 1;
          }

          l[d++] = g(i), c = d - 1, p--;
          break;

        case 1:
          for (i = 0, r = Math.pow(2, 16), s = 1; s != r;) {
            a = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = t, m.val = o(m.index++)), i |= (0 < a ? 1 : 0) * s, s <<= 1;
          }

          l[d++] = g(i), c = d - 1, p--;
          break;

        case 2:
          return h.join("");
      }

      if (0 == p && (p = Math.pow(2, u), u++), l[c]) f = l[c];else {
        if (c !== d) return null;
        f = n + n.charAt(0);
      }
      h.push(f), l[d++] = n + f.charAt(0), n = f, 0 == --p && (p = Math.pow(2, u), u++);
    }
  }
});

function s(e, t) {
  if (!i[e]) {
    i[e] = {};

    for (var o = 0; o < e.length; o++) {
      i[e][e.charAt(o)] = o;
    }
  }

  return i[e][t];
}

t.exports = a;

cc._RF.pop();