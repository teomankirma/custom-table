export const showMessage = (messageType) => {
  const messageElement =
    messageType === "success" ? $(".success") : $(".error");
  messageElement.fadeIn(1000);
  setTimeout(() => {
    messageElement.fadeOut(1000);
  }, 3000);
};
