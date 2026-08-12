import Link from "next/link";
import styled from "styled-components";
import { device } from "../../data/device";
import comics from "../../data/comics";

const SiteHeader = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #321f71;
  /* z-index: 2; */
  justify-content: space-between;
  margin: auto;
  flex-grow: 0;
  font-size: 1.1rem;
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.laptop} {
    width: 100%;
  }
`;

const LogoArea = styled("div")`
  /* display: flex;
  height: 50px;
  width: 100%;
  @media ${device.tablet} {
    width: 370px;
  } */
  cursor: pointer;
`;

const MainNavigation = styled("nav")`
  background: #321f71;
  color: white;
  padding: 12px;
  @media (max-width: 768px) {
    padding-bottom: 30px;
  }
  font-family: "DM Sans", "FuturaStdBold", Helvetica, Arial;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;

  @media ${device.laptop} {
    flex-grow: 0;
    width: 400px;
  }
`;

const MenuItem = styled(Link)`
  cursor: pointer;
  color: white;
  text-decoration: none;
  &:hover {
    font-weight: 600;
  }
`;

const StImg = styled("img")`
  flex: 1;
  flex-basis: 0px;
  height: 50px;
  width: 100%;
  @media ${device.tablet} {
    width: 370px;
  }
`;
export default function Header() {
  const lastComicPageNumber = comics.length;
  const url = `/page/${lastComicPageNumber + 1}`;
  return (
    <>
      <SiteHeader data-id="header-container">
        <LogoArea data-id="logo-container">
          <Link as="/" href="/">
            <StImg
              src="/img/logo/SMB_logo.svg"
              alt="I Just Want To See My Boyfriend - logo"
            />
          </Link>
        </LogoArea>
        <MainNavigation data-id="main-navigation">
          <MenuItem href={url}>comic</MenuItem>
          <MenuItem href="/about">about</MenuItem>
          <MenuItem href="https://smar.gumroad.com/" target="_blank">
            store
          </MenuItem>
        </MainNavigation>
      </SiteHeader>
    </>
  );
}
