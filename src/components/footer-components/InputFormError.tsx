interface ErrorMsgProps {
  message: string;
}
export default function InputFormError({ message }: ErrorMsgProps) {
  return <div className="text-red-500 text-sm mt-1">{message}</div>;
}
