import { TEST_ARTICLE_TITLE } from "backend/articlePublishing/collectionConfig";
import { findDraftByExactTitle, insertArticleDraft } from "backend/articlePublishing/draftArticles";
import { buildTestArticleData } from "backend/articlePublishing/testArticle";

/**
 * Inserts one test article into the CMS drafts shadow collection.
 * Never publishes, and never updates an existing item.
 */
export async function createTestArticleDraft() {
  try {
    const existingDraft = await findDraftByExactTitle(TEST_ARTICLE_TITLE);
    if (existingDraft) {
      console.log("Test article draft already exists:", existingDraft._id);
      return {
        success: true,
        status: "draft_already_exists",
        itemId: existingDraft._id,
        title: existingDraft.title || TEST_ARTICLE_TITLE,
      };
    }

    const created = await insertArticleDraft(buildTestArticleData());
    console.log("Created test article draft:", created._id);

    return {
      success: true,
      status: "draft_created",
      itemId: created._id,
      title: created.title || TEST_ARTICLE_TITLE,
    };
  } catch (error) {
    const message = error && error.message ? error.message : String(error);
    console.error("createTestArticleDraft failed:", message);
    return {
      success: false,
      status: "error",
      message,
      title: TEST_ARTICLE_TITLE,
    };
  }
}
