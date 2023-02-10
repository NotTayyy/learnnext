migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isoosw9b4rlu9si")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s1cxv6kd",
    "name": "isChild",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tnlvpxqf",
    "name": "comment",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y3uuamvh",
    "name": "children",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1000,
      "collectionId": "isoosw9b4rlu9si",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isoosw9b4rlu9si")

  // remove
  collection.schema.removeField("s1cxv6kd")

  // update
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

  // update
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
})
