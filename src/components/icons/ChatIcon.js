const { createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    width: "19",
    height: "21",
    fill: "none",
    viewBox: "0 0 19 21"
  }, [
    _createVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M14.3035 14.3024C12.0114 16.5948 8.61733 17.09 5.83981 15.8055C5.42978 15.6404 5.09361 15.507 4.77403 15.507C3.88387 15.5123 2.77587 16.3754 2.20002 15.8002C1.62417 15.2243 2.48795 14.1155 2.48795 13.2199C2.48795 12.9003 2.35981 12.5701 2.19474 12.1593C0.909623 9.38222 1.40558 5.98702 3.69769 3.6954C6.6237 0.768324 11.3775 0.768324 14.3035 3.69465C17.2348 6.62625 17.2295 11.3761 14.3035 14.3024Z"
    })
  ]))
}
