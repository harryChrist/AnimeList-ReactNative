import Realm from "realm";

const TaskSchema = {
    name:'Task',
    properties: {
        _id: 'int',
        name: 'string',
        status: 'string?',
    },
    primaryKey: '_id',
}

const realm = await Realm.open({
    path: "myrealm",
    schema: [TaskSchema],
});

import Realm from "realm";
import TaskSchema from "../business/models/Task";

const getRealm = async () =>
  await Realm.open({
    path: "myrealm",
    schema: [TaskSchema],
  });

export default getRealm;

// Add a couple of Tasks in a single, atomic transaction
let task1, task2;
realm.write(() => {
  task1 = realm.create("Task", {
    _id: 1,
    name: "go grocery shopping",
    status: "Open",
  });
  task2 = realm.create("Task", {
    _id: 2,
    name: "go exercise",
    status: "Open",
  });
  console.log(`created two tasks: ${task1.name} & ${task2.name}`);
});
// use task1 and task2