Frontend: https://github.com/Codaisseur/react-redux-template
Backend: https://github.com/Codaisseur/new-express-template

### User

| key       | data type | required | notes                           |
| --------- | --------- | -------- | ------------------------------- |
| id        | Integer   | yes      | Already added by model:generate |
| name      | String    | yes      |                                 |
| username  | String    | yes      |                                 |
| password  | Integer   | yes      |                                 |
| createdAt | Date      | yes      | Already added by model:generate |
| updatedAt | Date      | yes      | Already added by model:generate |

**Relations:**

- user has many Family Members

### Family Member

| key       | data type | required | notes                           |
| --------- | --------- | -------- | ------------------------------- |
| id        | Integer   | yes      | Already added by model:generate |
| name      | String    | yes      |                                 |
| username  | String    | yes      |                                 |
| who       |
| age       |
| weight    |
| avatar    |
| password  | Integer   | yes      |                                 |
| createdAt | Date      | yes      | Already added by model:generate |
| updatedAt | Date      | yes      | Already added by model:generate |

- Family Members belongs to one user
- Family Memebers has many Medication
- Family Members has many health

### Medication

| key       | data type | required | notes                           |
| --------- | --------- | -------- | ------------------------------- |
| id        | Integer   | yes      | Already added by model:generate |
| Medicine  | String    | yes      |                                 |
| Status    | String    | yes      |                                 |
| createdAt | Date      | yes      | Already added by model:generate |
| updatedAt | Date      | yes      | Already added by model:generate |
| Familyid  | Integer   | yes      | Foreign key (references family) |

- Medication belongs to Family Members

### Health

| key       | data type | required | notes                           |
| --------- | --------- | -------- | ------------------------------- |
| id        | Integer   | yes      | Already added by model:generate |
| Category  | String    | yes      |                                 |
| Data      | Integer   | yes      |                                 |
| Units     | String    | yes      |                                 |
| createdAt | Date      | yes      | Already added by model:generate |
| updatedAt | Date      | yes      | Already added by model:generate |
| Familyid  | Integer   | yes      | Foreign key (references family) |

### Completed

| key          | data type | required | notes                           |
| ------------ | --------- | -------- | ------------------------------- |
| id           | Integer   | yes      | Already added by model:generate |
| Familyid     | Integer   | yes      |                                 |
| MedicationId | Integer   | yes      |                                 |
| HealthId     | Integer   | yes      |                                 |
| createdAt    | Date      | yes      | Already added by model:generate |
| updatedAt    | Date      | yes      | Already added by model:generate |

- Health belongs to Family Members

## User Stories

## 1. As a user I want to view the list of family members

## 2. As a user I want to see details of my every family member health and download weekly report

## 3. As a family memeber I want to Login

## 4. As a family member I want to track my Health Checkups and share with user

## 5. As a family member I want to track my Medication and share with user
