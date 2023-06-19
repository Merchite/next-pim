import Link from "next/link";
import { styled } from "styled-components";

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 1rem;
      &:first-child {
        margin-left: 0;
      }
    }
  }
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <ul>
        <li>
          {/* Add Logo to home link */}
          <Link href="/">Home</Link>
        </li>
      </ul>
      {/* Add primary navigation menu with pages */}
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/categories">Categories</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/logout">Logout</Link>
        </li>
      </ul>
      {/* Add secondary navigation with links to profile and link to logout */}
    </NavigationContainer>
  );
}

export default Navigation;