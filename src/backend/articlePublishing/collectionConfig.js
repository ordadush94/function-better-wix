/**
 * Published articles collection. Writes must never target this ID directly.
 * The CMS Publish plugin is active on this collection (default status DRAFT).
 */
export const PUBLISHED_ARTICLES_COLLECTION_ID = "4dbsmbb4d";

/**
 * Drafts shadow collection used by the Publish plugin.
 * Official Data Items API: a new draft is an insert into `{publishedId}__drafts`.
 * This shadow collection is not listed by the Collections API until drafts exist.
 */
export const DRAFT_ARTICLES_COLLECTION_ID = `${PUBLISHED_ARTICLES_COLLECTION_ID}__drafts`;

/** Site timezone from site properties. The CMS `date` field is DATE, not DATETIME. */
export const ARTICLE_SITE_TIME_ZONE = "Asia/Jerusalem";

export const TEST_ARTICLE_TITLE = "בדיקת אוטומציה – מאמר ניסוי";
