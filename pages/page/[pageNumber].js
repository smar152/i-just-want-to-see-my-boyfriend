import { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import ComicPage from "../../Components/ComicPage";
import Layout from "../../Components/Layout/Layout";
import comics from "../../data/comics";

const StComicPageLayout = styled("div")`
  margin: 0px -20px;
`;

const PagePage = ({ page, error }) => {
  const router = useRouter();

  const handleUserKeyPress = (event) => {
    const { keyCode } = event;
    const pageKeyMap = {
      37: page.previous,
      39: page.next,
    };
    const newPage = pageKeyMap[keyCode];
    if (newPage) {
      const { pageNumber } = newPage;
      const url = `/page/${pageNumber}`;
      router.push(url);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <Layout>
      <StComicPageLayout data-id="comic-page-layout">
        <ComicPage page={page} error={error} />
      </StComicPageLayout>
    </Layout>
  );
};

export default PagePage;

function updateIndicesForBrowser(obj) {
  Object.keys(obj).forEach((key) => {
    obj[key] += 1;
  });
}

export const getServerSideProps = async ({ params, res }) => {
  const { pageNumber: urlPageNumber } = params;
  const currentPageNumber = Number(urlPageNumber) - 1;

  const currentPage = comics?.[currentPageNumber];

  let props = {};
  let error = "";

  if (!currentPage) {
    error = `This isn't a valid comic page... What were you looking for?`;
  } else {
    props = {
      ...currentPage,
      pageNumber: currentPageNumber,
    };

    if (typeof currentPage.blogPost !== "string") {
      delete currentPage.blogPost;
    }

    const previous = {
      pageNumber: currentPageNumber,
    };

    const next = {
      pageNumber: currentPageNumber,
    };

    if (currentPageNumber > 0) {
      previous.pageNumber = currentPageNumber - 1;
    }

    updateIndicesForBrowser(previous);
    updateIndicesForBrowser(next);

    props.previous = previous;
    props.next = next;
  }

  return {
    props: {
      page: currentPage
        ? {
            ...props,
          }
        : {},
      error,
    },
  };
};
