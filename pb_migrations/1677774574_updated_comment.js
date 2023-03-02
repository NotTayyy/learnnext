migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oppuerspucyrz5c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cwixnrte",
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
    "id": "9aisfxb5",
    "name": "post",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "fx1ql6sydu1eh9c",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("oppuerspucyrz5c")

  // remove
  collection.schema.removeField("cwixnrte")

  // remove
  collection.schema.removeField("9aisfxb5")

  return dao.saveCollection(collection)
})
