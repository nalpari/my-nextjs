import Default from '@/components/sidebar/Default'

const components = {
  Default,
}

type Props = {
  name: string
}

export default function Various(props: Props) {
  const SpecificComponent = components[props.name]
  return <SpecificComponent />
}
