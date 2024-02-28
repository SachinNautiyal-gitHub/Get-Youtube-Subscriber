const swagger = {
    "swagger": "2.0",
    "info": {
        "description": "This project is a part of the Almabetter Capstone project and aims to provide an API for retrieving YouTube subscriber data. ",
        "version": "1.0.0",
        "title": "Get Youtube Subscribers"
    },
    "schemes": ["https","http"],
    "host": "",
    "basePath": "/",
    "paths" : {
        "/subscribers" : {
            "get" : {
                "summary" : "Get all the subscribers",
                "description": "Get all the subscribers in the form of array of subscriber objects",
                "produces": ["application/json"],
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/subscribersResponse"
                            }
                        }
                    }
                }
            }
        },
        "/subscribers/names" : {
            "get" : {
                "summary" : "Get all the subscribers only with two fields",
                "description": "Get all the subscribers only with two fields(name and subscribedChannel) in the form of array of subscriber objects",
                "produces": ["application/json"],
                "parameters": [],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/subscribersnamesResponse"
                            }
                        }
                    }
                    
                }
            }
        },
        "/subscribers/{id}" : {
            "get" : {
                "summary" : "Get a subscriber",
                "description": "Get a subscriber in the form of objects",
                "produces": ["application/json"],
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "description": "task id that needs to be find from database",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                            "$ref": "#/definitions/subscribersResponse"
                        }
                    },
                    "400": {
                        "description": "Invalid status value",
                        "schema": {
                            "$ref": "#/definitions/InvalidResponse"
                        }
                    }
                }
            }
        }
    }, 
    "definitions": {
        "subscribersResponse": {
            "type": "object",
            "properties": {
                "_id": {
                     "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "subscribedChannel": {
                    "type": "string"
                },
                "subscribedDate": {
                    "type": "string"
                },
                "__v": {
                    "type": "integer"
                }
            }
        },
        "subscribersnamesResponse" : {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "subscribedChannel": {
                    "type": "string"
                }
            }
        },
        "InvalidResponse": {
            "type": "object",
            "properties": {
                
                "message": {
                    "type": "string"
                }
            }
  
        }
    }
  }
  
  module.exports = swagger
  