interface IProps {
  text: string;
}

export function speak({ text }: IProps) {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
