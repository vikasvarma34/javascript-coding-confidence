const printLog = (value) => {
  console.log(value);
};

const normalizeStringToLowerCase = (string, replaceValue) => {
  return string?.trim().toLowerCase() || replaceValue;
};

const normalizeString = (string, replaceValue) => {
  return string?.trim() || replaceValue;
};

// printLog("Let's Come on!");

// Week 2 Day 6 — Transformation Challenge
// Exercise 1: Filter + Map

// const orders = [
//   {
//     id: 101,
//     customer: {
//       name: "  Asha  ",
//       email: "ASHA@EXAMPLE.COM",
//     },
//     status: "completed",
//     total: 125,
//   },
//   {
//     id: 102,
//     customer: {
//       name: "Ravi",
//       email: "ravi@example.com",
//     },
//     status: "pending",
//     total: 80,
//   },
//   {
//     id: 103,
//     customer: {
//       name: "  Meera",
//       email: "MEERA@EXAMPLE.COM ",
//     },
//     status: "COMPLETED",
//     total: 210,
//   },
//   {
//     id: 104,
//     customer: null,
//     status: "completed",
//     total: 95,
//   },
// ];

// /*
// BUSINESS RULES

// 1. Keep only completed orders.
// 2. Status comparison must ignore:
//    - uppercase/lowercase differences
//    - extra spaces

// 3. Transform each completed order into:

// {
//   orderId,
//   customerName,
//   customerEmail,
//   total
// }

// 4. customerName:
//    - trim spaces
//    - if customer or name is missing, use "Unknown"

// 5. customerEmail:
//    - trim spaces
//    - convert to lowercase
//    - if missing, use ""

// 6. Do not mutate the original array or objects.

// EXPECTED MAIN OUTPUT

// [
//   {
//     orderId: 101,
//     customerName: "Asha",
//     customerEmail: "asha@example.com",
//     total: 125
//   },
//   {
//     orderId: 103,
//     customerName: "Meera",
//     customerEmail: "meera@example.com",
//     total: 210
//   },
//   {
//     orderId: 104,
//     customerName: "Unknown",
//     customerEmail: "",
//     total: 95
//   }
// ]
// */

// function createCompletedOrderResponses(orders = []) {
//   // TODO:
//   // 1. filter completed orders
//   // 2. map them into clean API response objects

//   const filteredOrders = orders.filter(
//     (order) => order?.status?.trim().toLowerCase() === "completed",
//   );

//   return filteredOrders.map((order) => {
//     return {
//       orderId: order.id,
//       customerName: order?.customer?.name?.trim() ?? "Unknown",
//       customerEmail: order?.customer?.email?.trim().toLowerCase() ?? "",
//       total: order?.total,
//     };
//   });
// }

// // ---------- TEST DATA ----------

// const result = createCompletedOrderResponses(orders);

// const expectedMainResult = [
//   {
//     orderId: 101,
//     customerName: "Asha",
//     customerEmail: "asha@example.com",
//     total: 125,
//   },
//   {
//     orderId: 103,
//     customerName: "Meera",
//     customerEmail: "meera@example.com",
//     total: 210,
//   },
//   {
//     orderId: 104,
//     customerName: "Unknown",
//     customerEmail: "",
//     total: 95,
//   },
// ];

// // Test 1 — normal dataset
// console.log(
//   "Test 1:",
//   JSON.stringify(result) === JSON.stringify(expectedMainResult),
// );

// // Test 2 — empty array
// console.log(
//   "Test 2:",
//   JSON.stringify(createCompletedOrderResponses([])) === JSON.stringify([]),
// );

// // Test 3 — normalization
// const normalizationTest = [
//   {
//     id: 201,
//     customer: {
//       name: "  Vikas ",
//       email: " VIKAS@EXAMPLE.COM ",
//     },
//     status: "  CoMpLeTeD  ",
//     total: 50,
//   },
// ];

// console.log(
//   "Test 3:",
//   JSON.stringify(createCompletedOrderResponses(normalizationTest)) ===
//     JSON.stringify([
//       {
//         orderId: 201,
//         customerName: "Vikas",
//         customerEmail: "vikas@example.com",
//         total: 50,
//       },
//     ]),
// );

// // Test 4 — original data should not be mutated
// console.log(
//   "Test 4:",
//   orders[0].customer.name === "  Asha  " &&
//     orders[0].customer.email === "ASHA@EXAMPLE.COM",
// );

//

// printLog("");

// Exercise 2 — Appointment Summary

/*
BUSINESS RULES

Create:

createConfirmedAppointmentSummary(appointments = [])

The function must:

1. Keep only CONFIRMED appointments.
   - Ignore capitalization.
   - Ignore extra spaces.

2. Transform each confirmed appointment into:

{
  appointmentId,
  patientId,
  patientName,
  serviceName,
  price,
  appointmentDate
}

3. patientName:
   - trim spaces

4. Sort appointments by appointmentDate:
   - EARLIEST first.

5. Calculate the totalRevenue from all confirmed appointments.

6. Return ONE API-style object:

{
  totalAppointments: number,
  totalRevenue: number,
  appointments: [...]
}

7. Do not mutate the original data.


EXPECTED MAIN RESULT:

{
  totalAppointments: 3,
  totalRevenue: 2000,
  appointments: [
    {
      appointmentId: "APT-103",
      patientId: 503,
      patientName: "Ravi",
      serviceName: "Blood Test",
      price: 800,
      appointmentDate: "2026-08-11"
    },
    {
      appointmentId: "APT-101",
      patientId: 501,
      patientName: "Anil Kumar",
      serviceName: "General Consultation",
      price: 500,
      appointmentDate: "2026-08-15"
    },
    {
      appointmentId: "APT-104",
      patientId: 504,
      patientName: "Meera",
      serviceName: "Eye Examination",
      price: 700,
      appointmentDate: "2026-08-18"
    }
  ]
}
*/

// function createConfirmedAppointmentSummary(appointments = []) {
//   const confirmedAppointments = appointments.filter(
//     (appointment) =>
//       normalizeStringToLowerCase(appointment?.status, "Unknown") ===
//       "confirmed",
//   );

//   const mappedAppintments = confirmedAppointments.map((appointment) => {
//     return {
//       appointmentId: appointment.id,
//       patientId: appointment?.patient?.id,
//       patientName: normalizeString(appointment?.patient?.name, "Unknown"),
//       serviceName: normalizeString(appointment?.service?.name, "Unknown"),
//       price: appointment?.service?.price ?? 0,
//       appointmentDate: appointment?.appointmentDate,
//     };
//   });

//   const sortedAppointments = mappedAppintments.sort(
//     (firstAppointment, secondAppointment) => {
//       return firstAppointment.appointmentDate.localeCompare(
//         secondAppointment.appointmentDate,
//       );
//     },
//   );

//   return sortedAppointments.reduce(
//     (orderSummary, currentAppointment) => {
//       orderSummary.totalAppointments += 1;
//       orderSummary.totalRevenue += currentAppointment?.price;
//       orderSummary.appointments.push(currentAppointment);

//       return orderSummary;
//     },
//     {
//       totalAppointments: 0,
//       totalRevenue: 0,
//       appointments: [],
//     },
//   );
// }

// const appointments = [
//   {
//     id: "APT-101",
//     status: "confirmed",
//     patient: { id: 501, name: "  Anil Kumar " },
//     service: { name: "General Consultation", price: 500 },
//     appointmentDate: "2026-08-15",
//   },
//   {
//     id: "APT-102",
//     status: "cancelled",
//     patient: { id: 502, name: "Priya" },
//     service: { name: "Dental Cleaning", price: 1200 },
//     appointmentDate: "2026-08-12",
//   },
//   {
//     id: "APT-103",
//     status: " CONFIRMED ",
//     patient: { id: 503, name: "  Ravi" },
//     service: { name: "Blood Test", price: 800 },
//     appointmentDate: "2026-08-11",
//   },
//   {
//     id: "APT-104",
//     status: "confirmed",
//     patient: { id: 504, name: "Meera " },
//     service: { name: "Eye Examination", price: 700 },
//     appointmentDate: "2026-08-18",
//   },
// ];

// const expectedResult = {
//   totalAppointments: 3,
//   totalRevenue: 2000,
//   appointments: [
//     {
//       appointmentId: "APT-103",
//       patientId: 503,
//       patientName: "Ravi",
//       serviceName: "Blood Test",
//       price: 800,
//       appointmentDate: "2026-08-11",
//     },
//     {
//       appointmentId: "APT-101",
//       patientId: 501,
//       patientName: "Anil Kumar",
//       serviceName: "General Consultation",
//       price: 500,
//       appointmentDate: "2026-08-15",
//     },
//     {
//       appointmentId: "APT-104",
//       patientId: 504,
//       patientName: "Meera",
//       serviceName: "Eye Examination",
//       price: 700,
//       appointmentDate: "2026-08-18",
//     },
//   ],
// };

// // Tests

// const result = createConfirmedAppointmentSummary(appointments);

// console.log(
//   "Test 1:",
//   JSON.stringify(result) === JSON.stringify(expectedResult),
// );

// console.log(
//   "Test 2:",
//   JSON.stringify(createConfirmedAppointmentSummary([])) ===
//     JSON.stringify({
//       totalAppointments: 0,
//       totalRevenue: 0,
//       appointments: [],
//     }),
// );

// console.log(
//   "Test 3:",
//   appointments[0].patient.name === "  Anil Kumar " &&
//     appointments[2].status === " CONFIRMED ",
// );

printLog("");

// Exercise 3 — Independent Transformation Challenge

/*
BUSINESS RULES

1. Process only shipments whose status is "delivered".
   - Ignore uppercase/lowercase differences.
   - Ignore leading or trailing spaces.

2. For every delivered shipment, create a response object containing:
   - shipmentId
   - customerName
   - city
   - amount
   - deliveredDate

3. Clean customerName and city by removing extra spaces.

4. Sort the delivered shipments by amount:
   - highest amount first.

5. Return one summary object containing:
   - totalShipments: number of delivered shipments
   - totalAmount: combined amount of all delivered shipments
   - shipments: the cleaned and sorted shipment objects

6. Do not modify the original shipments array or its objects.
*/

function createDeliveredShipmentReport(shipments = []) {
  return shipments
    .filter(
      (shipment) =>
        normalizeStringToLowerCase(shipment?.status, "unknown") === "delivered",
    )
    .map((shipment) => {
      return {
        shipmentId: shipment?.id,
        customerName: normalizeString(shipment?.customer?.name, "Unknown"),
        city: normalizeString(shipment?.customer?.address?.city, "Unknown"),
        amount: shipment?.payment?.amount ?? 0,
        deliveredDate: shipment?.deliveredDate,
      };
    })
    .sort((firstShipment, secondShipment) => {
      return secondShipment.amount - firstShipment.amount;
    })
    .reduce(
      (shipmentReport, currentShipment) => {
        shipmentReport.totalShipments += 1;
        shipmentReport.totalAmount += currentShipment.amount;
        shipmentReport.shipments.push(currentShipment);

        return shipmentReport;
      },
      {
        totalShipments: 0,
        totalAmount: 0,
        shipments: [],
      },
    );
}

const shipments = [
  {
    id: "S-101",
    status: " delivered ",
    customer: { name: "  Asha ", address: { city: " Hyderabad " } },
    payment: { amount: 1200 },
    deliveredDate: "2026-08-08",
  },
  {
    id: "S-102",
    status: "pending",
    customer: { name: "Ravi", address: { city: "Chennai" } },
    payment: { amount: 900 },
    deliveredDate: null,
  },
  {
    id: "S-103",
    status: "DELIVERED",
    customer: { name: " Meera", address: { city: " Bengaluru " } },
    payment: { amount: 1800 },
    deliveredDate: "2026-08-07",
  },
  {
    id: "S-104",
    status: "delivered",
    customer: { name: "Kiran ", address: { city: " Pune" } },
    payment: { amount: 700 },
    deliveredDate: "2026-08-09",
  },
];

const expectedResult = {
  totalShipments: 3,
  totalAmount: 3700,
  shipments: [
    {
      shipmentId: "S-103",
      customerName: "Meera",
      city: "Bengaluru",
      amount: 1800,
      deliveredDate: "2026-08-07",
    },
    {
      shipmentId: "S-101",
      customerName: "Asha",
      city: "Hyderabad",
      amount: 1200,
      deliveredDate: "2026-08-08",
    },
    {
      shipmentId: "S-104",
      customerName: "Kiran",
      city: "Pune",
      amount: 700,
      deliveredDate: "2026-08-09",
    },
  ],
};

const result = createDeliveredShipmentReport(shipments);

console.log(
  "Test 1:",
  JSON.stringify(result) === JSON.stringify(expectedResult),
);

console.log(
  "Test 2:",
  JSON.stringify(createDeliveredShipmentReport([])) ===
    JSON.stringify({
      totalShipments: 0,
      totalAmount: 0,
      shipments: [],
    }),
);

console.log(
  "Test 3:",
  shipments[0].customer.name === "  Asha " &&
    shipments[0].customer.address.city === " Hyderabad ",
);
