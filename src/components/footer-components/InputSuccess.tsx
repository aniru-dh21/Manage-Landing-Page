interface MessageProps {
  message: string;
}
export default function InputSuccess({ message }: MessageProps) {
  return <div className="text-green-500 text-sm mt-1">{message}</div>;
}
