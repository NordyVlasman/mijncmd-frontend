const { createVNode: _createVNode, openBlock: _openBlock, createBlock: _createBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    width: "21",
    height: "19",
    fill: "none",
    viewBox: "0 0 24 28"
  }, [
    _createVNode("path", {
      "fill-rule": "evenodd",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M12 21.3096C19.049 21.3096 22.3101 20.4053 22.625 16.7756C22.625 13.1485 20.3514 13.3817 20.3514 8.93139C20.3514 5.45518 17.0565 1.5 12 1.5C6.94346 1.5 3.64856 5.45518 3.64856 8.93139C3.64856 13.3817 1.375 13.1485 1.375 16.7756C1.69119 20.419 4.95222 21.3096 12 21.3096Z",
      "clip-rule": "evenodd"
    }),
    _createVNode("path", {
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "1.5",
      d: "M14.986 25.0715C13.2808 26.9649 10.6208 26.9874 8.89935 25.0715"
    })
  ]))
}
