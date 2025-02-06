# HNG-stage-0
 This is an expressjs project that provides a single endpoint to retrieve user information


# Requirement
To install required dependencies

```bash
npm install express
npm install  cors
```

## How to run the endpoint
To start the express server, first build it into javascrit by run the following:

```bash
npm run build
npm run dev
```

## Endpoint
GET /
Returns user information including email, current datetime in UTC, and GitHub URL.


## EndpointURL
Endpoint URL is below:
```bash
https://hng-stage-0-production-935d.up.railway.app/
```

Example response:
```bash
{
  "email": "akinboyewaiyanuoluwa15@gmail.com",
  "current_datetime": "2025-02-05T00:39:31.253Z",
  "github_url": "https://github.com/Oluiy/HNG-stage-0"
}
```

## backlink
```bash
https://hng.tech/hire/javascript-developers
```