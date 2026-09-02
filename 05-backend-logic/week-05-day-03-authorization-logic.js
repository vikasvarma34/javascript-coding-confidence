console.log("Let's Come On!");

console.log("----");

// ========================================
// Exercise 1 — Refund Edit Permission
// ========================================

// Business rules:
// - An "admin" may edit any refund.
// - A "support" user may edit a refund only if they are assigned to it.
// - A "customer" may edit a refund only if they created it.
// - Any other role must be denied.
// - Return only true or false.

// Before writing code:
// 1. Write your plain-English approach here.
// 2. Then implement canEditRefund().

function canEditRefund(user, refund) {
  return (
    user.role === "admin" ||
    (refund.customerId === user.id && user.role === "customer") ||
    (refund.assignedSupportId === user.id && user.role === "support")
  );
}

// ========================================
// Tests
// ========================================

const admin = {
  id: 1,
  role: "admin",
};

const assignedSupport = {
  id: 7,
  role: "support",
};

const customer = {
  id: 12,
  role: "customer",
};

const otherCustomer = {
  id: 20,
  role: "customer",
};

const refund = {
  id: 500,
  customerId: 12,
  assignedSupportId: 7,
};

console.log("Test 1:", canEditRefund(admin, refund) === true);

console.log("Test 2:", canEditRefund(assignedSupport, refund) === true);

console.log("Test 3:", canEditRefund(customer, refund) === true);

console.log("Test 4:", canEditRefund(otherCustomer, refund) === false);

// Expected:
// Test 1: true
// Test 2: true
// Test 3: true
// Test 4: true

const wrongSupportUser = {
  id: 12,
  role: "support",
};

console.log("Hidden Test:", canEditRefund(wrongSupportUser, refund) === false);

console.log("----");

// ========================================
// Exercise 2 — Task Permissions
// ========================================

// Business rules:
//
// EDIT:
// - An admin may edit any task.
// - A manager may edit any task that is NOT "completed".
// - A normal user may edit only their own task,
//   and only when its status is "draft".
//
// DELETE:
// - An admin may delete any task.
// - A normal user may delete only their own "draft" task.
// - A manager cannot delete tasks unless they are also an admin.
// - Any other situation must be denied.
//
// Return:
// {
//   canEdit: true/false,
//   canDelete: true/false
// }

// Plain-English approach:
// 1.
// 2.
// 3.

function getTaskPermissions(user, task) {
  const canEdit =
    user.role === "admin" ||
    (user.role === "manager" && task.status !== "completed") ||
    (user.role === "user" &&
      task.status === "draft" &&
      user.id === task.ownerId);

  const canDelete =
    user.role === "admin" ||
    (user.role === "user" &&
      task.status === "draft" &&
      user.id === task.ownerId);

  return {
    canEdit,
    canDelete,
  };
}

// ========================================
// Tests
// ========================================

const taskOwner = {
  id: 10,
  role: "user",
};

const manager = {
  id: 20,
  role: "manager",
};

const adminUser = {
  id: 30,
  role: "admin",
};

const otherUser = {
  id: 40,
  role: "user",
};

const draftTask = {
  id: 101,
  ownerId: 10,
  status: "draft",
};

const completedTask = {
  id: 102,
  ownerId: 10,
  status: "completed",
};

function samePermissions(actual, expected) {
  return (
    actual.canEdit === expected.canEdit &&
    actual.canDelete === expected.canDelete
  );
}

console.log(
  "Test 1:",
  samePermissions(getTaskPermissions(taskOwner, draftTask), {
    canEdit: true,
    canDelete: true,
  }),
);

console.log(
  "Test 2:",
  samePermissions(getTaskPermissions(taskOwner, completedTask), {
    canEdit: false,
    canDelete: false,
  }),
);

console.log(
  "Test 3:",
  samePermissions(getTaskPermissions(manager, draftTask), {
    canEdit: true,
    canDelete: false,
  }),
);

console.log(
  "Test 4:",
  samePermissions(getTaskPermissions(manager, completedTask), {
    canEdit: false,
    canDelete: false,
  }),
);

console.log(
  "Test 5:",
  samePermissions(getTaskPermissions(adminUser, completedTask), {
    canEdit: true,
    canDelete: true,
  }),
);

console.log(
  "Test 6:",
  samePermissions(getTaskPermissions(otherUser, draftTask), {
    canEdit: false,
    canDelete: false,
  }),
);

// Expected:
// Test 1: true
// Test 2: true
// Test 3: true
// Test 4: true
// Test 5: true
// Test 6: true

const inProgressTask = {
  id: 103,
  ownerId: 10,
  status: "in_progress",
};

console.log(
  "Hidden Test:",
  samePermissions(getTaskPermissions(manager, inProgressTask), {
    canEdit: true,
    canDelete: false,
  }),
);

console.log("-----------------");
console.log("Exercise 3 — Support Ticket Authorization");

// ========================================
// Exercise 3 — Support Ticket Authorization
// ========================================

// Business rules:
//
// ADMIN:
// - May view, edit, or delete any ticket.
//
// SUPPORT:
// - May view any ticket.
// - May edit only tickets assigned to them.
// - An assigned ticket cannot be edited if its status is "closed".
// - May never delete a ticket.
//
// CUSTOMER:
// - May view only their own ticket.
// - May edit only their own ticket when its status is "open".
// - May never delete a ticket.
//
// OTHER RULES:
// - An unsupported role must be denied.
// - An unknown action must be denied.
//
// Actions will be:
// "view"
// "edit"
// "delete"
//
// Return only true or false.

// Plain-English approach:
// 1.
// 2.
// 3.
// 4.

// function canPerformTicketAction(user, ticket, action) {
//   const allowedRoles = new Set(["admin", "support", "customer"]);
//   const allowedActions = new Set(["view", "edit", "delete"]);

//   return (
//     allowedActions.has(action) &&
//     allowedRoles.has(user.role) &&
//     (user.role === "admin" ||
//       (user.role === "support" &&
//         action !== "delete" &&
//         (action === "view" ||
//           (ticket.assignedSupportId === user.id &&
//             ticket.status !== "closed"))) ||
//       (user.role === "customer" &&
//         ticket.customerId === user.id &&
//         action !== "delete" &&
//         (action === "view" || ticket.status === "open")))
//   );
// }

function canPerformTicketAction(user, ticket, action) {
  const allowedRoles = new Set(["admin", "support", "customer"]);
  const allowedActions = new Set(["view", "edit", "delete"]);

  if (!allowedActions.has(action) || !allowedRoles.has(user.role)) {
    return false;
  }

  if (user.role === "admin") {
    return true;
  }

  if (user.role === "support") {
    if (action === "delete") {
      return false;
    } else if (action === "view") {
      return true;
    } else {
      return ticket.assignedSupportId === user.id && ticket.status !== "closed";
    }
  }

  if (user.role === "customer") {
    if (ticket.customerId !== user.id) {
      return false;
    }

    if (action === "delete") {
      return false;
    }
    return action === "view" || (action === "edit" && ticket.status === "open");
  }

  return false;
}

// ========================================
// Test Data
// ========================================

const exercise3Admin = {
  id: 1,
  role: "admin",
};

const exercise3Support = {
  id: 20,
  role: "support",
};

const exercise3OtherSupport = {
  id: 30,
  role: "support",
};

const exercise3Customer = {
  id: 100,
  role: "customer",
};

const exercise3OtherCustomer = {
  id: 200,
  role: "customer",
};

const exercise3OpenTicket = {
  id: 501,
  customerId: 100,
  assignedSupportId: 20,
  status: "open",
};

const exercise3ClosedTicket = {
  id: 502,
  customerId: 100,
  assignedSupportId: 20,
  status: "closed",
};

// ========================================
// Tests
// ========================================

console.log(
  "Exercise 3 - Test 1:",
  canPerformTicketAction(exercise3Admin, exercise3ClosedTicket, "delete") ===
    true,
);

console.log(
  "Exercise 3 - Test 2:",
  canPerformTicketAction(exercise3Support, exercise3OpenTicket, "edit") ===
    true,
);

console.log(
  "Exercise 3 - Test 3:",
  canPerformTicketAction(exercise3Support, exercise3ClosedTicket, "edit") ===
    false,
);

console.log(
  "Exercise 3 - Test 4:",
  canPerformTicketAction(exercise3OtherSupport, exercise3OpenTicket, "view") ===
    true,
);

console.log(
  "Exercise 3 - Test 5:",
  canPerformTicketAction(exercise3OtherSupport, exercise3OpenTicket, "edit") ===
    false,
);

console.log(
  "Exercise 3 - Test 6:",
  canPerformTicketAction(exercise3Customer, exercise3OpenTicket, "edit") ===
    true,
);

console.log(
  "Exercise 3 - Test 7:",
  canPerformTicketAction(
    exercise3OtherCustomer,
    exercise3OpenTicket,
    "view",
  ) === false,
);

console.log(
  "Exercise 3 - Test 8:",
  canPerformTicketAction(exercise3Customer, exercise3OpenTicket, "delete") ===
    false,
);

console.log(
  "Exercise 3 - Test 9:",
  canPerformTicketAction(exercise3Admin, exercise3OpenTicket, "archive") ===
    false,
);

// Expected:
// Exercise 3 - Test 1: true
// Exercise 3 - Test 2: true
// Exercise 3 - Test 3: true
// Exercise 3 - Test 4: true
// Exercise 3 - Test 5: true
// Exercise 3 - Test 6: true
// Exercise 3 - Test 7: true
// Exercise 3 - Test 8: true
// Exercise 3 - Test 9: true
