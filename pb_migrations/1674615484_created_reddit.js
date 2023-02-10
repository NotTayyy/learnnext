migrate((db) => {
  const collection = new Collection({
    "id": "isoosw9b4rlu9si",
    "created": "2023-01-25 02:58:04.032Z",
    "updated": "2023-01-25 02:58:04.032Z",
    "name": "reddit",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "elrucxt8",
        "name": "username",
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
  const collection = dao.findCollectionByNameOrId("isoosw9b4rlu9si");

  return dao.deleteCollection(collection);
})
