export default function taskListItems (turndownService) {
  turndownService.addRule('taskListItems', {
    filter: function (node) {
      return node.getAttribute('type') === 'checkbox' && node.parentNode.nodeName === 'LI'
    },
    replacement: function (content, node) {
      return (node.getAttribute('checked') !== null ? '[x]' : '[ ]') + ' '
    }
  })
}
