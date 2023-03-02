migrate((db) => {
  const collection = new Collection({
    "id": "fx1ql6sydu1eh9c",
    "created": "2023-03-02 15:03:54.365Z",
    "updated": "2023-03-02 15:03:54.365Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aclhfejk",
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
  const collection = dao.findCollectionByNameOrId("fx1ql6sydu1eh9c");

  return dao.deleteCollection(collection);
})
