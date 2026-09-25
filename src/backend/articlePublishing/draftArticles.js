import wixData from "wix-data";
import {
  DRAFT_ARTICLES_COLLECTION_ID,
  PUBLISHED_ARTICLES_COLLECTION_ID,
} from "backend/articlePublishing/collectionConfig";

const READ_OPTIONS = { suppressAuth: true };
const DRAFT_WRITE_OPTIONS = { suppressAuth: true };

function assertDraftCollection(collectionId) {
  if (collectionId !== DRAFT_ARTICLES_COLLECTION_ID) {
    throw new Error("Refusing to write outside the drafts shadow collection.");
  }
  if (collectionId === PUBLISHED_ARTICLES_COLLECTION_ID) {
    throw new Error("Refusing to write to the published articles collection.");
  }
}

function isMissingCollectionError(error) {
  const message = String(error && error.message ? error.message : error);
  return message.includes("WDE0025") || message.includes("does not exist");
}

/**
 * Looks up one draft by exact title. A missing shadow collection means there are no drafts yet.
 * This never reads or writes the published collection.
 */
export async function findDraftByExactTitle(title) {
  assertDraftCollection(DRAFT_ARTICLES_COLLECTION_ID);

  try {
    const result = await wixData
      .query(DRAFT_ARTICLES_COLLECTION_ID)
      .eq("title", title)
      .limit(1)
      .find(READ_OPTIONS);

    return result.items[0] || null;
  } catch (error) {
    if (isMissingCollectionError(error)) {
      return null;
    }
    throw error;
  }
}

/**
 * Inserts exactly one item into the drafts shadow collection.
 * Does not call publish, save, or update, and does not target the published collection.
 */
export async function insertArticleDraft(article) {
  assertDraftCollection(DRAFT_ARTICLES_COLLECTION_ID);

  return wixData.insert(
    DRAFT_ARTICLES_COLLECTION_ID,
    article,
    DRAFT_WRITE_OPTIONS
  );
}
