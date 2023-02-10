migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isoosw9b4rlu9si")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "prrwwvqd",
    "name": "hasChildren",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isoosw9b4rlu9si")

  // remove
  collection.schema.removeField("prrwwvqd")

  return dao.saveCollection(collection)
})
