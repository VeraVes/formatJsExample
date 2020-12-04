exports.format = function (msgs) {
  return Object.entries(msgs).map(([id, msg]) => ({ id, defaultMessage: msg.defaultMessage }))
}
