migrate((db) => {
  const collection = new Collection({
    "id": "oppuerspucyrz5c",
    "created": "2023-03-02 15:04:02.233Z",
    "updated": "2023-03-02 15:04:02.233Z",
    "name": "comments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bty1r0xf",
        "name": "field",
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
  const collection = dao.findCollectionByNameOrId("oppuerspucyrz5c");

  return dao.deleteCollection(collection);
})
