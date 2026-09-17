// // console.log("Let's Come On!!");

// // // ========================================
// // // Exercise 1 — Create User Service
// // // ========================================

// // // Business requirements:
// // //
// // // createUser(users, userData)
// // //
// // // 1. The incoming userData has already passed basic validation.
// // // 2. Email uniqueness is case-insensitive.
// // //    Example:
// // //    "VIKAS@example.com" and "vikas@example.com"
// // //    represent the same email.
// // //
// // // 3. If a user with that email already exists, return:
// // //
// // // {
// // //   success: false,
// // //   code: "DUPLICATE_EMAIL",
// // //   message: "A user with this email already exists"
// // // }
// // //
// // // 4. If no duplicate exists:
// // //    - create a new user
// // //    - id must be one greater than the highest existing user id
// // //    - preserve the supplied name and email
// // //    - add the new user to the users array
// // //
// // // 5. Return:
// // //
// // // {
// // //   success: true,
// // //   user: newlyCreatedUser
// // // }
// // //
// // // 6. An empty users array is valid.
// // //    In that case, the first created user should have id 1.

// // function createUser(users, userData) {
// //   const usersEmailSet = new Set();

// //   let largestId = 0;

// //   for (const user of users) {
// //     if (user.id > largestId) {
// //       largestId = user.id;
// //     }
// //     usersEmailSet.add(user.email.trim().toLowerCase());
// //   }

// //   const normalizedEmail = userData.email.toLowerCase();

// //   if (usersEmailSet.has(normalizedEmail)) {
// //     return {
// //       success: false,
// //       code: "DUPLICATE_EMAIL",
// //       message: "A user with this email already exists",
// //     };
// //   }

// //   const newlyCreatedUser = {
// //     id: largestId + 1,
// //     name: userData.name,
// //     email: userData.email,
// //   };

// //   users.push(newlyCreatedUser);

// //   return {
// //     success: true,
// //     user: newlyCreatedUser,
// //   };
// // }

// // // ========================================
// // // Tests
// // // ========================================

// // // ----- Test 1: Normal creation -----

// // const users1 = [
// //   { id: 1, name: "Asha", email: "asha@example.com" },
// //   { id: 4, name: "Ravi", email: "ravi@example.com" },
// // ];

// // const result1 = createUser(users1, {
// //   name: "Kiran",
// //   email: "kiran@example.com",
// // });

// // console.log(
// //   "Test 1:",
// //   result1.success === true &&
// //     result1.user.id === 5 &&
// //     result1.user.name === "Kiran" &&
// //     result1.user.email === "kiran@example.com" &&
// //     users1.length === 3,
// // );

// // // ----- Test 2: Duplicate email, different casing -----

// // const users2 = [{ id: 3, name: "Vikas", email: "vikas@example.com" }];

// // const result2 = createUser(users2, {
// //   name: "Another Vikas",
// //   email: "VIKAS@example.com",
// // });

// // console.log(
// //   "Test 2:",
// //   result2.success === false &&
// //     result2.code === "DUPLICATE_EMAIL" &&
// //     result2.message === "A user with this email already exists" &&
// //     users2.length === 1,
// // );

// // // ----- Test 3: Empty array -----

// // const users3 = [];

// // const result3 = createUser(users3, {
// //   name: "Meena",
// //   email: "meena@example.com",
// // });

// // console.log(
// //   "Test 3:",
// //   result3.success === true &&
// //     result3.user.id === 1 &&
// //     users3.length === 1 &&
// //     users3[0].id === 1,
// // );

// // // Expected:
// // // Test 1: true
// // // Test 2: true
// // // Test 3: true

// // // ========================================
// // // Additional debugging tests
// // // ========================================

// // // ----- Test 4: Existing email has different casing -----

// // const users4 = [{ id: 1, name: "Vikas", email: "VIKAS@example.com" }];

// // const result4 = createUser(users4, {
// //   name: "Another Vikas",
// //   email: "vikas@example.com",
// // });

// // console.log(
// //   "Test 4:",
// //   result4.success === false &&
// //     result4.code === "DUPLICATE_EMAIL" &&
// //     users4.length === 1,
// // );

// // // ----- Test 5: Highest ID is not the last record -----

// // const users5 = [
// //   { id: 10, name: "Asha", email: "asha@example.com" },
// //   { id: 3, name: "Ravi", email: "ravi@example.com" },
// //   { id: 7, name: "Kiran", email: "kiran@example.com" },
// // ];

// // const result5 = createUser(users5, {
// //   name: "Meena",
// //   email: "meena@example.com",
// // });

// // console.log("Test 5:", result5.success === true && result5.user.id === 11);

// // // Correct final output should eventually be:
// // // Test 4: true
// // // Test 5: true

// console.log("-----");

// // ========================================
// // Exercise 2 — Update Task Service
// // ========================================

// // Business requirements:
// //
// // updateTask(tasks, taskId, updates)
// //
// // Assume taskId and updates have already passed basic request validation.
// //
// // Each task has:
// // {
// //   id,
// //   title,
// //   status
// // }
// //
// // Rules:
// //
// // 1. Find the task matching taskId.
// //
// // 2. If no task exists, return:
// //
// // {
// //   success: false,
// //   code: "TASK_NOT_FOUND",
// //   message: "Task was not found"
// // }
// //
// // 3. A task whose current status is "completed" cannot be changed.
// //    Return:
// //
// // {
// //   success: false,
// //   code: "TASK_ALREADY_COMPLETED",
// //   message: "Completed tasks cannot be updated"
// // }
// //
// // 4. Otherwise update only the fields supplied in `updates`.
// //
// //    `updates` may contain:
// //    - title
// //    - status
// //
// //    A missing field must leave the existing value unchanged.
// //
// // 5. Modify the matching task inside the original tasks array.
// //
// // 6. Return:
// //
// // {
// //   success: true,
// //   task: updatedTask
// // }

// // Vikas writes the important logic.
// function updateTask(tasks, taskId, updates) {
//   const task = tasks.find((task) => task.id === taskId);

//   if (!task) {
//     return {
//       success: false,
//       code: "TASK_NOT_FOUND",
//       message: "Task was not found",
//     };
//   }

//   if (task.status === "completed") {
//     return {
//       success: false,
//       code: "TASK_ALREADY_COMPLETED",
//       message: "Completed tasks cannot be updated",
//     };
//   }

//   if (updates.status !== undefined) {
//     task.status = updates.status;
//   }

//   if (updates.title !== undefined) {
//     task.title = updates.title;
//   }

//   return {
//     success: true,
//     task,
//   };
// }

// // ========================================
// // Tests
// // ========================================

// // ----- Test 1: Update title only -----

// const tasks1 = [
//   { id: 1, title: "Prepare report", status: "pending" },
//   { id: 2, title: "Call customer", status: "in-progress" },
// ];

// const result1Task = updateTask(tasks1, 1, {
//   title: "Prepare monthly report",
// });

// console.log(
//   "Exercise 2 - Test 1:",
//   result1Task.success === true &&
//     result1Task.task.title === "Prepare monthly report" &&
//     result1Task.task.status === "pending" &&
//     tasks1[0].title === "Prepare monthly report",
// );

// // ----- Test 2: Task does not exist -----

// const tasks2 = [{ id: 1, title: "Prepare report", status: "pending" }];

// const result2Task = updateTask(tasks2, 99, {
//   status: "completed",
// });

// console.log(
//   "Exercise 2 - Test 2:",
//   result2Task.success === false &&
//     result2Task.code === "TASK_NOT_FOUND" &&
//     tasks2[0].status === "pending",
// );

// // ----- Test 3: Completed task cannot change -----

// const tasks3 = [{ id: 7, title: "Send invoice", status: "completed" }];

// const result3Task = updateTask(tasks3, 7, {
//   title: "Send updated invoice",
//   status: "in-progress",
// });

// console.log(
//   "Exercise 2 - Test 3:",
//   result3Task.success === false &&
//     result3Task.code === "TASK_ALREADY_COMPLETED" &&
//     tasks3[0].title === "Send invoice" &&
//     tasks3[0].status === "completed",
// );

// // ----- Test 4: Update status without changing title -----

// const tasks4 = [{ id: 5, title: "Review refund", status: "pending" }];

// const result4Task = updateTask(tasks4, 5, {
//   status: "in-progress",
// });

// console.log(
//   "Exercise 2 - Test 4:",
//   result4Task.success === true &&
//     result4Task.task.title === "Review refund" &&
//     result4Task.task.status === "in-progress",
// );

// // Expected:
// // Exercise 2 - Test 1: true
// // Exercise 2 - Test 2: true
// // Exercise 2 - Test 3: true
// // Exercise 2 - Test 4: true

console.log("-----");

// ========================================
// Exercise 3 — Cancel Appointment Service
// ========================================

// Business requirements:
//
// cancelAppointment(appointments, appointmentId, cancellationReason)
//
// Assume the inputs have already passed basic request validation.
//
// Each appointment looks like:
//
// {
//   id,
//   customerName,
//   status
// }
//
// Rules:
//
// 1. Find the appointment matching appointmentId.
//
// 2. If it does not exist, return:
//
// {
//   success: false,
//   code: "APPOINTMENT_NOT_FOUND",
//   message: "Appointment was not found"
// }
//
// 3. If the appointment is already cancelled, return:
//
// {
//   success: false,
//   code: "ALREADY_CANCELLED",
//   message: "Appointment is already cancelled"
// }
//
// 4. A completed appointment cannot be cancelled.
//
// Return:
//
// {
//   success: false,
//   code: "APPOINTMENT_COMPLETED",
//   message: "Completed appointments cannot be cancelled"
// }
//
// 5. Any other existing appointment may be cancelled.
//
// Change the appointment so that:
// - status becomes "cancelled"
// - cancellationReason is added using the supplied reason
//
// Preserve all other existing appointment fields.
//
// 6. The original appointments array must contain the updated appointment.
//
// 7. On success return:
//
// {
//   success: true,
//   appointment: updatedAppointment
// }

// Write the full service logic yourself.
function cancelAppointment(appointments, appointmentId, cancellationReason) {
  const appointment = appointments.find(
    (appointment) => appointment.id === appointmentId,
  );

  if (!appointment) {
    return {
      success: false,
      code: "APPOINTMENT_NOT_FOUND",
      message: "Appointment was not found",
    };
  }

  if (appointment.status === "cancelled") {
    return {
      success: false,
      code: "ALREADY_CANCELLED",
      message: "Appointment is already cancelled",
    };
  }

  if (appointment.status === "completed") {
    return {
      success: false,
      code: "APPOINTMENT_COMPLETED",
      message: "Completed appointments cannot be cancelled",
    };
  }

  appointment.status = "cancelled";
  appointment.cancellationReason = cancellationReason;

  return {
    success: true,
    appointment,
  };
}

// ========================================
// Tests
// ========================================

// ----- Test 1: Normal cancellation -----

const appointments1 = [
  {
    id: 1,
    customerName: "Asha",
    status: "confirmed",
  },
  {
    id: 2,
    customerName: "Ravi",
    status: "scheduled",
  },
];

const cancelResult1 = cancelAppointment(
  appointments1,
  1,
  "Customer is unavailable",
);

console.log(
  "Exercise 3 - Test 1:",
  cancelResult1.success === true &&
    cancelResult1.appointment.status === "cancelled" &&
    cancelResult1.appointment.cancellationReason ===
      "Customer is unavailable" &&
    cancelResult1.appointment.customerName === "Asha" &&
    appointments1[0].status === "cancelled",
);

// ----- Test 2: Appointment does not exist -----

const appointments2 = [
  {
    id: 5,
    customerName: "Kiran",
    status: "scheduled",
  },
];

const cancelResult2 = cancelAppointment(appointments2, 99, "Incorrect booking");

console.log(
  "Exercise 3 - Test 2:",
  cancelResult2.success === false &&
    cancelResult2.code === "APPOINTMENT_NOT_FOUND" &&
    appointments2[0].status === "scheduled",
);

// ----- Test 3: Already cancelled -----

const appointments3 = [
  {
    id: 8,
    customerName: "Meena",
    status: "cancelled",
    cancellationReason: "Previous cancellation",
  },
];

const cancelResult3 = cancelAppointment(appointments3, 8, "New reason");

console.log(
  "Exercise 3 - Test 3:",
  cancelResult3.success === false &&
    cancelResult3.code === "ALREADY_CANCELLED" &&
    appointments3[0].cancellationReason === "Previous cancellation",
);

// ----- Test 4: Completed appointment -----

const appointments4 = [
  {
    id: 10,
    customerName: "John",
    status: "completed",
  },
];

const cancelResult4 = cancelAppointment(
  appointments4,
  10,
  "Customer requested cancellation",
);

console.log(
  "Exercise 3 - Test 4:",
  cancelResult4.success === false &&
    cancelResult4.code === "APPOINTMENT_COMPLETED" &&
    appointments4[0].status === "completed" &&
    appointments4[0].cancellationReason === undefined,
);

// Expected:
// Exercise 3 - Test 1: true
// Exercise 3 - Test 2: true
// Exercise 3 - Test 3: true
// Exercise 3 - Test 4: true
