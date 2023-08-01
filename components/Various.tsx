import Default from '@/components/sidebar/Default'

const components = {
  Default,
}

type Props = {
  name: string
}

export default function Various(props: Props): JSX.Element {
  const SpecificComponent = components[props.name]
  return <SpecificComponent />
}
