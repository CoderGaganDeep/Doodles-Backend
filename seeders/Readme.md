Frontend: https://github.com/gagandeepkatodia/Doodles-Frontend
Backend: https://github.com/gagandeepkatodia/Doodles-Backend

### User

| key       | data type | required | notes                           |
| --------- | --------- | -------- | ------------------------------- |
| id        | Integer   | yes      | Already added by model:generate |
| name      | String    | yes      |                                 |
| email     | String    | yes      |                                 |
| password  | Integer   | yes      |                                 |
| phone     | Integer   | yes      |                                 |
| createdAt | Date      | yes      | Already added by model:generate |
| updatedAt | Date      | yes      | Already added by model:generate |

**Relations:**

- User hasMany children -- user.hasMany(models.child)

### Child

| key       | data type | required | notes                           |
| --------- | --------- | -------- | ------------------------------- |
| id        | Integer   | yes      | Already added by model:generate |
| name      | String    | yes      |                                 |
| age       | Integer   | yes      |
| branch    | String    | yes      |
| avatar    | String    | yes      |
| group     | String    | yes      |
| createdAt | Date      | yes      | Already added by model:generate |
| updatedAt | Date      | yes      | Already added by model:generate |
| userId    | Integer   | yes      | Already added by model:generate |

- child hasOne Parent --- child.hasOne(models.parent)
- child has Many feeds -- child.hasMany(models.feed)

### Teacher

| key       | data type | required | notes                           |
| --------- | --------- | -------- | ------------------------------- |
| id        | Integer   | yes      | Already added by model:generate |
| name      | String    | yes      |                                 |
| username  | String    | yes      |                                 |
| password  | String    | yes      |                                 |
| branch    | String    | yes      |                                 |
| createdAt | Date      | yes      | Already added by model:generate |
| updatedAt | Date      | yes      | Already added by model:generate |

- Teachers has Many feeds -- teacher.hasMany(models.feed)

### Feed

| key       | data type | required | notes                            |
| --------- | --------- | -------- | -------------------------------- |
| id        | Integer   | yes      | Already added by model:generate  |
| feed      | String    | no       |                                  |
| imageUrl  | String    | no       |                                  |
| createdAt | Date      | yes      | Already added by model:generate  |
| updatedAt | Date      | yes      | Already added by model:generate  |
| childId   | Integer   | no       | Foreign key (references child)   |
| teacherId | Integer   | yes      | Foreign key (references teacher) |

- Feed belongs to One child -- feed.belongsTo(models.child, { foreignKey:'childId'});

- Feed belongs to One teacher -- feed.belongsTo(models.teacher, { foreignKey:'teacherId'});

## User Stories

## 0 Backend

## 1. As a general user I want to get information about the play school

## 2. As a parent I want to login & register with security and add my child

## 3. As a parent I want to see the daily feed & pictures of my child

## 4. As a teacher I want to login

## 5. As a teacher I want to post updates for children
