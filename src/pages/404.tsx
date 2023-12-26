import * as React from "react";
import { Link, HeadFC, PageProps, navigate } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    navigate("/");
  }, []);
  return <></>;
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
