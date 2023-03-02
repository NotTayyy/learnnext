migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oppuerspucyrz5c")

  // remove
  collection.schema.removeField("wy1ightq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f2x96pun",
    "name": "parent",
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
  const collection = dao.findCollectionByNameOrId("oppuerspucyrz5c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wy1ightq",
    "name": "parent",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("f2x96pun")

  return dao.saveCollection(collection)
})
