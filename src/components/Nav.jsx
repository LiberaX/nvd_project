import NavigationLink from "./NavigationLink";

export default function Nav() {
  return (
    <ul className="flex gap-[30px]">
      <li>
        <NavigationLink to="/">Home</NavigationLink>
      </li>
      <li>
        <NavigationLink to="/headphones">Headphones</NavigationLink>
      </li>
      <li>
        <NavigationLink to="/speakers">Speakers</NavigationLink>
      </li>
      <li>
        <NavigationLink to="/earphones">Earphones</NavigationLink>
      </li>
    </ul>
  );
}
