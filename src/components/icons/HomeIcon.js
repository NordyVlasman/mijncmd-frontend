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
      d: "M6.95646 18.8328V15.9194C6.95644 15.1784 7.52542 14.5763 8.23038 14.5713H10.8127C11.521 14.5713 12.0952 15.1749 12.0952 15.9194V18.8419C12.095 19.471 12.5728 19.9853 13.1711 20H14.8927C16.6088 20 18 18.5376 18 16.7337V8.44594C17.9908 7.73629 17.6738 7.06988 17.1392 6.63638L11.2516 1.65104C10.2202 0.782988 8.75397 0.782988 7.72253 1.65104L1.86076 6.64543C1.32413 7.07717 1.00661 7.74468 1 8.45499V16.7337C1 18.5376 2.3912 20 4.10734 20H5.82886C6.44211 20 6.93924 19.4774 6.93924 18.8328"
    })
  ]))
}
