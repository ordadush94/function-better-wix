import { Permissions, webMethod } from "wix-web-module";
import { createTestArticleDraft as createDraft } from "backend/articlePublishing/createTestArticleDraft";

/**
 * Admin-only entry point for a single manual run.
 * Permissions.Admin blocks site visitors. The implementation lives in a non-web backend file.
 * This method does not publish the item.
 */
export const createTestArticleDraft = webMethod(Permissions.Admin, () => {
  return createDraft();
});
