export const showMessage = (messageType, message) => {
  const messageElement =
    messageType === "success" ? $(".success") : $(".error");
  messageElement.fadeIn(1000);
  if (message) messageElement.text(message);
  setTimeout(() => {
    messageElement.fadeOut(1000);
  }, 3000);
};
