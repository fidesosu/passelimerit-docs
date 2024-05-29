# Representation Formats
---
All Passeli Merit API requests are composed of `JSON` and delivered as an HTTP request to the endpoint URL.

  - All `JSON` should be `UTF-8` encoded.
  - Date and time values are of the form `yyyyMMddHHmmss`.
  - Preferred time zone in the API requests timestamp is `UTC`.
  - Dot (`.`) is used as a decimal separator.
  - Booleans are either `true` or `false`, lowercase (not 1 or 0).
  - Empty values, represented as null should be lowercase.
  - Fields denoting percentages are passed as whole values, not decimals (e.g. `5` for `5%`).

For `GET` request, we expect you send all the parameters inside request body element. 

If the language you're using has problems doing that, you can also add the body to the parameter `Param4Net`.

> [!NOTE]
> Since November 2019 all endpoints accept `POST` method. Except `v1/getglbatches`, which only accepts `GET` method.

## Language Classificator

  - `ET` – Estonian
  - `EN` – English
  - `FI` – Finnish
  - `PL` – Polish
  - `SE` – Swedish
