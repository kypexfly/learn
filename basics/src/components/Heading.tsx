type HeadingProps = {
  text: string
}

const Heading = ({ text }: HeadingProps) => {
  return <h1>{text}</h1>
}

export default Heading
