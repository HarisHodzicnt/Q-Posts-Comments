import { IPost } from "@root/interfaces/IPost";
import {
  capitalizedString,
  truncateTextWithEllipsis,
} from "./stringManipulation";

const getCardClassNames = (
  id: number,
  styles: CSSModuleClasses,
  havePost: boolean
) => {
  const gradientNumber = (id % 3) + 1;
  const cardClassNames = [
    styles.postCard,
    styles[`gradient-${gradientNumber}`],
    !havePost && styles.standAlone,
  ]
    .filter(Boolean)
    .join(" ");
  return cardClassNames;
};

const modifyPostTitleBody = (fetchedPost: IPost, isStandAlone: boolean) => {
  const postTitle = truncateTextWithEllipsis(
    capitalizedString(fetchedPost.title),
    55,
    isStandAlone
  );
  const postBody = truncateTextWithEllipsis(
    capitalizedString(fetchedPost.body),
    100,
    isStandAlone
  );
  return [postTitle, postBody];
};

const getElementType = (isStandAlone: boolean) =>
  isStandAlone ? "main" : "section";

export { getCardClassNames, modifyPostTitleBody, getElementType };
