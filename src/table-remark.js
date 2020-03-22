

function remarkTable(options) {
  var settings = options || {}

  return transformer

  function transformer(node) {
    console.log(node)
    return node
  }
  //   var result = util(node, {
  //     heading: heading,
  //     maxDepth: depth,
  //     tight: tight,
  //     skip: skip
  //   })

  //   if (result.index === null || result.index === -1 || !result.map) {
  //     return
  //   }

  //   node.children = [].concat(
  //     node.children.slice(0, result.index),
  //     result.map,
  //     node.children.slice(result.endIndex)
  //   )
  // }
}

module.exports = remarkTable