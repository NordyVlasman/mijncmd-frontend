const { createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    width: "23",
    height: "23",
    fill: "none",
    viewBox: "0 0 23 23"
  }, [
    _createVNode("path", {
      "fill-rule": "evenodd",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M15.6535 2.6355H7.34571C4.45058 2.6355 2.6355 4.68537 2.6355 7.58625V15.4139C2.6355 18.3148 4.44196 20.3647 7.34571 20.3647H15.6525C18.5572 20.3647 20.3647 18.3148 20.3647 15.4139V7.58625C20.3647 4.68537 18.5572 2.6355 15.6535 2.6355Z",
      "clip-rule": "evenodd"
    }),
    _createVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M11.4949 15.3334V11.5001"
    }),
    _createVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M11.4903 7.86247H11.4999"
    })
  ]))
}