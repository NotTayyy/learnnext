migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fx1ql6sydu1eh9c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wqoonttz",
    "name": "comments",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "oppuerspucyrz5c",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fx1ql6sydu1eh9c")

  // remove
  collection.schema.removeField("wqoonttz")

  return dao.saveCollection(collection)
})
