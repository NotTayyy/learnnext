migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isoosw9b4rlu9si")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ietyqzzu",
    "name": "likes",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isoosw9b4rlu9si")

  // remove
  collection.schema.removeField("ietyqzzu")

  return dao.saveCollection(collection)
})
