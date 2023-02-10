migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isoosw9b4rlu9si")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tnlvpxqf",
    "name": "content",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y3uuamvh",
    "name": "parent",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "isoosw9b4rlu9si",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isoosw9b4rlu9si")

  // remove
  collection.schema.removeField("tnlvpxqf")

  // remove
  collection.schema.removeField("9fz5zee7")

  // remove
  collection.schema.removeField("y3uuamvh")

  return dao.saveCollection(collection)
})
