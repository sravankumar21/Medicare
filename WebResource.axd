﻿var PersonalizationTracker = null; !function () { "use strict"; PersonalizationTracker = { _canTrack: !1, _pageId: null, _url: !1, track: function (e) { if (PersonalizationTracker._canTrack = e, PersonalizationTracker._canTrack) { if (!PersonalizationTracker._readCookie("sf-prs-ss")) { var r = 1e4 * Date.now() + 621355968e9; PersonalizationTracker._createCookie("sf-prs-ss", r) } if (!PersonalizationTracker._readCookie("sf-prs-lu")) { var a = window.top || window; PersonalizationTracker._createCookie("sf-prs-lu", a.location.href) } PersonalizationTracker._pageId && PersonalizationTracker.trackPage(PersonalizationTracker._pageId), PersonalizationTracker._url && PersonalizationTracker.trackUrl() } else PersonalizationTracker._createCookie("sf-prs-ss", "", -1), PersonalizationTracker._createCookie("sf-prs-lu", "", -1), PersonalizationTracker._createCookie("sf-prs-vp", "", -1), PersonalizationTracker._createCookie("sf-prs-vu", "", -1) }, trackPage: function (e) { if (this._pageId = e.replace(/-/g, "").toLowerCase(), this._canTrack) { var r = this._readCookie("sf-prs-vp") || ""; r && (r = this._base64ToHex(r)); for (var a = r.match(/.{1,32}/g) || [], n = !1, o = 0; o < a.length; o++)if (a[o] === this._pageId) { n = !0; break } n || (a.length > 49 && (a = a.slice(a.length - 49, a.length)), a.push(this._pageId), r = a.join(""), r = this._hexToBase64(r), this._createCookie("sf-prs-vp", r)) } }, trackUrl: function () { var e = (window.top || window).location.href, r = e.indexOf("#"); if (r > -1 && (e = e.substring(0, r)), this._url = e, this._canTrack) { var a = this._readCookie("sf-prs-vu") || ""; a && (a = this._lzwDecode(a)); for (var n = a.split("#") || [], o = !1, t = 0; t < n.length; t++)if (n[t] === this._url) { o = !0; break } if (!o) { for (n.push(this._url), 0 === (a = n.join("#")).indexOf("#") && (a = a.substring(1)), a = this._lzwEncode(a); a.length > 1e3;) { if (n.length < 2) return; 0 === (a = (n = n.slice(1, n.length)).join("#")).indexOf("#") && (a = a.substring(1)), a = this._lzwEncode(a) } this._createCookie("sf-prs-vu", a) } } }, _createCookie: function (e, r, a) { var n = ""; if (a) { var o = new Date; o.setTime(o.getTime() + 24 * a * 60 * 60 * 1e3); n = "; expires=" + o.toGMTString() } else n = ""; document.cookie = e + "=" + r + n + "; path=/;SameSite=Lax" }, _readCookie: function (e) { for (var r = e + "=", a = document.cookie.split(";"), n = 0; n < a.length; n++) { for (var o = a[n]; " " == o.charAt(0);)o = o.substring(1, o.length); if (0 == o.indexOf(r)) return o.substring(r.length, o.length) } return null }, _hexToBase64: function (e) { return btoa(String.fromCharCode.apply(null, e.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))) }, _base64ToHex: function (e) { for (var r = 0, a = atob(e.replace(/[ \r\n]+$/, "")), n = []; r < a.length; ++r) { var o = a.charCodeAt(r).toString(16); 1 === o.length && (o = "0" + o), n[n.length] = o } return n.join("") }, _lzwEncode: function (e) { for (var r, a = {}, n = (e || "").split(""), o = n[0], t = 256, i = [], s = 1; s < n.length; s++)null != a[o + (r = n[s])] ? o += r : (i.push(o.length > 1 ? a[o] : o.charCodeAt(0)), a[o + r] = t, o = r, t++); i.push(o.length > 1 ? a[o] : o.charCodeAt(0)); for (s = 0; s < i.length; s++)i[s] = String.fromCharCode(i[s]); var c = i.join(""); return encodeURI(c) }, _lzwDecode: function (e) { for (var r, a = {}, n = (decodeURI(e) || "").split(""), o = n[0], t = o, i = 256, s = [o], c = 1; c < n.length; c++) { var l = n[c].charCodeAt(0); r = l < 256 ? n[c] : a[l] ? a[l] : t + o, s.push(r), o = r.charAt(0), a[i] = t + o, t = r, i++ } return s.join("") } }, window.TrackingConsentManager ? (TrackingConsentManager.addEventListener("ConsentChanged", PersonalizationTracker.track), PersonalizationTracker.track(TrackingConsentManager.canTrackCurrentUser())) : PersonalizationTracker.track(!0); var e = document.getElementById("PersonalizationTracker"), r = JSON.parse(e.innerText); if (!r) throw new Error("Personalization tracker arguments are wrong!"); r.IsPagePersonalizationTarget && PersonalizationTracker.trackPage(r.PageId), r.IsUrlPersonalizationTarget && PersonalizationTracker.trackUrl() }();