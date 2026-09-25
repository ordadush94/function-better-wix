/**
 * Builds a minimal Ricos document for the CMS RICH_CONTENT field `richcontent`.
 * Shape matches articles already stored in collection 4dbsmbb4d:
 * documentStyle + nodes, with TEXT children and right alignment.
 */
function textNode(id, text) {
  return {
    type: "TEXT",
    id,
    nodes: [],
    textData: {
      text,
      decorations: [],
    },
  };
}

export function buildTestArticleRichContent() {
  return {
    documentStyle: {},
    nodes: [
      {
        type: "HEADING",
        id: "test-heading",
        nodes: [textNode("test-heading-text", "בדיקת מערכת המאמרים")],
        headingData: {
          level: 2,
          textStyle: { textAlignment: "RIGHT" },
        },
      },
      {
        type: "PARAGRAPH",
        id: "test-paragraph-1",
        nodes: [
          textNode(
            "test-paragraph-1-text",
            "אם הטקסט הזה מופיע במערכת ה-CMS, החיבור הראשוני פועל בהצלחה."
          ),
        ],
        paragraphData: {
          textStyle: { textAlignment: "RIGHT" },
        },
      },
      {
        type: "PARAGRAPH",
        id: "test-paragraph-2",
        nodes: [
          textNode(
            "test-paragraph-2-text",
            "המאמר נוצר כטיוטה בלבד ואינו אמור להיות מוצג באתר."
          ),
        ],
        paragraphData: {
          textStyle: { textAlignment: "RIGHT" },
        },
      },
    ],
  };
}
