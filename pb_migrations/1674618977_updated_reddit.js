migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isoosw9b4rlu9si")

  // remove
  collection.schema.removeField("9fz5zee7")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isoosw9b4rlu9si")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9fz5zee7",
    "name": "comments",
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
