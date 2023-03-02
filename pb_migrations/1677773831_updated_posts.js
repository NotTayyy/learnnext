migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fx1ql6sydu1eh9c")

  collection.name = "post"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4qefm2js",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qfefh78m",
    "name": "body",
    "type": "text",
    "required": true,
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
    "id": "aclhfejk",
    "name": "title",
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
  const collection = dao.findCollectionByNameOrId("fx1ql6sydu1eh9c")

  collection.name = "posts"

  // remove
  collection.schema.removeField("4qefm2js")

  // remove
  collection.schema.removeField("qfefh78m")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aclhfejk",
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
