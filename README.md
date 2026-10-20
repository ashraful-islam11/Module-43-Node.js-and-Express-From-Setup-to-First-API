

# Backend Development Journey start" 

## 01. Server

### What is a Server?

Server হলো এমন একটি কম্পিউটার বা সফটওয়্যার, যা Client-এর Request গ্রহণ করে, প্রয়োজন অনুযায়ী কাজ করে এবং Response পাঠায়।

**Server-এর মূল কাজ:
** Request গ্রহণ করা, প্রয়োজনীয় কাজ করা এবং Response পাঠানো।

`Client → Request → Server → Response → Client`
 

## 02. API

### What is an API?

API (Application Programming Interface) হলো এমন একটি Interface, যার মাধ্যমে দুটি Software বা Application নির্দিষ্ট নিয়ম মেনে একে অপরের সঙ্গে যোগাযোগ করতে পারে।

**মূল কাজ:
** এক Application-কে অন্য Application বা Server-এর সঙ্গে যোগাযোগ করে Data আদান-প্রদান করতে সাহায্য করা।


## 03. REST API

### What is a REST API?

REST API হলো API তৈরির একটি architectural style, যেখানে Client HTTP-এর মাধ্যমে Server-এর সঙ্গে যোগাযোগ করে এবং Resource নিয়ে কাজ করে।

**HTTP Methods:**
- `GET` — Read Data
- `POST` — Create Data
- `PUT` — Replace/Update a Resource
- `PATCH` — Partially Update a Resource
- `DELETE` — Delete Data

## 04. CRUD Operations

CRUD হলো Database-এর চারটি মৌলিক Operation।

- **C — Create:** নতুন Data তৈরি করা (`POST`)
- **R — Read:** Data পড়া (`GET`)
- **U — Update:** বিদ্যমান Data পরিবর্তন করা (`PUT` / `PATCH`)
- **D — Delete:** Data মুছে ফেলা (`DELETE`)

CRUD Operations ব্যবহার করে একটি Application-এর Data তৈরি, পড়া, পরিবর্তন ও মুছে ফেলা যায়।

## 05. HTTP Status Codes

HTTP Status Code হলো Server-এর Response-এর একটি সংখ্যাসূচক কোড, যা Request-এর ফলাফল জানায়।

### 2xx — Success
- `200 OK` — Request সফল
- `201 Created` — নতুন Resource তৈরি হয়েছে

### 4xx — Client Error
- `400 Bad Request` — Request-এ সমস্যা
- `401 Unauthorized` — Authentication প্রয়োজন বা অবৈধ
- `403 Forbidden` — অনুমতি নেই
- `404 Not Found` — Resource পাওয়া যায়নি

### 5xx — Server Error
- `500 Internal Server Error` — Server-এ অপ্রত্যাশিত সমস্যা
- `503 Service Unavailable` — Server আপাতত সেবা দিতে পারছে না

## 06. Client vs Server vs Database

### Client
Client হলো যে Application বা Device Server-এর কাছে Request পাঠায়।  
Example: Browser, Next.js Frontend.

### Server
Server Request গ্রহণ করে, প্রয়োজনীয় কাজ করে এবং Response পাঠায়।  
Example: Next.js Route Handler.

### Database
Database হলো Data সংরক্ষণ ও পরিচালনা করার ব্যবস্থা।  
Example: MongoDB.

**Basic Flow:**  
`Client → Request → Server → Database`

Database থেকে Data পাওয়ার পর Server Response তৈরি করে Client-কে পাঠাতে পারে।

---
## Video 02: Node.js

### 1. What is Node.js?

- Node.js হলো একটি **JavaScript Runtime Environment**, যা Browser-এর বাইরে JavaScript চালাতে সাহায্য করে।
- এটি দিয়ে Server-side Application, API এবং Backend তৈরি করা যায়।

### 2. Node.js vs JavaScript

- **JavaScript:** একটি Programming Language, যা দিয়ে কোড লেখা হয়।
- **Node.js:** একটি Runtime Environment, যা JavaScript কোড চালানোর পরিবেশ দেয়।
- JavaScript Browser-এ এবং Node.js-এর মতো Runtime ব্যবহার করে Browser-এর বাইরেও চালানো যায়।

### 3. How Node.js Works

- Node.js, **V8 Engine** ব্যবহার করে JavaScript কোড চালায়।
- V8 Engine JavaScript কোড Execute করে।
- Node.js অতিরিক্ত API দেয়, যার মাধ্যমে File System, Network এবং Server-side কাজ করা যায়।
- Node.js-এর সাহায্যে JavaScript দিয়ে Backend Application চালানো যায়।

---

## Video 03:  Database .

## 1. Database

- Database হলো সংগঠিত Data-এর সংগ্রহ, যেখানে Data সংরক্ষণ ও পরিচালনা করা হয়।
- CRUD Operations: Create, Read, Update, Delete.
- Database-এ Data সংরক্ষিত থাকলে Server Restart হলেও সাধারণত Data থেকে যায়।

## 2. DBMS (Database Management System)

- DBMS হলো Database তৈরি, ব্যবহার ও পরিচালনা করার Software।
- DBMS-এর সাহায্যে Data সংরক্ষণ, খোঁজা, পরিবর্তন ও Delete করা যায়।
- Examples: MongoDB, MySQL, PostgreSQL.

## 3. SQL vs NoSQL

### SQL
- সাধারণত Relational Database; Table, Row ও Column ব্যবহার করে।
- Data-এর মধ্যে Relationship তৈরি করা যায়।
- Examples: MySQL, PostgreSQL.

### NoSQL
- Document, Key-Value, Graph ইত্যাদি Data Model ব্যবহার করে।
- অনেক ক্ষেত্রে Flexible Data Structure সমর্থন করে।
- Example: MongoDB.

### Remember
- SQL ও NoSQL-এর মধ্যে নির্বাচন Project Requirements-এর ওপর নির্ভর করে।
- NoSQL মানেই কোনো Structure নেই—এটা ভুল।


---
## vedio -04

## Express.js

- Express.js হলো Node.js-এর জন্য একটি Web Framework।
- এটি দিয়ে সহজে Web Server ও API তৈরি করা যায়।
- Routing, Request Handling এবং Response পাঠানো সহজ করে।
- Node.js হলো Runtime Environment, আর Express.js হলো Framework।








