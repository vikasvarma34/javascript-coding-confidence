// const order = {
//   id: 501,
//   status: "confirmed",
//   customer: {
//     id: 21,
//     name: "Ravi",
//     contact: {
//       email: "ravi@example.com",
//       phone: "9876543210",
//     },
//   },
//   delivery: {
//     city: "Hyderabad",
//     fee: 80,
//   },
// };

// // function createOrderDetails(orderData) {
// //   const orderDetails = {
// //     orderId: orderData.id,
// //     customerName: orderData.customer.name,
// //     customerEmail: orderData.customer.contact.email,
// //     deliveryCity: orderData.delivery.city,
// //   };

// //   return orderDetails;
// // }

// // const createOrderDetails = (orderData) => {
// //   return {
// //     orderId: orderData.id,
// //     customerName: orderData.customer.name,
// //     customerEmail: orderData.customer.contact.email,
// //     deliveryCity: orderData.delivery.city,
// //   };
// // };

// // console.log(createOrderDetails(order));

// // {
// //   orderId: 501,
// //   customerName: "Ravi",
// //   customerEmail: "ravi@example.com",
// //   deliveryCity: "Hyderabad"
// // }

// const employeeOne = {
//   id: 101,
//   name: "Meena",
//   manager: {
//     name: "Suresh",
//     contact: {
//       email: "suresh@company.com",
//     },
//   },
// };

// const employeeTwo = {
//   id: 102,
//   name: "Kiran",
//   manager: null,
// };

// const employeeThree = {
//   id: 103,
//   name: "Anjali",
//   manager: {
//     name: "Mahesh",
//   },
// };

// function getManagerEmail(employee) {
//   const managerEmail = employee.manager?.contact?.email;

//   if (!managerEmail) {
//     return "Manager email unavailable";
//   }

//   return managerEmail;
// }

// console.log(getManagerEmail(employeeOne)); // suresh@company.com
// console.log(getManagerEmail(employeeTwo)); // undefined
// console.log(getManagerEmail(employeeThree)); // undefined

// const employeePermissions = {
//   createUser: true,
//   editUser: true,
//   deleteUser: false,
//   viewReports: true,
// };

// const getPermissionNames = (permissions) => Object.keys(permissions);

// console.log(getPermissionNames(employeePermissions));

// const monthlySales = {
//   january: 12000,
//   february: 15000,
//   march: 9000,
//   april: 18000,
// };

// function calculateTotalSales(sales) {
//   const salesValues = Object.values(sales);
//   let totalSales = 0;
//   for (const sale of salesValues) {
//     totalSales += sale;
//   }

//   return totalSales;
// }

// console.log(calculateTotalSales(monthlySales)); // 54000
// console.log(calculateTotalSales({})); // 0

//

// const employeeDetails = {
//   id: 301,
//   name: "Kiran",
//   department: "Engineering",
// };

// const employeeAccess = {
//   role: "developer",
//   active: true,
//   canApprove: false,
// };

// function createEmployeeProfile(details, access) {
//   return {
//     ...details,
//     ...access,
//   };
// }

// const employeeProfile = createEmployeeProfile(employeeDetails, employeeAccess);

// console.log(employeeProfile);
// console.log(employeeDetails);
// console.log(employeeAccess);

// const originalTask = {
//   id: 401,
//   title: "Prepare monthly report",
//   status: "pending",
//   priority: "high",
//   assignedTo: "Meena",
// };

// const updateTaskStatus = (task, newStatus) => {
//   return {
//     ...task,
//     status: newStatus,
//   };
// };

// const completedTask = updateTaskStatus(originalTask, "completed");
// const cancelledTask = updateTaskStatus(originalTask, "cancelled");

// console.log(completedTask);
// // Expected:
// // {
// //   id: 401,
// //   title: "Prepare monthly report",
// //   status: "completed",
// //   priority: "high",
// //   assignedTo: "Meena"
// // }

// console.log(cancelledTask);
// // Expected status: "cancelled"

// console.log(originalTask);
// // Expected status: "pending"

// console.log(completedTask === originalTask);
// // Expected: false

// const anotherTask = {
//   id: 402,
//   title: "Review invoices",
//   status: "in-progress",
//   priority: "medium",
//   assignedTo: "Kiran",
// };

// console.log(updateTaskStatus(anotherTask, "completed"));
// console.log(anotherTask);

// const registrationDataOne = {
//   name: "Ravi",
//   email: "ravi@example.com",
//   referralCode: "FRIEND20",
// };

// const registrationDataTwo = {
//   name: "Meena",
//   email: "meena@example.com",
// };

// const registrationDataThree = {
//   name: "Kiran",
//   email: "kiran@example.com",
//   referralCode: undefined,
// };

// function hasReferralCode(registrationData) {
//   return Object.hasOwn(registrationData, "referralCode");
// }

// console.log(hasReferralCode(registrationDataOne)); // true
// console.log(hasReferralCode(registrationDataTwo)); // false
// console.log(hasReferralCode(registrationDataThree)); // true

// const customerOne = {
//   id: 501,
//   name: "Anjali",
//   city: "Hyderabad",
//   active: true,
// };

// const customerTwo = {
//   id: 502,
//   name: "Kiran",
//   city: "Kodad",
//   active: false,
// };

// function createCustomerDisplay(customer) {
//   const { id, name, city, active } = customer;

//   function activateMessage(activeStatus) {
//     if (activeStatus) {
//       return "Active";
//     }

//     return "Inactive";
//   }

//   const message = `Customer ${id}: ${name} - ${city} - ${activateMessage(active)}`;
//   return message;
// }

// console.log(createCustomerDisplay(customerOne));
// // Expected:
// // Customer 501: Anjali - Hyderabad - Active

// console.log(createCustomerDisplay(customerTwo));
// // Expected:
// // Customer 502: Kiran - Kodad - Inactive

const accountOne = {
  id: 801,
  profile: {
    firstName: "Ravi",
    lastName: "Kumar",
    address: {
      city: "Hyderabad",
    },
  },
  settings: {
    emailNotifications: true,
  },
};

const accountTwo = {
  id: 802,
  profile: {
    firstName: "Meena",
    lastName: "Reddy",
  },
  settings: {
    emailNotifications: false,
  },
};

const accountThree = {
  id: 803,
  profile: {
    firstName: "Kiran",
    lastName: "Rao",
  },
};

function createAccountSummary(account) {
  const { id, profile, settings } = account;
  const { firstName, lastName, address } = profile;
  return {
    accountId: id,
    fullName: firstName + " " + lastName,
    city: address?.city === undefined ? "City unavailable" : address.city,
    notifications:
      settings?.emailNotifications === true ? "Enabled" : "Disabled",
  };
}

console.log(createAccountSummary(accountOne));
// Expected:
// {
//   accountId: 801,
//   fullName: "Ravi Kumar",
//   city: "Hyderabad",
//   notifications: "Enabled"
// }

console.log(createAccountSummary(accountTwo));
// Expected:
// {
//   accountId: 802,
//   fullName: "Meena Reddy",
//   city: "City unavailable",
//   notifications: "Disabled"
// }

console.log(createAccountSummary(accountThree));
// Expected:
// {
//   accountId: 803,
//   fullName: "Kiran Rao",
//   city: "City unavailable",
//   notifications: "Disabled"
// }
