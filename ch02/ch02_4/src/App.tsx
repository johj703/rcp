export default function App() {
  const texts = ['hello', 'world'].map((text, index) => <p key={index}>{text}</p>)
  return <div>{texts}</div>
}
