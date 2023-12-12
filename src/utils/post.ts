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

const modifyPostTitleBody = (fetchedPost: IPost, havePost: boolean) => {
  const postTitle = truncateTextWithEllipsis(
    capitalizedString(fetchedPost.title),
    55,
    !havePost
  );
  const postBody = truncateTextWithEllipsis(
    capitalizedString(fetchedPost.body),
    100,
    !havePost
  );
  return [postTitle, postBody];
};

export { getCardClassNames, modifyPostTitleBody };
