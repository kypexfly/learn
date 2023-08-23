type Item = {
  name: string
  href: string
}

type SideBarProps = {
  items: Item[]
}

export const SideBar = ({ items }: SideBarProps) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.href}>
          <a href={item.href}>{item.name}</a>
        </div>
      ))}
    </div>
  )
}
