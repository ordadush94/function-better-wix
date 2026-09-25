import { ARTICLE_SITE_TIME_ZONE, TEST_ARTICLE_TITLE } from "backend/articlePublishing/collectionConfig";
import { buildTestArticleRichContent } from "backend/articlePublishing/richContent";

/**
 * CMS field `date` is type DATE. Wix stores it as YYYY-MM-DD.
 * Time of day is not part of this field, so the value is today's date in the site timezone.
 */
export function currentArticleDate(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: ARTICLE_SITE_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

/**
 * Field values verified against collection 4dbsmbb4d:
 * - title, newField, altText, meta: TEXT
 * - date: DATE ("YYYY-MM-DD")
 * - arraystring: ARRAY_STRING
 * - richcontent: RICH_CONTENT (Ricos document)
 * The IMAGE field `image` is intentionally omitted in Phase 1.
 */
export function buildTestArticleData(now = new Date()) {
  return {
    title: TEST_ARTICLE_TITLE,
    newField:
      "זהו מאמר ניסוי שנוצר אוטומטית כדי לבדוק את החיבור בין קוד ה-Velo לבין מערכת ה-CMS של האתר.",
    date: currentArticleDate(now),
    arraystring: ["בדיקה"],
    altText: "תמונת בדיקה למאמר אוטומטי",
    meta: "מאמר בדיקה לצורך אימות מערכת יצירת מאמרים אוטומטית באתר.",
    richcontent: buildTestArticleRichContent(),
  };
}
