export async function sendMessage(
  to,
  content,
  status = false,
  passId,
  checkNumber = true,
  forcingReturn = false,
  delSend = true
) {
  return WPP.chat.sendTextMessage(to, content, {createChat: checkNumber});
}
