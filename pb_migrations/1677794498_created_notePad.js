migrate((db) => {
  const collection = new Collection({
    "id": "8xrybbobhfjvm6u",
    "created": "2023-03-02 22:01:38.562Z",
    "updated": "2023-03-02 22:01:38.562Z",
    "name": "notePad",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gbwwrfig",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "finjdici",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8xrybbobhfjvm6u");

  return dao.deleteCollection(collection);
})
