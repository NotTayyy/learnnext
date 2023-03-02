migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oppuerspucyrz5c")

  collection.name = "comment"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bty1r0xf",
    "name": "message",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oppuerspucyrz5c")

  collection.name = "comments"

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
