(window.webpackJsonp = window.webpackJsonp || []).push([[0], [, , , , , , , , , , , , , , , function (e, t, n) { }, , , , , , , function (e, t, n) { }, function (e, t, n) { }, function (e, t, n) { }, , , , function (e, t, n) { e.exports = n(49) }, , , , , function (e, t, n) { }, function (e, t, n) { }, function (e, t, n) { }, function (e, t, n) { }, function (e, t, n) { }, function (e, t, n) { }, function (e, t, n) { }, function (e, t, n) { }, , , , , , , , , function (e, t, n) { "use strict"; n.r(t); var a = n(0), o = n.n(a), r = n(12), i = n.n(r), l = (n(33), n(1)), c = n(2), u = n(3), s = n(5), m = n(4), p = n(6), d = (n(34), {});["success", "fail", "warning", "error"].forEach(function (e) { var t = e; d[e] = function (e) { return f(e, t) } }); var f = function (e, t) { var n = function (e) { var t = "icon-ico_commodity_defaul"; return "fail" !== e && "error" !== e || (t = "icon-cancel"), "warning" === e && (t = "icon-wenti"), t }, a = function (e) { var t = "#52c41a"; return "fail" !== e && "error" !== e || (t = "#f5222d"), "warning" === e && (t = "#f37e1a"), t }, r = function (e, t) { return "right" === e || "string" !== typeof e ? { toast: t ? "TW_UI_toastRightShow" : "TW_UI_toastRightHide", toastContainer: "TW_UI_toastRight" } : "top" === e ? { toast: t ? "TW_UI_toastTopShow" : "TW_UI_toastTopHide", toastContainer: "TW_UI_toastCenter" } : "left" === e ? { toast: t ? "TW_UI_toastLeftShow" : "TW_UI_toastLeftHide", toastContainer: "TW_UI_toastLeft" } : { toast: t ? "TW_UI_toastRightShow" : "TW_UI_toastRightHide", toastContainer: "TW_UI_toastRight" } }, d = function (i) { function d() { var e, n; Object(c.a)(this, d); for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)o[r] = arguments[r]; return (n = Object(s.a)(this, (e = Object(m.a)(d)).call.apply(e, [this].concat(o)))).state = { show: !0, visible: !0, timer: function () { }, _type_: t }, n.container = void 0, n } return Object(p.a)(d, i), Object(u.a)(d, [{ key: "componentDidMount", value: function () { var t = this; clearTimeout(this.state.timer); var n = Object(l.a)({}, d.defaultProps, e).duration; this.setState({ timer: setTimeout(function () { return t.setState({ show: !1 }, function () { return setTimeout(function () { return t.setState({ visible: !1 }, function () { return t.container && t.container.parentElement && t.container.parentElement.remove() }) }, 1e3) }) }, 1e3 * Number(n)) }) } }, { key: "componentWillUnmount", value: function () { clearTimeout(this.state.timer), this.setState = function () { } } }, { key: "render", value: function () { var t = this, i = Object(l.a)({}, d.defaultProps, { msg: "string" === typeof e ? e : "notification !!!", position: "right" }, e), c = this.state, u = c.show, s = void 0 === u || u, m = c.visible, p = c._type_, f = void 0 === p ? "success" : p, v = i.msg, h = i.position; return o.a.createElement("div", { ref: function (e) { return t.container = e } }, m && o.a.createElement("div", { "data-position": h }, o.a.createElement("div", { className: "toast " + r(h, s).toast }, o.a.createElement("i", { style: { color: a(f) }, className: "status iconfont " + n(f) }), o.a.createElement("span", null, v)))) } }]), d }(o.a.Component); d.defaultProps = { msg: "\u8fd9\u662f\u4e00\u4e2a\u901a\u77e5", duration: 3.5, position: "right" }, function () { var t = e.position, n = void 0 === t ? "right" : t, a = document.getElementById("TW_UI_notification_container_" + n); a || ((a = document.createElement("div")).id = "TW_UI_notification_container_" + n, document.getElementsByTagName("body")[0].appendChild(a)); var l = document.createElement("div"); l.className = "TW_UI_notification_mount_node", a.appendChild(l), a.className = "toastContainer " + r(n, !0).toastContainer; var c = a.getElementsByClassName("TW_UI_notification_mount_node"); i.a.render(o.a.createElement(d, null), c[c.length - 1]) }() }, v = d, h = (n(35), function (e) { return o.a.createElement("div", { className: "caseContainer" }, e.CaseList.map(function (e, t) { return o.a.createElement("div", { className: "caseItem", key: t }, e()) })) }), y = (n(36), function (e) { var t = e.intrudction, n = t.detail, a = t.apis; return o.a.createElement("div", { className: "TW_UI_componentDetail" }, o.a.createElement("div", { className: "TW_UI_componentDetailTop" }, o.a.createElement("div", null, n)), a && a.values && 0 !== a.values.length && o.a.createElement("div", { className: "TW_UI_componentApi" }, o.a.createElement("p", { className: "TW_UI_title" }, a && a.title), o.a.createElement("div", { className: "TW_UI_apiContainer" }, o.a.createElement("div", { className: "TW_UI_apiHeaher" }, o.a.createElement("div", null, "\u5c5e\u6027"), o.a.createElement("div", null, "\u8bf4\u660e"), o.a.createElement("div", null, "\u7c7b\u578b"), o.a.createElement("div", null, "\u9ed8\u8ba4\u503c")), a.values.map(function (e) { return o.a.createElement("div", { className: "TW_UI_apiItem", key: e.property }, o.a.createElement("div", { className: "TW_UI_apiContainer_" }, o.a.createElement("span", null, e.property)), o.a.createElement("div", { className: "TW_UI_apiContainer_ " }, o.a.createElement("span", null, e.summary)), o.a.createElement("div", { className: "TW_UI_apiType TW_UI_apiContainer_" }, o.a.createElement("span", null, e._type_)), o.a.createElement("div", { className: "TW_UI_apiDefaultValue TW_UI_apiContainer_" }, o.a.createElement("span", null, e.defaultValue))) })))) }), _ = (n(15), function (e) { var t, n = e.type, a = e.disabled, r = void 0 !== a && a, i = e.onClick, l = void 0 === i ? function () { } : i, c = e.children, u = void 0 === c ? "" : c, s = e.loading; switch (n) { case "primary": t = "primaryButton"; break; case "danger": t = "dangerButton"; break; case "warning": t = "warningButton"; break; case "success": t = "successButton"; break; default: t = "defaultButton" }return r ? o.a.createElement("div", { className: "disableButton componentButton" }, u) : s ? o.a.createElement("div", { className: "loadingButton componentButton" }, o.a.createElement("span", null), o.a.createElement("b", null, "Loading...")) : o.a.createElement("div", { className: "".concat(t, " componentButton"), onClick: l }, u) }), g = { path: "/notification", component: function () { var e = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "right"; v.success({ msg: "success ", position: e }) }, t = function () { v.fail({ msg: "\u9519\u8bef\u63d0\u793a!!", duration: 1 }) }, n = function () { v.warning({ msg: "\u8b66\u544a!" }) }, a = [function () { return o.a.createElement(_, { onClick: function () { return e() } }, "\u6210\u529f\u7c7b\u901a\u77e5") }, function () { return o.a.createElement(_, { onClick: n, type: "warning" }, "\u8b66\u544a\u7c7b\u901a\u77e5") }, function () { return o.a.createElement(_, { type: "danger", onClick: t }, "\u9519\u8bef\u7c7b\u901a\u77e5") }, function () { return o.a.createElement(_, { onClick: function () { return e("top") } }, "top") }, function () { return o.a.createElement(_, { onClick: function () { return e("left") } }, "left") }]; return o.a.createElement("div", null, o.a.createElement(h, { CaseList: a }), o.a.createElement(y, { intrudction: { detail: "\n        import { Notification } from 'three-work-ui'\n        Notification.success({ msg: 'success !!!' })\n        Notification.success('success !!!')\n        Notification.fail({ \n            msg: 'fail !!!',\n            duration: 1\n        })", apis: { title: "Notification", values: [{ property: "Notification.api", summary: "\u901a\u77e5\u7c7b\u578b\uff0c\u53ef\u9009\u503c\uff1asuccess,warning,error,fail", _type_: "String", defaultValue: "\u5fc5\u9009" }, { property: "api({ msg, position, duration })", summary: "\u901a\u77e5\u6d88\u606f\uff0c\u901a\u77e5\u4f4d\u7f6e\uff0c\u901a\u77e5\u65f6\u957f", _type_: "String,String", defaultValue: "success, right, 3" }] } } })) }, name: "\u901a\u77e5 - Notification", author: "Ada" }, b = function (e) { function t() { var e, n; Object(c.a)(this, t); for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)o[r] = arguments[r]; return (n = Object(s.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(o)))).state = { loading: !1, disabled: !1 }, n.toggleDisabled = function (e) { return n.setState(function (e) { return { disabled: !e.disabled } }) }, n.toggleLoading = function (e) { return n.setState(function (e) { return { loading: !e.loading } }) }, n } return Object(p.a)(t, e), Object(u.a)(t, [{ key: "render", value: function () { var e = this, t = this.state, n = t.loading, a = t.disabled; return o.a.createElement("div", { className: "TW_UI_buttonTest" }, o.a.createElement("p", null, "\u63a7\u5236Button\uff1a"), o.a.createElement("span", { style: { marginRight: "20px" } }, o.a.createElement(_, { onClick: function () { return e.toggleDisabled() } }, "toggle disabled")), o.a.createElement(_, { onClick: function () { return e.toggleLoading() } }, "toggle loading"), o.a.createElement("div", { style: { marginTop: "20px" } }, o.a.createElement(_, { loading: n, disabled: a }, "test"))) } }]), t }(o.a.PureComponent), E = { path: "/button", component: function () { var e = [function () { return o.a.createElement(_, { onClick: function () { v.success({ msg: "\u60a8\u70b9\u51fb\u4e86Default\u6309\u94ae" }) } }, "Default") }, function () { return o.a.createElement(_, { type: "primary", onClick: function () { v.success({ msg: "\u60a8\u70b9\u51fb\u4e86Primary\u6309\u94ae" }) } }, "Primary") }, function () { return o.a.createElement(_, { type: "success", onClick: function () { v.success({ msg: "\u60a8\u70b9\u51fb\u4e86Success\u6309\u94ae" }) } }, "Success") }, function () { return o.a.createElement(_, { type: "warning", onClick: function () { v.warning({ msg: "\u60a8\u70b9\u51fb\u4e86Warning\u6309\u94ae" }) } }, "Warning") }, function () { return o.a.createElement(_, { type: "danger", onClick: function () { v.fail({ msg: "\u60a8\u70b9\u51fb\u4e86Error\u6309\u94ae" }) } }, "Error") }, function () { return o.a.createElement(_, { loading: !0 }) }, function () { return o.a.createElement(_, { disabled: !0 }, "Disabled") }], t = [function () { return o.a.createElement(b, null) }]; return o.a.createElement("div", { className: "container" }, o.a.createElement(h, { CaseList: e }), o.a.createElement(h, { CaseList: t }), o.a.createElement(y, { intrudction: { detail: " import { Button } from 'three-work-ui'", apis: { title: "Button", values: [{ property: "type", summary: "\u6309\u94ae\u7684\u7c7b\u578b\uff0c\u53ef\u9009\u503c\uff1adefault, danger, warning, primary, success", _type_: "String", defaultValue: "default" }, { property: "disabled", summary: "\u6309\u94ae\u7684\u7981\u7528\u72b6\u6001\uff0c\u53ef\u9009\u503c\uff1atrue | false", _type_: "Boolean", defaultValue: "false" }] } } })) }, name: "\u6309\u94ae - Button", author: "Zxy" }, C = (n(22), function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "TW_UI_common", n = document.getElementById("__wrapComponent__" + t); if (n) { var a = document.createElement("div"); n.appendChild(a) } if (!n || !n.children || !n.children[0]) { var o = document.createElement("span"), r = document.createElement("div"); o.appendChild(r), o.id = "__wrapComponent__" + t, document.getElementsByTagName("body")[0].appendChild(o) } var l = document.getElementById("__wrapComponent__" + t); i.a.render("function" === typeof e ? e() : e, l.children[l.children.length - 1]) }), T = function (e) { return e.parentNode.remove() }, k = {};["show", "hide"].forEach(function (e) { var t = e; k[e] = function (e) { return function (e, t) { var n = { top: "300px", transform: "scale3d(0.8,0.8,0.8) translateX(-50%)" }, a = { transform: "scale3d(1,1,1) translateX(-50%)", opacity: "1", top: "100px" }, r = function (r) { function i() { var e, t; Object(c.a)(this, i); for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)a[o] = arguments[o]; return (t = Object(s.a)(this, (e = Object(m.a)(i)).call.apply(e, [this].concat(a)))).state = { visible: !1, show: !1 }, t.close = function () { t.setState({ show: !1 }, function () { setTimeout(function () { t.setState({ visible: !1 }, function () { return T(t.container) }) }, 300) }) }, t } return Object(p.a)(i, r), Object(u.a)(i, [{ key: "componentDidMount", value: function () { var e = this; this.setState({ visible: "show" === t, show: !1 }, function () { setTimeout(function () { e.setState({ show: !0 }) }, 0) }) } }, { key: "render", value: function () { var t = this, r = Object(l.a)({ title: "Basic Modal", width: "500", content: "Content of the modal" }, e), i = r.title, c = r.width, u = r.content, s = r.footer, m = this.state, p = m.visible, d = m.show ? a : n; return o.a.createElement("div", { ref: function (e) { return t.container = e } }, p && o.a.createElement("div", { className: "TW_UI_modalContainer" }, o.a.createElement("div", { className: "TW_UI_modalContainer_float", onClick: this.close }), o.a.createElement("div", { className: "TW_UI_modalDetail", style: Object(l.a)({ width: isNaN(c) ? c : c + "px" }, d) }, o.a.createElement("div", { className: "TW_UI_modalTitle" }, o.a.createElement("b", null, i), o.a.createElement("span", { className: "status iconfont icon-quxiao", onClick: this.close })), o.a.createElement("div", { className: "TW_UI_modalContent" }, u), s ? o.a.createElement("div", { className: "TW_UI_modalFooter" }, s) : o.a.createElement("div", { className: "TW_UI_modalFooter" }, o.a.createElement(_, { onClick: this.close }, "\u53d6\u6d88"), o.a.createElement(_, { type: "primary" }, "\u786e\u5b9a"))))) } }]), i }(o.a.PureComponent); C(function () { return o.a.createElement(r, null) }, "modal") }(e, t) } }); var I = k, w = { path: "/Modal", component: function () { var e = function () { I.show({ title: "Test Modal", width: "500", content: o.a.createElement("div", null, "Test of the Modal Content"), footer: null }) }, t = [function () { return o.a.createElement(_, { type: "primary", onClick: e }, "Open Modal") }]; return o.a.createElement("div", { className: "container" }, o.a.createElement(h, { CaseList: t }), o.a.createElement(y, { intrudction: { detail: " import { Modal } from 'three-work-ui'", apis: { title: "Modal", values: [{ property: "Modal.api", summary: "\u5bf9\u8bdd\u6846\u662f\u5426\u663e\u793a\uff0c\u53ef\u9009\u503c\uff1ashow, hide", _type_: "String", defaultValue: "hide" }, { property: "api({ title, width, content, footer })", summary: "title: \u6807\u9898\uff0cwidth: \u5bf9\u8bdd\u6846\u5bbd\u5ea6, content: \u5185\u5bb9\uff0cfooter: \u5e95\u90e8\u5185\u5bb9", _type_: "String,String,(String | ReactNode),(String | ReactNode)", defaultValue: "Basic Modal, 500, Content of the modal, <Button>\u53d6\u6d88</Button><Button>\u786e\u5b9a</Button> " }] } } })) }, name: "\u5bf9\u8bdd\u6846 - Modal", author: "Zxy" }, W = (n(23), function (e, t) { e.stopPropagation(), e.preventDefault(); var n = { left: e.clientX - 40 + "px", top: e.clientY - 110 + "px" }, a = function (e) { function t() { var e, a; Object(c.a)(this, t); for (var r = arguments.length, i = new Array(r), u = 0; u < r; u++)i[u] = arguments[u]; return (a = Object(s.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(i)))).container = void 0, a.state = { visible: t.extendsProps.visible || !1, show: !1, timeout: function () { } }, a.handleClick = function (e) { a.setState({ show: !1 }, function () { return setTimeout(function () { return a.setState({ visible: !1 }, function () { return "close" === e && T(a.container) }) }, 300) }), "close" === e ? t.extendsProps.onCancel && t.extendsProps.onCancel() : t.extendsProps.onConfirm && t.extendsProps.onConfirm() }, a.renderContainer = function () { var e = a.state.show ? "TW_UI_popconfirmShow" : "TW_UI_popconfirmHide"; return o.a.createElement("div", null, o.a.createElement("div", { className: "TW_UI_popconfirmMask", onClick: function () { return a.handleClick("close") } }), o.a.createElement("div", { className: "TW_UI_popconfirmContainer " + e, style: Object(l.a)({}, n) }, o.a.createElement("div", { className: "_TW_UI_popconfirmContext" }, o.a.createElement("span", { className: "TW_UI_popconfirmIcon" }, o.a.createElement("i", { className: "icon-yiwen iconfont" })), t.extendsProps.title), o.a.createElement("div", { className: "TW_UI_popconfirmFooter" }, o.a.createElement("span", { onClick: function () { return a.handleClick("close") } }, t.extendsProps.cancelText), o.a.createElement("span", { onClick: function () { return a.handleClick("submit") } }, t.extendsProps.okText)))) }, a } return Object(p.a)(t, e), Object(u.a)(t, [{ key: "componentDidMount", value: function () { var e = this, t = this.state.timeout; clearTimeout(t), this.setState({ timeout: setTimeout(function () { return e.setState({ show: !0 }) }, 0) }) } }, { key: "componentWillUnmount", value: function () { this.setState(function () { }) } }, { key: "render", value: function () { var e = this, t = this.state.visible; return o.a.createElement("div", { ref: function (t) { return e.container = t } }, t && this.renderContainer()) } }]), t }(o.a.Component); a.extendsProps = Object(l.a)({ onConfirm: function () { return console.log("onConfirm") }, onCancel: function () { return console.log("onCancel") }, title: "delete title", okText: "ok", cancelText: "no", visible: !0 }, t), C(function () { return o.a.createElement(a, null) }, "popconfirm") }), N = function (e) { return o.a.createElement("div", null, o.a.createElement("div", { className: "TW_UI_popConfirmChildren", onClick: function (t) { return W(t, e) } }, e.children || "")) }, U = { path: "/popconfirm", component: function () { var e = [function () { return o.a.createElement("div", { style: { marginTop: "100px" } }, o.a.createElement(N, { onConfirm: function () { return v.success({ msg: "delete something" }) }, title: "Are you sure to delete ?" }, o.a.createElement("a", { href: "void 0" }, "delete"))) }, function () { return o.a.createElement("div", { style: { marginTop: "100px" } }, o.a.createElement(N, { onConfirm: function () { return v.success({ msg: "delete something" }) }, title: "\u81ea\u5b9a\u4e49\u6587\u6848\u5220\u9664 ?", okText: "\u786e\u5b9a", cancelText: "\u53d6\u6d88" }, o.a.createElement("p", null, "\u81ea\u5b9a\u4e49\u6587\u6848\u5220\u9664"))) }]; return o.a.createElement("div", { className: "container" }, o.a.createElement(h, { CaseList: e }), o.a.createElement(y, { intrudction: { detail: "           import { Popconfirm } from 'three-work-ui'\n            ReactDOM.render(\n                <Popconfirm \n                    title=\"Are you sure to delete ?\" \n                    onConfirm={Notification.success({ msg: 'delete something '})} \n                >\n                    <a>Delete</a>\n                </Popconfirm>,\n            mountNode\n            );\n        ", apis: { title: "Popconfirm", values: [{ property: "onConfirm", summary: "\u786e\u8ba4\u56de\u8c03", _type_: "function", defaultValue: "void" }, { property: "onCancel", summary: "\u53d6\u6d88\u56de\u8c03", _type_: "function", defaultValue: "void" }, { property: "title", summary: "\u6587\u6848\u63d0\u793a", _type_: "string", defaultValue: "Are you sure to delete ?" }, { property: "okText", summary: "\u786e\u8ba4\u6587\u6848", _type_: "string", defaultValue: "ok" }, { property: "cancelText", summary: "\u53d6\u6d88\u6587\u6848", _type_: "string", defaultValue: "cancel" }] } } })) }, name: "\u6c14\u6ce1\u786e\u8ba4 - Popconfirm", author: "Ada" }, O = (n(37), function (e) { function t(e) { var n; Object(c.a)(this, t), (n = Object(s.a)(this, Object(m.a)(t).call(this, e))).input = void 0, n.setInputRef = function (e) { n.input = e }, n.setValue = function () { n.props.value || n.setState({ value: n.input.value }, function () { return n.props.onChange && n.props.onChange(n.input.value) }) }; var a = e.value || e.defaultValue || ""; return n.state = { value: a }, n } return Object(p.a)(t, e), Object(u.a)(t, [{ key: "check", value: function (e, n) { return t.availableValues[e].includes(n) ? n : "size" === e ? "default" : "text" } }, { key: "renderInput", value: function () { var e = Object(l.a)({}, t.defaultProps, this.props), n = e.size, o = e.type, r = e.placeholder, i = void 0 === r ? "" : r, c = e.disabled, u = this.state.value; return a.createElement("input", { type: o, value: u, disabled: c, placeholder: i, ref: this.setInputRef, className: "TW_UI_input TW_UI_input_".concat(this.check("size", n), " TW_UI_input_").concat(this.check("type", o)), onChange: this.setValue }) } }, { key: "render", value: function () { return a.createElement("div", { className: "TW_UI_inputContainer" }, this.renderInput()) } }], [{ key: "getDerivedStateFromProps", value: function (e, t) { return "value" in e && e.value !== t.value ? { value: e.value } : null } }]), t }(a.Component)); O.availableValues = { size: ["default", "small", "large"], type: ["text", "password"] }, O.defaultProps = { defaultValue: "", size: "default", type: "text", disabled: !1 }; var j = O, x = { path: "/input", component: function () { var e = [function () { return o.a.createElement(j, { type: "text", placeholder: "size-small", size: "small", defaultValue: "small", onChange: function (e) { return console.log(e) } }) }, function () { return o.a.createElement(j, { type: "text", placeholder: "size-default", size: "default", onChange: function (e) { return console.log(e) } }) }, function () { return o.a.createElement(j, { type: "text", placeholder: "disabled", disabled: !0, size: "default", onChange: function (e) { return console.log(e) } }) }, function () { return o.a.createElement(j, { type: "text", placeholder: "size-large", size: "large", onChange: function (e) { return console.log(e) } }) }]; return o.a.createElement("div", null, o.a.createElement(h, { CaseList: e }), o.a.createElement(y, { intrudction: { detail: "\n        import { Input } from 'three-work-ui'\n\n        <Input \n            type='text' \n            placeholder='size-small' \n            size='small' \n            defaultValue='12321' \n            onChange={value => console.log(value)} \n        />", apis: { title: "Input", values: [{ property: "type", summary: "Input\u7c7b\u578b", _type_: '"text" | "password" ', defaultValue: "text" }, { property: "size", summary: "Input\u5927\u5c0f", _type_: '"small" | "default" | "large"', defaultValue: "default" }, { property: "value", summary: "Input\u503c", _type_: "string", defaultValue: "\u65e0" }, { property: "defaultValue", summary: "Input\u9ed8\u8ba4\u503c", _type_: "string", defaultValue: "\u65e0" }, { property: "placeholder", summary: "placeholder", _type_: "string", defaultValue: "\u65e0" }, { property: "onChange", summary: "\u6539\u53d8\u65f6\u56de\u8c03", _type_: "func", defaultValue: "value => console.log(value)" }] } } })) }, name: "\u8f93\u5165\u6846 - Input", author: "Ada" }, P = n(14), S = (n(38), function (e, t) { return e.map(function (e) { var n = t === (e instanceof Object ? e.value : e); return e instanceof Object ? Object(l.a)({}, e, { current: n }) : { label: e, value: e, current: n, disabled: !1 } }) }), V = function (e) { function t(e) { var n; Object(c.a)(this, t), (n = Object(s.a)(this, Object(m.a)(t).call(this, e))).selectOption = void 0, n.refForWidth = void 0, n.toggleVisible = function (e, t) { t.stopPropagation && t.stopPropagation(), !1 === e && n.setState({ visible: e }) }, n.setValue = function (e, t, a) { if (a.stopPropagation && a.stopPropagation(), !(t || e === n.state.value || n.state.value && n.state.value.includes(e))) { var o = n.state.options, r = n.props.mutiple, i = !0, l = !1, c = void 0; try { for (var u, s = o[Symbol.iterator](); !(i = (u = s.next()).done); i = !0) { var m = u.value; m.current = m.value === e } } catch (p) { l = !0, c = p } finally { try { i || null == s.return || s.return() } finally { if (l) throw c } } n.setState({ value: r ? n.state.value instanceof Array ? [].concat(Object(P.a)(n.state.value), [e]) : [e] : e, options: Object(P.a)(o) }, function () { !r && n.selectOption.blur(), n.props.onChange && n.props.onChange(n.state.value) }) } }, n.handleClick = function (e) { e.stopPropagation && e.stopPropagation(); var t = n.state.visible; n.setState({ visible: !t }), t && n.selectOption.blur() }, n.deleteItem = function (e, t) { e.stopPropagation && e.stopPropagation(); for (var a = n.state.value, o = n.props.onChange, r = -1, i = 0; i < a.length; i++)if (a[i] === t) { r = i; break } 1 === a.length ? n.setState({ value: void 0 }) : a instanceof Array && -1 !== r && a.splice(r, 1) && n.setState({ value: Object(P.a)(a) }), o && o(n.state.value || []) }, n.renderOptions = function () { var e = n.state, t = e.value, o = e.visible, r = e.options, i = function (e) { if (r) { var t = !0, n = !1, a = void 0; try { for (var o, i = r[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) { var l = o.value; if (l.value === e) return l.label } } catch (c) { n = !0, a = c } finally { try { t || null == i.return || i.return() } finally { if (n) throw a } } } return "" }, c = n.props, u = c.style, s = void 0 === u ? {} : u, m = c.width, p = c.placeholder, d = c.disabled, f = void 0 !== d && d, v = c.size, h = void 0 === v ? "default" : v, y = c.mutiple, _ = void 0 !== y && y, g = m ? "number" === typeof m ? m + "px" : m : "100%", b = p && (!t || t.length && 0 === t.length), E = n.refForWidth && n.refForWidth.offsetWidth; return a.createElement("div", { className: "TW_UI_selectWrap", style: { height: "".concat("small" === h ? "27px" : "default" === h ? "32px" : "35px") }, ref: function (e) { return n.refForWidth = e } }, a.createElement("div", { className: "".concat(_ && "TW_UI_selectContainerMutiple", " TW_UI_selectContainer ").concat(f ? "TW_UI_selectdisabled" : "TW_UI_selectDefault", " TW_UI_selectSize_").concat(h), style: Object(l.a)({ width: g }, s), onClick: function (e) { return !f && n.handleClick(e) }, tabIndex: 1, ref: function (e) { return n.selectOption = e }, onFocus: function (e) { return !f && n.toggleVisible(!0, e) }, onBlur: function (e) { return !f && n.toggleVisible(!1, e) } }, a.createElement("span", { className: "TW_UI_selectValue" }, t && _ ? t instanceof Array && 0 !== t.length && t.map(function (e) { return a.createElement("div", { className: "TW_UI_selectMutipleItem", key: e, onClick: function (e) { return e.stopPropagation() } }, a.createElement("span", { onClick: function (e) { return e.stopPropagation() } }, i(e)), a.createElement("span", { className: "TW_UI_selectMutipleDelete", onClick: function (t) { return n.deleteItem(t, e) } }, a.createElement("i", { className: "iconfont icon-quxiao" }))) }) : i(t), b && a.createElement("div", { className: "TW_UI_selectPlaceholder" }, p)), a.createElement("div", { className: "TW_UI_selectionApi" }), o && a.createElement("div", { className: "TW_UI_selectOptionsContainer", style: Object(l.a)({}, s, { width: E + 20 + "px" }) }, r && r.map(function (e) { return a.createElement("div", { onClick: function (t) { return n.setValue(e.value, e.disabled || !1, t) }, className: "TW_UI_optionItem ".concat(e.current || _ && t && t.includes(e.value) ? "TW_UI_optionItemCurrent" : "TW_UI_optionItemDefault", " ").concat(e.disabled ? "TW_UI_optionItemDisabled" : "TW_UI_optionItemDefault"), key: e.value }, e.label) })))) }, n.render = function () { return n.renderOptions() }; var o = e.value || e.defaultValue || void 0, r = e.options ? e.options : ["option1", "option2", "option3"], i = S(r, o); return n.state = { value: o ? e.mutiple ? o instanceof Array ? o : [o] : o : void 0, options: i, visible: !1 }, n } return Object(p.a)(t, e), Object(u.a)(t, null, [{ key: "getDerivedStateFromProps", value: function (e, t) { return "options" in e && e.options && 0 !== e.options.length && JSON.stringify(e.options) !== JSON.stringify(t.options) ? Object(l.a)({}, t, { options: S(e.options, e.value || t.value) }) : "value" in e && e.value !== t.value ? Object(l.a)({}, t, { value: e.value }) : null } }]), t }(a.Component); V.defaultProps = { onChange: function (e) { return console.log(e) } }; var B = V, A = { path: "/select", component: function () { var e = ["twui", "three", "work", "ui", "three-wprk-ui-ver"], t = [{ label: "option1", value: "option1", disabled: !0 }, { label: "option2", value: "option2", disabled: !1 }, { label: "option3", value: "option3" }], n = [function () { return o.a.createElement(B, { size: "small", options: t, defaultValue: "option2", onChange: function (e) { return console.log("get value", e) } }) }, function () { return o.a.createElement(B, { disabled: !0, size: "default", options: t, defaultValue: "option2", onChange: function (e) { return console.log("get value", e) } }) }, function () { return o.a.createElement(B, { size: "large", options: t, defaultValue: "option2", onChange: function (e) { return console.log("get value", e) } }) }]; return o.a.createElement("div", null, o.a.createElement(h, { CaseList: n }), o.a.createElement(h, { CaseList: [function () { return o.a.createElement("div", { style: { width: "280px" } }, o.a.createElement(B, { mutiple: !0, placeholder: "\u8bf7\u9009\u62e9", style: { width: "280px" }, options: e, onChange: function (e) { return console.log("get value", e) } })) }] }), o.a.createElement(y, { intrudction: { detail: "\n        import { Select } from 'three-work-ui'\n        const options = [1, 2, 3] // [ { value: 1, label: '\u9009\u9879\u4e00' } ]\n        <Select  \n            options={options} \n            placeholder='\u8bf7\u9009\u62e9'\n            value={1} \n            defaultValue='12321'\n            size='large'\n            mutiple={true}\n            onChange={value => console.log(value)} \n        />", apis: { title: "Select", values: [{ property: "options", summary: "\u9009\u9879\uff0c\u6570\u7ec4,item\u4e3a{label: string, value: any, disabled: boolean} \u6216 string", _type_: '"Array<{} | string>" ', defaultValue: "['option1', 'option2', 'option3']" }, { property: "mutiple", summary: "\u591a\u9009", _type_: "boolean", defaultValue: "false" }, { property: "size", summary: "\u5927\u5c0f", _type_: '"small" | "default" | "large"', defaultValue: "default" }, { property: "value", summary: "Select\u503c\uff0c\u4f1a\u8986\u76d6defaultValue", _type_: "string", defaultValue: "\u65e0" }, { property: "defaultValue", summary: "Select\u9ed8\u8ba4\u503c", _type_: "any", defaultValue: "\u65e0" }, { property: "width", summary: "Select\u5bbd\u5ea6", _type_: "number | string", defaultValue: "100%" }, { property: "placeholder", summary: "placeholder", _type_: "string", defaultValue: "\u65e0" }, { property: "onChange", summary: "\u6539\u53d8\u65f6\u56de\u8c03", _type_: "func", defaultValue: "value => console.log(value)" }] } } })) }, name: "\u9009\u62e9\u5668 - Select", author: "Ada" }, D = (n(24), function (e) { function t() { var e, n; Object(c.a)(this, t); for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++)r[i] = arguments[i]; return (n = Object(s.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(r)))).state = { width: "0" }, n.panelContainer = void 0, n.renderPanel = function () { var e = n.props, t = e.tabs, o = e.activePanel, r = n.state.width; return a.createElement("div", { className: "TW_UI_tabPanelWrap", style: { width: r, transform: "translate3d(-".concat(o && o * parseInt(r) / t.length, "px, 0, 0)") } }, 0 !== t.length && t.map(function (e) { return a.createElement("div", { className: "TW_UI_tabPanelItem", key: e.key }, e.content) })) }, n } return Object(p.a)(t, e), Object(u.a)(t, [{ key: "componentDidMount", value: function () { var e = this.state.width, t = this.props.tabs.length; "0" === e && this.setState({ width: this.panelContainer.offsetWidth * t + "px" }) } }, { key: "render", value: function () { var e = this; return a.createElement("div", { className: "TW_UI_tabPanelContainer", ref: function (t) { return e.panelContainer = t } }, this.renderPanel()) } }]), t }(a.Component)), z = function (e) { function t(e) { var n; Object(c.a)(this, t), (n = Object(s.a)(this, Object(m.a)(t).call(this, e))).tabContainer = void 0, n.saveCurrentTab = function (e) { if (e) for (var t = 0, a = e.children.length; t < a; t++) { var o = e.children[t]; if (/TW_UI_tabCurrent_true/.test(o.className)) { n.setState({ currentTab: { left: o.offsetLeft + "px", width: o.clientWidth + "px", index: Number(o.getAttribute("data-index")) || 0 } }); break } } }, n.handleClickTab = function (e) { n.props.onChange && n.props.onChange(e), n.setState({ activeKey: e }, function () { return n.saveCurrentTab(n.tabContainer) }) }, n.renderHeader = function () { var e = n.state, t = e.tabs, o = e.activeKey, r = e.currentTab, i = {}; return r instanceof Object && (i = { transform: "translate3d(".concat(r.left, ", 0, 0)"), width: r.width }), a.createElement("div", { className: "TW_UI_tabHeaderContainer", ref: function (e) { return n.tabContainer = e } }, 0 !== t.length && t.map(function (e, t) { return a.createElement("div", { onClick: function () { return !e.disabled && e.key !== o && n.handleClickTab(e.key) }, className: "TW_UI_tabItem TW_UI_tabCurrent_".concat(e.key === o, " ").concat(e.disabled ? "TW_UI_tabItemDisabled" : "TW_UI_tabItemDefault"), key: e.key, "data-index": t }, e.title) }), a.createElement("div", { className: "TW_UI_tabAnchor", style: Object(l.a)({}, i) })) }, n.rendderPanel = function () { var e = n.state, o = e.tabs, r = e.currentTab; return a.createElement(t.Panel, { tabs: o, activePanel: r instanceof Object && r.index }) }; var o = e.activeKey || e.defaultActiveKey || void 0, r = n.props.children, i = []; return r instanceof Array && r.forEach(function (e) { e && e instanceof Object && "type" in e && i.push({ key: e.key, title: e.props.title || "", disabled: e.props.disabled || !1, content: e.props.children }) }), n.state = { activeKey: o, tabs: i, currentTab: !1 }, n } return Object(p.a)(t, e), Object(u.a)(t, [{ key: "componentDidMount", value: function () { this.tabContainer && this.saveCurrentTab(this.tabContainer) } }, { key: "render", value: function () { return a.createElement("div", null, this.renderHeader(), this.rendderPanel()) } }], [{ key: "getDerivedStateFromProps", value: function (e, t) { return "activeKey" in e && t.activeKey !== e.activeKey ? { activeKey: e.activeKey } : null } }]), t }(a.Component); z.Panel = D; var K = z, M = K.Panel, L = function (e) { function t() { var e, n; Object(c.a)(this, t); for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)o[r] = arguments[r]; return (n = Object(s.a)(this, (e = Object(m.a)(t)).call.apply(e, [this].concat(o)))).state = { activeKey: "1" }, n.onChange = function (e) { console.log("activeKey", e), n.setState({ activeKey: e }) }, n } return Object(p.a)(t, e), Object(u.a)(t, [{ key: "render", value: function () { var e = this, t = this.state.activeKey; return o.a.createElement("div", { style: { width: "500px" } }, o.a.createElement(K, { activeKey: t, onChange: function (t) { return e.onChange(t) } }, o.a.createElement(M, { title: "tab1", key: "1", disabled: !0 }, "tab1 content"), o.a.createElement(M, { title: "title2", key: "2" }, "title2 content"), o.a.createElement(M, { title: "tab3", key: "3" }, "tab3 content"))) } }]), t }(o.a.Component), R = K.Panel, F = { path: "/tabs", component: function () { return o.a.createElement("div", null, o.a.createElement("div", { style: { width: "600px" } }, o.a.createElement(K, { defaultActiveKey: "1" }, o.a.createElement(R, { title: "tab1", key: "1" }, "tab1 content"), o.a.createElement(R, { title: "title2", key: "2" }, "title2 content"), o.a.createElement(R, { title: "tab3", key: "3" }, "tab3 content"))), o.a.createElement(L, null), o.a.createElement(y, { intrudction: { detail: "\n        import { Tab } from 'three-work-ui'\n        const { Panel } = Tab\n        <Tab activeKey={activeKey} onChange={activeKey => this.onChange(activeKey)}>\n            <Panel title='tab1' key='1' disabled={true}>tab1 content</Panel>\n            <Panel title='title2' key='2'>title2 content</Panel>\n            <Panel title='tab3' key='3'>tab3 content</Panel>\n        </Tab>", apis: { title: "Tab", values: [{ property: "activeKey", summary: "\u6fc0\u6d3b\u9762\u677f\u7684key", _type_: '"string | number" ', defaultValue: "\u65e0" }, { property: "defaultActiveKey", summary: "\u9ed8\u8ba4\u6fc0\u6d3b\u9762\u677f", _type_: '"string | number" ', defaultValue: "\u65e0" }] } } }), o.a.createElement(y, { intrudction: { detail: "", apis: { title: "Tab.Panel", values: [{ property: "title", summary: "\u9762\u677f\u6807\u9898", _type_: "ReactNode", defaultValue: "\u65e0" }, { property: "key", summary: "\u9762\u677f\u7684key", _type_: "any", defaultValue: "\u65e0" }, { property: "disabled", summary: "\u9762\u677f\u7981\u7528\u72b6\u6001", _type_: "boolean", defaultValue: "false" }] } } })) }, name: "\u9009\u9879\u5361 - Tab", author: "Ada" }, H = (n(39), { config: [{ path: "/twui", component: function () { return o.a.createElement("div", { className: "container" }, o.a.createElement("h1", null, "three-work-ui"), o.a.createElement("div", { className: "logo" }, o.a.createElement("i", { className: "icon-uicn iconfont" }), o.a.createElement("div", { className: "tw_ui" }, "tw")), o.a.createElement("div", { className: "TW_UI_detail" }, o.a.createElement("div", null, "\u4e00\u4e2a\u778e\u6363\u9f13\u7684UI\u7ec4\u4ef6\u5e93\uff0c\u4e00\u5207\u4ee5\u5a31\u4e50\u4e3a\u4e3b\uff0c\u5c01\u88c5\u4e3a\u8f85"), o.a.createElement("div", null, "\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8......")), o.a.createElement("a", { href: "https://github.com/AdaXH/three-work-ui", target: "blank", className: "TW_UI_github" }, o.a.createElement("i", { className: "icon-github iconfont" }), o.a.createElement("span", null, "Github"))) }, name: "twui\u4ecb\u7ecd" }, E, g, w, U, x, A, F] }), J = n(17), X = n(11); n(40), Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); i.a.render(o.a.createElement(function (e) { return window.onload = function () { !function () { var e = document.createElement("link"); e.href = "https://at.alicdn.com/t/font_1146631_2i11x2hx8ii.css", e.rel = "stylesheet", document.head.appendChild(e) }() }, o.a.createElement("div", { className: "componentContainer" }, o.a.createElement(J.a, null, o.a.createElement("span", { style: { display: "flex" } }, o.a.createElement("div", { className: "componentList" }, H.config.map(function (e) { return o.a.createElement(J.b, { to: e.path, key: e.name }, e.name, o.a.createElement("span", { className: "TW_UI_author" }, "@ ", e.author)) })), o.a.createElement(X.d, null, H.config.map(function (e) { return o.a.createElement(X.b, { key: e.name, className: "__componentDetail", path: e.path, component: function () { return o.a.createElement("div", { className: "rightComponent" }, e.component()) } }) }), o.a.createElement(X.a, { to: "/button" }))))) }, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (e) { e.unregister() }) }], [[28, 1, 2]]]);
//# sourceMappingURL=main.69d3e2de.chunk.js.map