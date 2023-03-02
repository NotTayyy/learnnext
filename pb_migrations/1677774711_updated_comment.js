migrate((db) => {
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cwg7rp0x",
    "name": "children",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "oppuerspucyrz5c",
      "cascadeDelete": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bty1r0xf",
    "name": "message",
    "type": "text",
    "required": true,
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

  // remove
  collection.schema.removeField("wy1ightq")

  // remove
  collection.schema.removeField("cwg7rp0x")

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
})
