import { breakPoints } from "./breakPoints";

const availHeight = window.screen.availHeight;

const inputUploadImage = {
  outerWidth: availHeight * 0.3,
  outerHeight: availHeight * 0.4,
  innerWidth: availHeight * 0.3 * 0.9,
  innerHeight: availHeight * 0.3 * 0.9,
};

/**
 * @description
 * Specify if component sizes are used in duplicate
 */

export const sizes = {
  pageMaxWidth: breakPoints.md - 500,
  inputUploadImage,
};
