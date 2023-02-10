migrate((db) => {
  const collection = new Collection({
    "id": "iz5g909wru98vkf",
    "created": "2023-01-24 05:21:42.095Z",
    "updated": "2023-01-24 05:21:42.095Z",
    "name": "notePad",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yv2czxqs",
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
        "id": "97p5hw91",
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
  const collection = dao.findCollectionByNameOrId("iz5g909wru98vkf");

  return dao.deleteCollection(collection);
})
