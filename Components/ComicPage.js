import styled from "styled-components";
import Head from "next/head";
import Image from "./Image";
import ChevronDoubleLeft from "./Icons/ChevronDoubleLeft";
import ChevronDoubleRight from "./Icons/ChevronDoubleRight";
import ChevronRight from "./Icons/ChevronRight";
import ChevronLeft from "./Icons/ChevronLeft";
import comics from "../data/comics";
import DisqusComments from "./DisqusComments";
import { getMetaTags } from "../util";

const StComicPage = styled("div")`
  display: inline-flex;
  flex-direction: column;
  font-size: 1.1rem;
  width: 100%;
`;

const StHideOnMobile = styled("div")`
  @media (max-width: 768px) {
    display: none;
  }
`;

const StPagePagination = styled("div")`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  z-index: 1;
  color: darkorange;

  a {
    text-decoration: none;
    color: #321f71;
  }
  @media (max-width: 768px) {
    transform: translateY(-50%);
  }
`;

const StPageNavigationArrows = styled("div")`
  display: flex;
`;

const StSeason = styled.div`
  display: flex;
  font-weight: 400;
  padding: 10px 15px 5px 15px;
  outline: solid 2px #321f71;
  outline-offset: -1px;
  position: relative;
  top: -2px;
  border-radius: 0px 0px 20px 20px;
  transition: background-color 400ms ease 0s;
  background-color: rgba(255, 255, 255, 0.97);
  color: #321f71;

  :hover {
    background-color: rgba(255, 165, 0, 0.97);
    color: white;
  }

  @media (max-width: 768px) {
    background-color: rgba(255, 165, 0, 0.97);
    color: white;
  }
`;

const StPaginationIcon = styled(StSeason)`
  font-size: 2rem;
  svg {
    height: 1.3rem;
  }
  @media (max-width: 768px) {
    border-radius: 46px;
    padding: 7px;
    margin: 0px 15px;
    background-color: white;
    color: #321f71;
  }
`;

const StPage = styled(StSeason)`
  border-radius: 0px 0px 20px 20px;
  background-color: #321f71;
  color: white;
`;

const StPaginationIconMobile = styled(StPaginationIcon)`
  svg {
    height: 2.6rem;
  }
  transform: translateY(-20%);
  border: solid 2px #321f71;
`;

const StPageImages = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StLink = styled("a")`
  cursor: pointer;
`;

const StPostContainer = styled("div")`
  padding-top: 80px;
  padding-bottom: 40px;
  @media (max-width: 768px) {
    padding-left: 35px;
    padding-right: 35px;
    padding-bottom: 120px;
  }
`;

const StPageDate = styled("div")`
  font-weight: 400;
  font-size: 14px;
  text-align: right;
`;

const StError = styled.div``;

const StPageTitle = styled("h2")``;

const StPostContent = styled("div")``;

const StShaddow = styled("div")`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      180deg,
      rgba(2, 0, 36, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    height: 130px;
    z-index: 242343;
    position: fixed;
    bottom: 60px;
    width: 100%;
    padding-bottom: 25px;
  }
`;

const StMobilePageNavigation = styled("div")`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #321f71;
    height: 60px;
    z-index: 242343;
    position: fixed;
    bottom: 0px;
    width: 100%;
    padding-bottom: 25px;
  }
`;

const StMobilePageNumber = styled("span")`
  color: white;
`;

const ComicPage = (props) => {
  const lastComicPageNumber = comics.length;

  const url = `/page/${lastComicPageNumber}`;
  const { page, error } = props;
  const {
    title,
    date,
    images,
    hoverTitle,
    blogPost,
    pageNumber,
    previous,
    next,
  } = page || {};
  const dateObj = new Date(`${date} 12:00:00`);
  const havePage = Number.isInteger(pageNumber);
  const noValueText = "s̸͙͓̐e̷̥̾ͅc̴̠̊̈ȓ̶͇̥ę̵͝ṭ̵̳̃͂";
  const pageNumberText = havePage ? pageNumber + 1 : noValueText;

  return (
    <StComicPage data-id="comic-page">
      <Head>
        <title>{`I Just Want To See My Boyfriend: `}</title>
        {getMetaTags({
          title: `I Just Want To See My Boyfriend p ${pageNumber + 1}`,
          description: "A webcomic by Smar",
          imageUrl: images?.[0]?.url,
        })}
      </Head>
      <StPagePagination data-id="page-pagination">
        <StPageNavigationArrows>
          <StLink href={`/page/1`}>
            <StPaginationIcon data-id="pagination-icon">
              <ChevronDoubleLeft />
            </StPaginationIcon>
          </StLink>
          <StHideOnMobile>
            <StLink href={`/page/${previous?.pageNumber}`}>
              <StPaginationIcon>
                <ChevronLeft />
              </StPaginationIcon>
            </StLink>
          </StHideOnMobile>
        </StPageNavigationArrows>
        <StPageNavigationArrows>
          <StHideOnMobile>
            <StPage>page {pageNumberText}</StPage>
          </StHideOnMobile>
        </StPageNavigationArrows>
        <StPageNavigationArrows>
          <StHideOnMobile>
            <StLink href={`/page/${next?.pageNumber}`}>
              <StPaginationIcon>
                <ChevronRight />
              </StPaginationIcon>
            </StLink>
          </StHideOnMobile>
          <StLink href={`${url}`}>
            <StPaginationIcon>
              <ChevronDoubleRight />
            </StPaginationIcon>
          </StLink>
        </StPageNavigationArrows>
      </StPagePagination>
      <StLink data-id="page-image-link" href={`/page/${next?.pageNumber}`}>
        <StPageImages title={hoverTitle} data-id="page-images">
          {images?.map?.((image) => {
            const { url, alt } = image;
            return <Image key={url} src={url} alt={alt} />;
          })}
        </StPageImages>
      </StLink>
      <StPostContainer data-id="post-container">
        {error && (
          <StPostContent>
            <StError>{error}</StError>
          </StPostContent>
        )}
        {havePage && (
          <>
            <StPageDate>
              {dateObj.toLocaleDateString("en-UK", {
                dateStyle: "long",
              })}
              <hr />
            </StPageDate>
            <StPageTitle>{title}</StPageTitle>
            <StPostContent dangerouslySetInnerHTML={{ __html: blogPost }} />
          </>
        )}
      </StPostContainer>
      <StShaddow></StShaddow>
      <StMobilePageNavigation>
        <StLink href={`/page/${previous?.pageNumber}`}>
          <StPaginationIconMobile>
            <ChevronLeft />
          </StPaginationIconMobile>
        </StLink>
        <StMobilePageNumber>
          page {pageNumber + 1}/{comics.length}
        </StMobilePageNumber>
        <StLink href={`/page/${next?.pageNumber}`}>
          <StPaginationIconMobile>
            <ChevronRight />
          </StPaginationIconMobile>
        </StLink>
      </StMobilePageNavigation>
      <DisqusComments />
    </StComicPage>
  );
};

export default ComicPage;
