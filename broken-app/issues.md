# Broken App Issues

-uses var/let for variables instead of const
-doesn't implement any error handling via middleware
-isn't using express.json to parse json body
-server isn't seperated from app for testing purposes
-post route doesn't use async function or arrow shorthand
-axios get queries are not returned at same time.
-not properly using async/await for queries
-not returning json using res.json
-not catching error properly, not returning next(e)
 