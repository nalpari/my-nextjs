type TitleProps = {
  title: string
}

export default function Title(props: TitleProps) {
  return (
    <>
      <div>
        <h1 className="text-4xl">{props.title}</h1>
      </div>
    </>
  )
}
